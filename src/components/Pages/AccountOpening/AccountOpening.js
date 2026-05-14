import React, { useState } from 'react'
import './AccountOpening.css';
import { API_BASE_URL } from '../../../Constants/Constants';

const AccountOpening = () => {

    const [formData, setFormData] = useState({
        accountHolderName: '',
        balance: '',
        address: ''
    })

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmitAccountDetails = async (e) => {
        e.preventDefault()
        console.log(formData)
        
        try {
            const response = await fetch(`${API_BASE_URL}/api/accounts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="account-opening">
            <h1>Account Opening</h1>
            <form className="account-form" onSubmit={handleSubmitAccountDetails}>
                <div className="form-group">
                    <label htmlFor="accountHolderName">Enter Account Holder Name</label>
                    <input type="text" id="accountHolderName" name="accountHolderName" required onChange={handleInputChange} value={formData.accountHolderName} />
                </div>
                <div className="form-group">
                    <label htmlFor="balance">Enter Balance</label>
                    <input type="number" id="balance" name="balance" required onChange={handleInputChange} value={formData.balance}  min={100}/>
                </div>
                <div className="form-group">
                    <label htmlFor="address">Enter Address</label>
                    <input type="text" id="address" name="address" required onChange={handleInputChange} value={formData.address} />
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    )
}


export default AccountOpening