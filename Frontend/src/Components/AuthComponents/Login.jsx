import React, { useState } from 'react'
import axios from 'axios'
import DashBoard from '../DashBoards/UserDashBoard'

const Login =()=>{
    const [loggedIn,setLoggedIn] = useState(false)
    const submitHandler = async (e)=>{
        e.preventDefault(); 
        const formData = new FormData(e.target)
        const data = {
            accNo:formData.get('accNo'),
            PIN:formData.get('PIN')
        }
        try{
            const res = await axios.post('http://localhost:3000/api/auth/login',data,{
                withCredentials:true
            })
            
            setLoggedIn(true)
            alert(res.data.message)
        }
        catch(err){
            alert(err.response?.data?.message)
        }
    }
    if(loggedIn){
        return <DashBoard/>
    }
    return (
        <div>
            <div className='h-screen w-screen flex justify-center items-center'>
                <div className='border-2 rounded-lg p-7 pt-10'>
                    <h1 className='text-3xl font-semibold text-center'>Welcome Back</h1>
                    <h1 className='text-xl font-medium text-center mt-3'>Login to your Bank Account</h1>
                    <form onSubmit={submitHandler}>
                        <h1 className='text-xl font-medium mt-5'>Account Number</h1>
                        <input required name='accNo' className='px-2 py-2 w-80 placeholder:text-gray-500 border-2 rounded-lg mt-2' type='text' placeholder='Enter Account Number'/>
                        <h1 className='text-xl font-medium mt-3'>PIN</h1>
                        <input required name='PIN' className='px-2 py-2 w-80 placeholder:text-gray-500 border-2 rounded-lg mt-2' type='password' placeholder='Enter youy PIN'/>
                        <div className='text-center mt-8'>
                            <button className='bg-blue-600 px-3 py-2 rounded-lg w-80 text-white font-bold text-xl'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login