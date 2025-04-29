import validator from 'validator';
import bcrypt from 'bcryptjs'
import {v2 as cloudinary} from 'cloudinary';
import providerModel from '../models/providerModel.js';
import jwt from 'jsonwebtoken';
import appointmentModel from '../models/appointmentModel.js';
import userModel from '../models/usermodel.js';

//API for adding provider
export const addProvider = async (req, res) => {
    try{

        const { name, email, password, service, speciality, degree, experience, about, fees, address } = req.body;
        const imageFile = req.file

        //checking  for all data to add provider
        if (!name || !email || !password || !service || !speciality || !degree || !experience || !about || !fees || !address) {
            return res.json({success:false, message: "Please fill all the fields" });
        }

        //validating email
        if(!validator.isEmail(email) ){
            return res.json({success:false, message: "Please enter a valid email" });
        }

        //validating password
        if(!validator.isStrongPassword(password)){
            return res.json({success:false, message: "Please enter a strong password" });
        }

        //hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //uploading image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
            resource_type: "image"
        });
        const imageUrl = imageUpload.secure_url
        
        const providerData = {
            name,
            email,
            password: hashedPassword,
            image: imageUrl,
            service,
            speciality,
            degree,
            experience,
            about,
            fees,
            address: JSON.parse(address),
            date: Date.now(),
        }

        const newProvider = new providerModel(providerData);
        await newProvider.save()

        res.json({success:true, message: "Provider added successfully" });
    }catch(error){
        console.log(error);
        res.json({success:false, message:error.message});
    }
}

//API for admin login
export const loginAdmin = async (req, res) => {
    try {
        
        const { email, password } = req.body;

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){

            const token = jwt.sign(email+password, process.env.JWT_SECRET)
            res.json({success:true, token})

        } else{
            res.json({success:false, message: "Invalid credentials" });
        }

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});
    }
}

//API to get all doctors list from admin panel

export const allProviders=async(req,res)=>{
    try {
        const providers=await providerModel.find({}).select('-password')
        res.json({success:true,providers})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});
    }
}

//api to get all appointments list
export const appointmentsAdmin = async (req,res) => {
    try {
        const appointments = await appointmentModel.find({})
        res.json({success:true, appointments})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});
    }
}

//api for appiontment cancellation
export const appointmentCancel = async (req, res) => {

    try {
        
        const {appointmentId} = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)


        await appointmentModel.findByIdAndUpdate(appointmentId, {cancelled:true})

        // releasing prov slot
        const {provId, slotDate, slotTime} = appointmentData

        const providerData = await providerModel.findById(provId)

        let slots_booked = providerData.slots_booked

        slots_booked[slotDate] = slots_booked[slotDate].filter(e => e!==slotTime)

        await providerModel.findByIdAndUpdate(provId, {slots_booked})

        res.json({success:true, message:'Appointment cancelled'})

    } catch (error) {
        console.log(error)
        return res.json({success:false, message:error.message})

    }
}

//api to get dashboard data for adminpanel
export const adminDashboard = async(req,res)=>{
    try {
        
        const providers = await providerModel.find({})
        const users = await userModel.find({})
        const appointments = await appointmentModel.find({})

        const dashData = {
            providers: providers.length,
            appointments: appointments.length,
            users: users.length,
            latestAppointments: appointments.reverse().slice(0,5)
        }

        res.json({success:true,dashData})

    } catch (error) {
        console.log(error)
        return res.json({success:false, message:error.message})
    }
}