import React, { useEffect, useState } from 'react'
import { API_BASE_URL } from "../../../Constants/Constants";
import './Transfer.css';



const Transfer = () => {
    const [user, setUser] = useState(null);
    const [selectedFromUser, setSelectedFromUser] = useState(null);
    const [selectedToUser, setSelectedToUser] = useState(null);
    const [transferDetails, setTransferDetails] = useState({
        selectedFromAccount: null,
        selectedToAccount: null,
        transferAmount: 0

    });


    console.log(user);

    const fetchAllBankCustomers = async () => {
        try {
            const response = await fetch(
                `${API_BASE_URL}/api/accounts`
            );
            const data = await response.json();
            console.log(data);
            setUser(data);

        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        fetchAllBankCustomers();
    }, []);

    const handleTransferAmount = async () => {
        console.log("Transfer Amount", transferDetails);
        try {
            const response = await fetch(
                `${API_BASE_URL}/api/accounts/transferAmount`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(transferDetails),
                }
            );
            const data = await response.json();
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    };


    return (
        <div className="transfer">
            <h1>Transfer Amount</h1>
            <form className="transfer-form">
                <div className="form-group">
                    <label htmlFor="fromAccount">From Account :- {selectedFromUser?.accountHolderName}</label>
                    <select id="fromAccount" onChange={(e) => {
                        const selectedId = e.target.value;
                        const selectedUser = user.find((user) => user.id === selectedId);
                        setSelectedFromUser(selectedUser);
                        setTransferDetails({ ...transferDetails, selectedFromAccount: selectedId })
                    }} value={selectedFromUser?.id}>
                        <option value="">Select Account</option>
                        {user?.map((user) => (
                            <option key={user.id} value={user.id}>
                                {user.id}
                            </option>
                        ))}
                    </select>
                    <label>Current Balance: {selectedFromUser?.balance} </label>
                </div>
                <div className="form-group">
                    <label htmlFor="toAccount">To Account :- {selectedToUser?.accountHolderName}</label>
                    <select id="toAccount" onChange={(e) => {
                        const selectId = e.target.value;
                        const selectedUser = user.find((user) => user.id === selectId);
                        setSelectedToUser(selectedUser);
                        setTransferDetails({ ...transferDetails, selectedToAccount: selectId })
                    }} value={selectedToUser?.id}>
                        <option value="">Select Account</option>
                        {user?.filter((user) => user.id !== selectedFromUser?.id)?.map((user) => (
                            <option key={user.id} value={user.id}>
                                {user.id}
                            </option>
                        ))}
                    </select>
                    <label>Current Balance: {selectedToUser?.balance} </label>
                </div>
                <div className="form-group">
                    <label htmlFor="amount">Amount  {transferDetails?.transferAmount ? `: ${transferDetails?.transferAmount}` : ''}</label>
                    <input type="number" id="amount" placeholder="Enter amount" onChange={(e) => setTransferDetails({ ...transferDetails, transferAmount: e.target.value })} />
                </div>
                <button type="button" className="transfer-btn" onClick={() => handleTransferAmount()}>Transfer</button>
            </form>

        </div>
    )
}

export default Transfer