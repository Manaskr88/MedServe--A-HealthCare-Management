import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Context } from '../context/Context';
import { assets } from '../assets/assets_frontend/assets'


const Doctors = () => {

  const { speciality } = useParams()

  const [extend, setExtend] = useState(true)

  const [filter, setFilter] = useState([])

  const [showFilter, setShowFilter] = useState(true)

  const navigate = useNavigate()

  const { doctors } = useContext(Context)


  const applyFilter = () => {
    if (speciality) {
      setFilter(doctors.filter(doc => doc.speciality == speciality))  // to match filter and show only those element

    }

    else {
      setFilter(doctors)   // otherwise it will show all doctors 
    }

  }

  useEffect(() => {

    applyFilter()

  }, [doctors, speciality])

  console.log(speciality);


  return (
    <div>

      <p className='text-gray-600'>Browse through the doctors specialist</p>

      <button onClick={() => setShowFilter(prev => !prev)} className='text-black flex gap-2 text-center cursor-pointer md:hidden mt-2'>Filter  <img className='w-[20px] mt-1 text-center' src={assets.dropdown_icon} />  </button>


      <img onClick={() => setExtend(prev => !prev)} className='mt-4 md:block hidden cursor-pointer w-[35px]' src={assets.menu} />



      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">


        {
          extend && showFilter ?
            <div className="flex-col gap-8 text-sm text-gray-600 ">
              <p onClick={() => speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-slate-900 rounded transition-all cursor-pointer ${speciality === 'General physician' ? "bg-slate-900 text-white" : ""}`}>General physician</p>

              <p onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-slate-900 rounded transition-all cursor-pointer ${speciality === 'Gynecologist' ? "bg-slate-900 text-white" : ""}`}>Gynecologist</p>

              <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-slate-900 rounded transition-all cursor-pointer ${speciality === 'Dermatologist' ? "bg-slate-900 text-white" : ""}`}>Dermatologist</p>

              <p onClick={() => speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-slate-900 rounded transition-all cursor-pointer ${speciality === 'Pediatricians' ? "bg-slate-900 text-white" : ""}`}>Pediatricians</p>

              <p onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-slate-900 rounded transition-all cursor-pointer ${speciality === 'Neurologist' ? "bg-slate-900 text-white" : ""}`}>Neurologist</p>

              <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-slate-900 rounded transition-all cursor-pointer ${speciality === 'Gastroenterologist' ? "bg-slate-900 text-white" : ""}`}>Gastroenterologist</p>

            </div> : null

        }





        <div className="w-full md:grid md:grid-cols-3 gap-4 ">
          {filter.map((item, index) => (

            <div key={index} onClick={() => navigate(`/appointment/${item._id}`)} className="gap-2 border bg-slate-900 text-white border-white rounded  overflow-hidden cursor-pointer   items-center pt-4 ">

              <img className='w-1/2  rounded-3xl' src={item.image} />

              <div className="p-4 ">
                <div className={`${item.available ? 'text-green-600' : 'text-red-600'} flex items-center   gap-2 text-sm text-center `}>

                  <p className={` ${item.available ? 'bg-green-500 ' : 'bg-red-500'}  w-2 h-2   rounded lg:flex text-center`}></p>
                  <p className='text-center'>{item.available ? "Available" : "Not Available"}</p>
                </div>

                <p className='text-lg font-medium' >{item.name}</p>
                <p className='text-sm hover:text-gray-500' >{item.speciality}</p>

              </div>
            </div>

          ))}



        </div>
      </div>


    </div>
  )
}

export default Doctors
