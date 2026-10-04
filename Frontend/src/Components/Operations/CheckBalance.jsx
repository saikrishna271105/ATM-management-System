import React,{useEffect,useState} from "react";
import axios from "axios";
const CheckBalance = ({setactiveTab})=>{
    const [userData,setuserData] = useState({})
    useEffect(() => {
        const getProfile = async () => {
            try {
                const res = await axios.get(
                    'http://localhost:3000/api/transactions/checkBalance',
                    {
                        withCredentials: true
                    }
                )

                setuserData(res.data)
            } 
            catch (err) {
                alert(err.response?.data?.message);
            }
        };

        getProfile();
    }, []);
    return (
        <div className="p-5">
            <div className="text-center mt-10">
                <span className="text-4xl font-bold">Available Balance</span>
                <br></br>
                <span className="text-4xl font-bold mt-3">Rs. {userData?.balance}</span>
                <p className="mt-5">Your current account balance</p>
            </div>
             <div className="w-full px-6 py-5 bg-gray-200 rounded-xl mt-12">
                <p>Account Number</p>
                <p className="text-xl font-medium">{userData?.accNo}</p>
            </div>
            <button 
            onClick={()=>{
                setactiveTab('overview')
            }}
            className="w-full bg-black px-3 py-3 text-white font-bold text-xl rounded-xl mt-10">Back To Dashboard</button>
        </div>
    )
}

export default CheckBalance