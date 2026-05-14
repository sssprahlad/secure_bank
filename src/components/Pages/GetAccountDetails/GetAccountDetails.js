import { useState, useEffect } from 'react'
import "./GetAccountDetails.css"
import { API_BASE_URL } from '../../../Constants/Constants'


const GetAccountDetails = () => {
  const [accountDetails, setAccountDetails] = useState(null)
  const [accountNumber, setAccountNumber] = useState("")
  const [notFound, setNotFound] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setNotFound(false)
    setAccountDetails(null)
  }, [accountNumber])

  const handleGetAccountDetails = async (e) => {
    e.preventDefault()
    console.log("Getting account details for:", accountNumber)
    try {
      setIsLoading(true)
      const response = await fetch(`${API_BASE_URL}/api/accounts/${accountNumber}`)
      const data = await response.json()
      if (response.status === 400) {
        setAccountDetails(null)
        setNotFound(true)
        setIsLoading(false)
        return
      }
      setAccountDetails(data)
      setNotFound(false)
      setIsLoading(false)
    } catch (error) {
      console.error("Error getting account details:", error)
      setNotFound(true)
      setIsLoading(false)
    }
  }

  return (
    <div className="account-details-container">
      <h1 className="account-details-title">Get Account Details</h1>
      <form onSubmit={handleGetAccountDetails}>
        <div className="account-details-form">
          <label htmlFor="accountNumber">Enter Account Number</label>
          <input type="search" id="accountNumber" placeholder="Enter account number" name="accountNumber" onChange={(e) => setAccountNumber(e.target.value)} value={accountNumber} required />
          {/* <p className={accountNumber?.length === 0 ? 'error-message' : 'error-hidden'}>Account number is required</p> */}
        </div>
        <button className="get-details-button" type="submit">Get Details</button>
      </form>
      {accountDetails && !notFound &&(

        <div className="account-details">
          <h2>Account Details</h2>
          <p>Account Number: {accountDetails.id}</p>
          <p>Account Holder Name: {accountDetails.accountHolderName}</p>
          <p>Account Balance: {accountDetails.balance}</p>
          <p>Customer Address: {accountDetails.address}</p>
        </div>
      )}
      {notFound && (
        <div className="account-details">
          <h2>Account Not Found</h2>
          <p>Account number {accountNumber} does not exist</p>
        </div>
      )}
      {isLoading && (
        <div className="account-details">
          <h2>Loading...</h2>
        </div>
      )}
    </div>
  )
}

export default GetAccountDetails