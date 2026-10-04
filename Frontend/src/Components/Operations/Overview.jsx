import React,{useEffect,useState} from "react";
import axios from "axios";
const Overview = ({setactiveTab})=>{
    const [userData,setuserData] = useState({})
    useEffect(() => {
        const getProfile = async () => {
            try {
                const data = await axios.get(
                    'http://localhost:3000/api/auth/profile',
                    {
                        withCredentials: true
                    }
                );
                setuserData(data.data)
            } 
            catch (err) {
                alert(err.response?.data?.message);
            }
        };

        getProfile();
    }, []);
    return (
        <div className="p-5">
            <h1 className="text-gray-700 font-small text-xl mt-5">OVERVIEW</h1>
            <h1 className="font-bold text-2xl mt-6">Hello , {userData?.user?.username}</h1>
            <h1 className="font-small text-lg mt-4">Welcome to your account</h1>
            <div className="bg-gray-400 p-5 rounded-xl mt-6">
                <h1 className="text-white font-small text-lg">Available Balance</h1>
                <h1 className="text-white font-bold text-2xl">Rs. {userData?.user?.balance}</h1>
                <h1 className="text-white font-small text-lg">Account Summary</h1>
            </div>
            <h1 className="mt-5 font-semmibold text-xl">Quick Actions</h1>
            <div className="flex flex-wrap items-center justify-between">
                <div className="w-[45%] p-4 flex items-center justify-center border-3 rounded-xl mt-3">
                    <button 
                    onClick={
                        ()=>{
                            setactiveTab('getProfile')
                        }
                    }
                    className="text-xl font-medium w-full h-full">Profile</button>
                </div>
                <div className="w-[45%] p-4 flex items-center justify-center border-3 rounded-xl mt-3">
                    <button
                    onClick={
                        ()=>{
                            setactiveTab('checkBalance')
                        }
                    }
                    className="text-xl font-medium w-full h-full">Balance</button>
                </div>
                <div className="w-[45%] p-4 flex items-center justify-center border-3 rounded-xl mt-3">
                    <button 
                    onClick={
                        ()=>{
                            setactiveTab('Deposit')
                        }
                    }
                    className="text-xl font-medium w-full h-full">Deposit</button>
                </div>
                <div className="w-[45%] p-4 flex items-center justify-center border-3 rounded-xl mt-3">
                    <button 
                    onClick={
                        ()=>{
                            setactiveTab('Withdraw')
                        }
                    }
                    className="text-xl font-medium w-full h-full">Withdraw</button>
                </div>
            </div>
        </div>
    )
}

export default Overview