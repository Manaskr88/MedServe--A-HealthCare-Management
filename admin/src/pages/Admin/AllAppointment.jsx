import React, { useEffect } from 'react'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'
// import { assets } from '../../../../frontend/src/assets/assets_frontend/assets'
import { assets } from '../../assets/assets_admin/assets.js'

const AllAppointment = () => {

  const { aToken, getAllAppointments, appointment, cancelAppointment } = useContext(AdminContext)

  const { ageCalculate, slotDateFormat } = useContext(AppContext)



  useEffect(() => {

    if (aToken) {
      getAllAppointments()
    }

  }, [aToken])


  return (
    <div className='w-full max-w-6xl m-5 '>
      <p className='mb-3 text-lg font-medium'>All Appointments</p>

      <div className="bg-white border rounded text-sm max-h-[80vh] min-h-[60vh] overflow-scroll">

        <div className="hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b">
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctor </p>
          <p>Fees</p>
          <p>Action</p>

        </div>

        {Array.isArray(appointment) ? (

          appointment.reverse().map((item, index) => (

            <div key={index} className="flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center  py-3 px-6 border-b hover:bg-gray-300">

              <p className='max-sm:hidden'>{index + 1}</p>

              <div className="flex items-center gap-2">

                <img className='w-8 rounded-full' src={item.userData.image} />
                <p>{item.userData.name}</p>


              </div>

              <p className='max-sm:hidden'>{ageCalculate(item.userData.dob)}</p>
              <p>{slotDateFormat(item.slotDate)} , {item.slotTime} </p>

              <div className="flex items-center gap-2">

                <img className='w-8 rounded-full bg-gray-200' src={item.docData.image} />
                <p className=''>{item.docData.name}</p>


              </div>

              <p>{item.amount}$ </p>

              {item.cancelled ? <p className='text-red-400 text-sm '>Cancelled</p>
                : item.isCompleted
                  ? <p className='text-green-500 text-xs font-medium' >Completed</p>
                  :


                  <img onClick={() => cancelAppointment(item._id)} className='w-10 cursor-pointer' src={assets.cancel_icon} />

              }






            </div>
          ))
        ) : (
          <p>No appointments available.</p>
        )}

      </div>
    </div>
  )
}

export default AllAppointment