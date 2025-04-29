import express from 'express';
import { appointmentCancel, appointmentComplete, appointmentsProvider, loginProvider, providerDashboard, providerProfile, providersList, updateProviderProfile } from '../controllers/providerController.js';
import authProvider from '../middlewares/authProvider.js';

const providerRouter = express.Router();

providerRouter.get('/list', providersList)
providerRouter.post('/login',loginProvider)
providerRouter.get('/appointments',authProvider,appointmentsProvider)
providerRouter.post('/complete-appointment',authProvider,appointmentComplete)
providerRouter.post('/cancel-appointment',authProvider,appointmentCancel)
providerRouter.get('/dashboard', authProvider, providerDashboard)
providerRouter.get('/profile',authProvider,providerProfile)
providerRouter.post('/update-profile', authProvider, updateProviderProfile)


export default providerRouter;