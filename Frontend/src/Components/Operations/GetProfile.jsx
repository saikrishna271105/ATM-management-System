import React,{useState,useEffect} from "react";
import axios from "axios";
const GetProfile = ({setactiveTab})=>{
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
            <div className="text-center">
                <span className="text-2xl font-bold text-blue mt-4">{userData?.user?.username}</span>
                <br></br>
                <span className="mt-2">Account Holder</span>
                <br></br>
                <button className="rounded-lg px-2 bg-green-200 text-green mt-2">Active Account</button>
            </div>
            <div className="p-3 border-2 mt-12 rounded-t-xl">
                <p>Username</p>
                <p className="text-xl font-bold">{userData?.user?.username}</p>
            </div>
            <div className="p-3 border-2">
                <p>Account Number</p>
                <p className="text-xl font-bold">{userData?.user?.accNo}</p>
            </div>
            <div className="p-3 border-2">
                <p>Mobile No</p>
                <p className="text-xl font-bold">{userData?.user?.mobile}</p>
            </div>
            <div className="p-3 border-2 rounded-b-xl">
                <p>Address</p>
                <p className="text-xl font-bold">{userData?.user?.address}</p>
            </div>
            <button 
            onClick={()=>{
                setactiveTab('overview')
            }}
            className="w-full bg-black px-3 py-3 text-white font-bold text-xl rounded-xl mt-10">Back To Dashboard</button>
        </div>
    )
}

export default GetProfile