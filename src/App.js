import './App.css';
import BankDetails from './components/Pages/BankDetails/BankDetails';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Transfer from './components/Pages/Transfer/Transfer';
import Support from './components/Pages/Support/Support';
import Home from './components/Pages/Home/Home';
import AccountOpening from './components/Pages/AccountOpening/AccountOpening';
import GetAccountDetails from './components/Pages/GetAccountDetails/GetAccountDetails';
import DepositAmount from './components/Pages/AmountManagement/DepositAmount/DepositAmount';
import WithdrawAmount from './components/Pages/AmountManagement/WithdrawAmount/WithdrawAmount';
import History from './components/Pages/History/History';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accounts" element={<BankDetails />} />
          <Route path="/money-transfer" element={<Transfer />} />
          <Route path="/support" element={<Support />} />
          <Route path="/account-opening" element={<AccountOpening />} />
          <Route path="/balance-check" element={<GetAccountDetails />} />
          <Route path="/customer-support" element={<Support />} />
          <Route path="/deposit" element={<DepositAmount />} />
          <Route path="/withdraw" element={<WithdrawAmount />} />
          <Route path="/history" element={<History />} /> 
          <Route path="*" element={<NotFound />} />
          
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
