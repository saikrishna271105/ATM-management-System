import React,{useState,useEffect} from "react";
import axios from "axios";
const ChangePin = ({setactiveTab})=>{
    const submitHandler = async (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target)


        if( formData.get('newPin') !== formData.get('confirmnewPin')){
            alert("Enter the new PIN correctly")
            e.target.reset()
            return
        }
        const currentPin = formData.get('PIN');
        const PIN = formData.get('newPin')
        try{
            const res = await axios.post('http://localhost:3000/api/auth/changepin',{currentPin,PIN},{
                withCredentials: true
            })

            alert(res.data.message)
        }
        catch(err){
            alert(err.response?.data?.message)
        }
        e.target.reset()

    }
    return (
        <div className="p-5">
            <div className="text-center mt-6">
                <span className="font-semibold text-4xl">Change PIN</span>
                <br></br>
                <p className="mt-4 text-lg">Update your account security PIN</p>
            </div>
            <form onSubmit = {submitHandler}>
                <span className="mt-5 text-lg font-medium">Current PIN</span>
                <input className='mt-2 px-4 py-4 border-2 w-full rounded-xl' type="password" name='PIN' placeholder="Enter Current PIN"/>
                <span className="mt-5 text-lg font-medium">New PIN</span>
                <input className='mt-2 px-4 py-4 border-2 w-full rounded-xl' type="password" name='newPin' placeholder="Enter New PIN"/>
                <span className="mt-5 text-lg font-medium">Confirm New PIN</span>
                <input className='mt-2 px-4 py-4 border-2 w-full rounded-xl' type="password" name='confirmnewPin' placeholder="Confirm New PIN"/>
                <button className="mt-6 w-full px-4 py-3 text-xl font-semibold text-white bg-blue-600 rounded-2xl">Update PIN</button>
            </form>
            <button 
            onClick={()=>{
                setactiveTab('overview')
            }}
            className="w-full bg-black px-3 py-3 text-white font-bold text-xl rounded-xl mt-7">Back To Dashboard</button>
        </div>
    )
}

export default ChangePin