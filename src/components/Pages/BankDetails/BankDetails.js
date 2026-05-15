
import { API_BASE_URL } from "../../../Constants/Constants";
import "./BankDetails.css";
import { useState, useEffect,useCallback } from "react";

const BankDetails = () => {
  const [user, setUser] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupAction, setPopupAction] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [amount, setAmount] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchAllBankCustomers = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${API_BASE_URL}/api/accounts${searchQuery ? `/search?query=${searchQuery}` : ''}`
      );

      const data = await response.json();

      console.log(data);
      const normalizedData = Array.isArray(data) ? data : [data];

      setUser(normalizedData);

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [searchQuery]);


  useEffect(() => {
    fetchAllBankCustomers();
  }, [fetchAllBankCustomers]);

  const handlePopup = (action, userData) => {
    setPopupAction(action);
    setSelectedUser(userData);
    setAmount('');
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setPopupAction('');
    setSelectedUser(null);
    setAmount('');
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(`${popupAction} ${amount} for user`, selectedUser);

  //   handleClosePopup();
  // };

  const handleDepositAmount = async (accountId) => {
    console.log(`Deposit ${amount} for user ${accountId}`);
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/accounts/${accountId}/${popupAction.toLowerCase()}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            amount: amount,
          }),
        }
      );

      const data = await response.json();

      console.log(data);

      handleClosePopup();
      fetchAllBankCustomers();

    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteUser = async (accountId) => {
    console.log(`Delete user ${accountId}`);
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/accounts/${accountId}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      console.log(data);

      handleClosePopup();
      fetchAllBankCustomers();

    } catch (error) {
      console.log(error);
    }
  };



  console.log(user,"user");


  return (
    <div className="bank-details">
      <h1>All Bank Customers</h1>
      <div style={{display: 'flex', justifyContent:"space-between", alignItems: 'center', gap: '1rem', marginBottom: '1rem'}}>
        <div className="search-container">
          <label htmlFor="search">Search</label>
          <input placeholder="Search by account number or name" type="search" id="search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
        {/* <button className="search-button" type="button" onClick={handleSearchDetails}>Search</button> */}
      </div>

    {user?.length > 0 ? (
        <div className="bank-details-container">
        <table>
          <thead>
            <tr>
              <th className="text-capitalize">Account Number</th>
              <th className="text-capitalize">Account Holder Name</th>
              <th className="text-capitalize">Balance</th>
              <th className="text-capitalize">Address</th>
              <th className="text-capitalize">Actions</th>
              <th className="text-capitalize">Delete Account</th>
            </tr>
          </thead>
          <tbody>
            {user && user?.map((user) => (
              <tr key={user.id}>
                <td data-label="Account Number">{user.id}</td>
                <td data-label="Account Holder Name">{user.accountHolderName}</td>
                <td data-label="Balance">{user.balance}</td>
                <td data-label="Address">{user.address}</td>
                <td data-label="actions-container">
                  <div className="actions-container">
                    <button onClick={() => handlePopup("Deposit", user)}>Deposit</button>
                    <button onClick={() => handlePopup("Withdraw", user)}>Withdraw</button>
                  </div>

                </td>
                <td data-label="delete-account">
                  <button className="delete-account" onClick={() => handlePopup("Delete", user)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    ) : (
      loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <p className="no-data">No data found</p>
      )
    )}

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-container">
            <div className="popup-header">
              <h2>{`${popupAction} ${popupAction !== 'Delete' ? 'Amount' : 'Account'}`}</h2>
              <button className="close-btn" onClick={handleClosePopup}>&times;</button>
            </div>
            <div className="popup-body">
              {popupAction === 'Delete' ? (
                <div className="delete-confirmation">
                  <p>Are you sure you want to delete this account?</p>
                  <p><strong>Account: {selectedUser?.accountHolderName}</strong></p>
                  <p><strong>Balance: {selectedUser?.balance}/-</strong></p>
                </div>
              ) : (
                <form >
                  <div className="form-group">
                    <label htmlFor="amount">Enter Amount</label>
                    <input
                      type="number"
                      id="amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Enter amount"
                      min="0"
                      step="0.01"
                      required
                    />
                  </div>
                  <div className="form-info">
                    <p><strong>Account:</strong> {selectedUser?.accountHolderName}</p>
                    <p><strong>Current Balance:</strong> {selectedUser?.balance}/-</p>
                  </div>
                  <div className="popup-actions">
                    <button type="button" className="cancel-btn" onClick={handleClosePopup}>
                      Cancel
                    </button>
                    <button type="button" className="submit-btn" onClick={() => handleDepositAmount(selectedUser.id)}>
                      Save
                    </button>
                  </div>
                </form>
              )}
              {popupAction === 'Delete' && (
                <div className="popup-actions">
                  <button className="cancel-btn" onClick={handleClosePopup}>
                    Cancel
                  </button>
                  <button className="delete-btn" onClick={() => handleDeleteUser(selectedUser.id)}>
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default BankDetails