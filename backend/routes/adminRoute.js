import express from 'express';
import { addProvider, adminDashboard, allProviders, appointmentCancel, appointmentsAdmin, loginAdmin } from '../controllers/adminController.js';
import upload from '../middlewares/multer.js';
import authAdmin from '../middlewares/authAdmin.js';
import { changeAvailability } from '../controllers/providerController.js';

const adminRouter = express.Router();

adminRouter.post('/add-provider', authAdmin ,upload.single('image'), addProvider);
adminRouter.post('/login', loginAdmin);
adminRouter.post('/all-providers',authAdmin ,allProviders);
adminRouter.post('/change-availability',authAdmin ,changeAvailability);
adminRouter.get('/appointments',authAdmin, appointmentsAdmin)
adminRouter.post('/cancel-appointment',authAdmin,appointmentCancel)
adminRouter.get('/dashboard',authAdmin,adminDashboard)

export default adminRouter;