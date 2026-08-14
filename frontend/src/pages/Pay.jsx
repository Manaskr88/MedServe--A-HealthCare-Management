import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'

const Pay = () => {
    const navigate = useNavigate()

    return (
        <div className=''>


            <img onClick={()=> navigate('/my-appointment') } className=' cursor-pointer w-12 mt-2 px-2 py-2' src={assets.arrow_icon} />

            <div className="flex flex-col items-center justify-center mt-16 px-4 py-4 text-center">
                <h1 className='font-bold text-2xl text-slate-800'>Payment Temporarily Unavailable</h1>
                <p className='text-slate-500 mt-3 text-sm max-w-sm'>Due to some technical issues, online payment via Razorpay is currently not available. We are working on it and will be back soon. Sorry for the inconvenience.</p>
            </div>
        </div>
    )
}

export default Pay
