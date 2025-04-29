import providerModel from "../models/providerModel.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import appointmentModel from "../models/appointmentModel.js";

const changeAvailability = async (req, res) => {
    try {
        
        const{id}=req.body

        const provData = await providerModel.findById(id)
        await providerModel.findByIdAndUpdate(id, {available: !provData.available})
        res.json({success:true, message: "Provider availability changed successfully"})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});
    }
}

const providersList = async (req, res) => {
    try {
        
        const providers = await providerModel.find({}).select(['-password', '-email'])

        res.json({success:true, providers})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});
    }

}    

//api for provider login
const loginProvider=async(req,res)=>{
    try {

        const {email,password} = req.body
        const provider = await providerModel.findOne({email})

        if(!provider){
            return res.json({sucess:false, message:"Invalid credentials"})
        } 

        const isMatch = await bcrypt.compare(password, provider.password)

        if(isMatch){
            const token = jwt.sign({id:provider._id},process.env.JWT_SECRET)

            res.json({success:true,token})
        } else {
            return res.json({sucess:false, message:"Invalid credentials"})
        }
        
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});
    }
}

//api to get providers appointments
const appointmentsProvider = async(req,res) => {
    try {
        
        const provId = req.provId
        const appointments = await appointmentModel.find({provId})

        res.json({success:true, appointments})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});
    }
}

//api to mark appointment completed for provider panel
const appointmentComplete = async (req,res) => {
    try {
        const {provId, appointmentId} = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)

        if(appointmentData && appointmentData.provId===provId){

            await appointmentModel.findByIdAndUpdate(appointmentId, {isCompleted:true})
            return res.json({success:true, message:'Appointment Completed'})

        } else {
            return res.json({success:flase, message:'Mark Failed'})
        }

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});        
    }
}

//api to cancel appointment for prov panel
const appointmentCancel = async (req,res) => {
    try {
        const {provId, appointmentId} = req.body

        const appointmentData = await appointmentModel.findById(appointmentId)

        if(appointmentData && appointmentData.provId===provId){

            await appointmentModel.findByIdAndUpdate(appointmentId, {cancelled:true})
            return res.json({success:true, message:'Appointment Cancelled'})

        } else {
            return res.json({success:flase, message:'Cancellation Failed'})
        }
        
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});        
    }
}

//api to get dashboard data for prov panel
const providerDashboard = async(req,res) => {
    try {
        
        const provId = req.provId
        const appointments= await appointmentModel.find({provId})

        let earnings = 0

        appointments.map((item)=>{
            if(item.isCompleted){
                earnings += item.amount
            }
        })

        let users = []

        appointments.map((item)=>{
            if(!users.includes(item.userId)){
                users.push(item.userId)
            }
        })

        const dashData = {
            earnings,
            appointments: appointments.length,
            users: users.length,
            latestAppointments: appointments.reverse().slice(0,5)
        }

        res.json({success:true, dashData})

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});        
    }
}

//api to get provider profile
const providerProfile = async(req, res) =>{
    try {
        const provId = req.provId
        const profileData = await providerModel.findById(provId).select('-password')

        res.json({success:true, profileData})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});        
    }
}

//api to update profile
const updateProviderProfile = async (req,res) => {
    try {
        
        const {provId, fees, address, available} = req.body
        await providerModel.findByIdAndUpdate(provId, {fees, address, available})

        res.json({success:true, message:'Profile Updated'})


    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});       
    }
}

export {changeAvailability, providersList, loginProvider, appointmentsProvider, appointmentCancel, appointmentComplete, providerDashboard, providerProfile, updateProviderProfile}