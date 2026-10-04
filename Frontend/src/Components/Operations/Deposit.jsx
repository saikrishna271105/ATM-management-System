import React from "react";
import axios from "axios";
const Deposit = ({setactiveTab})=>{
    const submitHandler = async (e)=>{
        e.preventDefault()
        const data = new FormData(e.target)
        const amount = Number(data.get('amount'));
        try{
            const res = await axios.post('http://localhost:3000/api/transactions/deposit',{amount},{
                withCredentials:true
            })

            alert(res.data.message)
            e.target.reset()
        }
        catch(err){
            alert(err.response?.data?.message)
        }
    }
    return (
        <div className="p-5">
            <div className="text-center mt-6">
                <span className="font-semibold text-4xl">Deposit Money</span>
                <br></br>
                <p className="mt-4 text-lg">Enter amount to deposit</p>
            </div>
            <p className="mt-5 text-lg font-medium">Amount</p>
            <form onSubmit={submitHandler}>
                <input name='amount' className='mt-3 px-4 py-4 border-2 w-full rounded-xl' type="number" placeholder="Enter Amount"/>
                <button className="mt-6 w-full px-4 py-3 text-xl font-semibold text-white bg-green-500 rounded-2xl">Deposit</button>
            </form>
            <button 
            onClick={()=>{
                setactiveTab('overview')
            }}
            className="w-full bg-black px-3 py-3 text-white font-bold text-xl rounded-xl mt-7">Back To Dashboard</button>
        </div>
    )
}

export default Deposit