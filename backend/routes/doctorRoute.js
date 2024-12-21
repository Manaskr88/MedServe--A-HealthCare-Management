import express from 'express'
import { appointmentCancel, appointmentComplete, appointmentsDoctor, doctorDashboard, doctorList, doctorProfile, loginDoctor, updateDoctorProfile } from '../controllers/doctorController.js'
import authDoctor from '../middlewares/authDoctor.js'

const doctorRouter = express.Router()

doctorRouter.get('/list'  , doctorList)

doctorRouter.post('/login'  , loginDoctor)

doctorRouter.get('/appointments', authDoctor  , appointmentsDoctor)

doctorRouter.post('/cancel-appointment', authDoctor  ,  appointmentCancel )


doctorRouter.post('/complete-appointment', authDoctor  ,  appointmentComplete )


doctorRouter.get('/dashboard', authDoctor  ,  doctorDashboard )

doctorRouter.get('/profile', authDoctor  ,  doctorProfile )

doctorRouter.post('/update-profile', authDoctor  ,  updateDoctorProfile )







export default doctorRouter