import React, {  useState } from "react";
import Overview from "../Operations/OverView";
import GetProfile from "../Operations/GetProfile";
import CheckBalance from "../Operations/CheckBalance";
import Deposit from "../Operations/Deposit";
import Withdraw from "../Operations/Withdraw";
import ChangePin from "../Operations/ChangePin";
import Login from "../AuthComponents/Login";
import axios from "axios";
const DashBoard = ()=>{
    const [activeTab,setactiveTab] = useState('overview')
    const [loggedOut,setLoggedOut] = useState(false)
    const logoutHandler = async (e)=>{
        e.preventDefault()
        try{
            const res = await axios.post('http://localhost:3000/api/auth/logout',{},{
                withCredentials:true
            })

            alert(res.data.message)
            setLoggedOut(true)
        }
        catch(err){
            alert(err.response?.data?.message)
        }
    }
    if(loggedOut){
        return <Login/>
    }
    return (
        <div className="h-screen flex flex-col">
            <div className="flex items-center justify-between bg-blue-700 p-5 h-20">
                <h1 className="text-2xl font-bold text-white">ATM DashBoard</h1>
                <button onClick={logoutHandler} className="bg-red-600 rounded-xl px-3 py-2 text-white font-semibold">Log Out</button>
            </div>
            <div className="flex items-start justify-center flex-1">
                <div className="w-1/4 bg-gray-700 p-5 h-full">
                    <h1 className="text-2xl font-medium text-white">MENU</h1>
                    <div><button 
                    onClick = {()=>{
                        setactiveTab('overview')
                    }}
                    className={`text-left mt-3 p-2 w-full text-xl font-small text-white py-2 rounded-xl ${activeTab === 'overview' ? 'bg-blue-800 font-semibold' : 'hover:bg-gray-600'}`}>Overview</button></div>
                    <div><button
                    onClick = {()=>{
                        setactiveTab('getProfile')
                    }}
                    className={`text-left mt-3 p-2 w-full text-xl font-small text-white py-2 rounded-xl ${activeTab === 'getProfile' ? 'bg-blue-800 font-semibold' : 'hover:bg-gray-600'}`}>Get Profile</button></div>
                    <div><button 
                    onClick = {()=>{
                        setactiveTab('checkBalance')
                    }}
                    className={`text-left mt-3 p-2 w-full text-xl font-small text-white py-2 rounded-xl ${activeTab === 'checkBalance' ? 'bg-blue-800 font-semibold' : 'hover:bg-gray-600'}`}>Check Balance</button></div>
                    <div><button 
                    onClick = {()=>{
                        setactiveTab('Deposit')
                    }}
                    className={`text-left mt-3 p-2 w-full text-xl font-small text-white py-2 rounded-xl ${activeTab === 'Deposit' ? 'bg-blue-800 font-semibold' : 'hover:bg-gray-600'}`}>Deposit</button></div>
                    <div><button 
                    onClick = {()=>{
                        setactiveTab('Withdraw')
                    }}
                    className={`text-left mt-3 p-2 w-full text-xl font-small text-white py-2 rounded-xl ${activeTab === 'Withdraw' ? 'bg-blue-800 font-semibold' : 'hover:bg-gray-600'}`}>Withdraw</button></div>
                    <div><button onClick = {()=>{
                        setactiveTab('changePin')
                    }}
                    className={`text-left mt-3 p-2 w-full text-xl font-small text-white py-2 rounded-xl ${activeTab === 'changePin' ? 'bg-blue-800 font-semibold' : 'hover:bg-gray-600'}`}>Change PIN</button></div>
                </div>
                <div className="w-3/4 h-full">
                   {activeTab === 'overview' && <Overview setactiveTab={setactiveTab}/>}
                   {activeTab === 'getProfile' && <GetProfile setactiveTab={setactiveTab}/>}
                   {activeTab === 'checkBalance' && <CheckBalance setactiveTab={setactiveTab}/>}
                   {activeTab === 'Withdraw' && <Withdraw setactiveTab={setactiveTab}/>}
                   {activeTab === 'Deposit' && <Deposit setactiveTab={setactiveTab}/>}
                   {activeTab === 'changePin' && <ChangePin setactiveTab={setactiveTab}/>}
                </div>
            </div>
        </div>
    )
}

export default DashBoard