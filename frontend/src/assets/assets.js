import add_icon from './add_icon.svg'
import admin_logo from './admin_logo.svg'
import appointment_icon from './appointment_icon.svg'
import cancel_icon from './cancel_icon.svg'
import doctor_icon from './doctor_icon.svg'
import home_icon from './home_icon.svg'
import people_icon from './people_icon.svg'
import upload_area from './upload_area.svg'
import list_icon from './list_icon.svg'
import tick_icon from './tick_icon.svg'
import appointments_icon from './appointments_icon.svg'
import earning_icon from './earning_icon.svg'
import patients_icon from './patients_icon.svg'
import banner_img from './banner_img.webp'
import myheader_img from './myheader_img.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Healthcare from './haw.jpeg'
import EducationandCoaching from './ed.jpeg'
import BeautyandWellness from './baw.jpeg'
import Automotive from './at.jpeg'
import HomeServices from './hs.jpeg'
import LegalandFinancial from './la.jpeg' 
import dashboard from './dashboard.jpeg'
import booking from './booking.jpeg'
import secure from './secure.jpeg'
import database from './database.jpeg'
import l from './l.jpeg'
import h from './h.jpeg'
import w from './w.jpeg'
import b from './b.jpeg'
import a from './a.jpeg'
import e from './e.jpeg'


export const assets = {
    banner_img,
    myheader_img,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo,
    Healthcare,
    EducationandCoaching,
    BeautyandWellness,
    Automotive,
    HomeServices,
    LegalandFinancial,
    add_icon,
    admin_logo,
    appointment_icon,
    cancel_icon,
    doctor_icon,
    upload_area,
    home_icon,
    patients_icon,
    people_icon,
    list_icon,
    tick_icon,
    appointments_icon,
    earning_icon
}

export const servicesdata = [
    {
        service: 'Healthcare',
        image: Healthcare
    },
    {
        service: 'Education and Coaching',
        image: EducationandCoaching
    },
    {
        service: 'Beauty and Wellness',
        image: BeautyandWellness
    },
    {
        service: 'Automotive',
        image: Automotive
    },
    {
        service: 'Home Services',
        image: HomeServices
    },
    {
        service: 'Legal and Financial',
        image: LegalandFinancial
    },
]

export const servicesdataicons = [
    {
        service: 'Healthcare',
        image: w
    },
    {
        service: 'Education and Coaching',
        image: e
    },
    {
        service: 'Beauty and Wellness',
        image: b
    },
    {
        service: 'Automotive',
        image: a
    },
    {
        service: 'Home Services',
        image: h
    },
    {
        service: 'Legal and Financial',
        image: l
    },
]

export const features=[
    {
        title: 'Secure Authentication',
        description: 'Users log in securely using Google (or other OAuth providers), ensuring a safe and quick onboarding experience without needing to create separate passwords.',
        image: secure
    },
    {
        title: 'Custom Appointment Booking System',
        description: 'Fully custom-built appointment scheduling without third-party APIs, allowing users to select available slots, book appointments, and manage their bookings easily.',
        image: booking
    },
    {
        title: 'Role-Based Dashboard Access',
        description: 'Users can book, view, and cancel appointments. Admins can manage users, view all appointments, and handle system-level tasks.',
        image: dashboard
    },
    {
        title: 'Real-time Data Management with MongoDB',
        description: 'All user, doctor, and appointment data are stored in MongoDB, with real-time updates via custom-built Express.js REST APIs.',
        image: database
    }
]

export const providers = [
    {
        _id: 'sty1',
        name: '',
        image: doc1,
        service: 'Beauty and Wellness',
        speciality: 'Hair Stylist',
        degree: '',
        experience: '4 Years',
        about: 'He is a hair styling expert',
        fees: 100,
        address: {
            line1: 'line1',
            line2: 'line2'
        }
    },
    {
        _id: 'sty2',
        name: '',
        image: doc2,
        service: 'Beauty and Wellness',
        speciality: 'Makeup Artist',
        degree: '',
        experience: '2 Years',
        about: 'He is a makeup artist expert',
        fees: 100,
        address: {
            line1: 'line1',
            line2: 'line2'
        }
    },
    {
        _id: 'law1',
        name: '',
        image: doc1,
        service: 'Legal and Financial',
        speciality: 'Legal Consultation',
        degree: '',
        experience: '4 Years',
        about: 'He is a legal advisor expert',
        fees: 100,
        address: {
            line1: 'line1',
            line2: 'line2'
        }
    },
    {
        _id: 'law2',
        name: '',
        image: doc2,
        service: 'Legal and Financial',
        speciality: 'Tax Advisor',
        degree: '',
        experience: '2 Years',
        about: 'He is a financial advisor expert',
        fees: 100,
        address: {
            line1: 'line1',
            line2: 'line2'
        }
    },    
    {
        _id: 'ser1',
        name: '',
        image: doc1,
        service: 'Home Services',
        speciality: 'Plumber',
        degree: '',
        experience: '4 Years',
        about: 'He is a plumbing expert',
        fees: 100,
        address: {
            line1: 'line1',
            line2: 'line2'
        }
    },
    {
        _id: 'ser2',
        name: '',
        image: doc2,
        service: 'Home Services',
        speciality: 'Cleaner',
        degree: '',
        experience: '2 Years',
        about: 'He is a cleaning expert',
        fees: 100,
        address: {
            line1: 'line1',
            line2: 'line2'
        }
    },    
    {
        _id: 'mec1',
        name: '',
        image: doc1,
        service: 'Automotive',
        speciality: 'Oil Change',
        degree: '',
        experience: '4 Years',
        about: 'He is a oil change expert',
        fees: 100,
        address: {
            line1: 'line1',
            line2: 'line2'
        }
    },
    {
        _id: 'mec2',
        name: '',
        image: doc2,
        service: 'Automotive',
        speciality: 'Carwash',
        degree: '',
        experience: '2 Years',
        about: 'He is a car wash expert',
        fees: 100,
        address: {
            line1: 'line1',
            line2: 'line2'
        }
    },
    {
        _id: 'tut1',
        name:'',
        image: doc1,
        service: 'Education and Coaching',
        speciality: 'Tutor',
        degree: '',
        experience: '4 Years',
        about:'He is a Instructor',
        fees: 100,
        address: {
            line1: 'line1',
            line2: 'line2'
        }    
    },
    {
        _id: 'tut2',
        name:'',
        image: doc2,
        service: 'Education and Coaching',
        speciality: 'Fitness Trainer',
        degree: '',
        experience: '2 Years',
        about:'He is a dance master',
        fees: 100,
        address: {
            line1: 'line1',
            line2: 'line2'
        }    
    },
    {
        _id: 'tut3',
        name:'',
        image: doc3,
        service: 'Education and Coaching',
        speciality: 'Driving Instructor',
        degree: '',
        experience: '3 Years',
        about:'He is a Driving Instructor',
        fees: 100,
        address: {
            line1: 'line1',
            line2: 'line2'
        }    
    },
    {
        _id: 'tut4',
        name:'',
        image: doc4,
        service: 'Education and Coaching',
        speciality: 'Language coach',
        degree: '',
        experience: '4 Years',
        about:'He is a swim coach',
        fees: 100,
        address: {
            line1: 'line1',
            line2: 'line2'
        }    
    },
    {
        _id: 'doc1',
        name: 'Dr. Richard James',
        image: doc1,
        service: 'Healthcare',
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc2',
        name: 'Dr. Emily Larson',
        image: doc2,
        service: 'Healthcare',
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc3',
        name: 'Dr. Sarah Patel',
        image: doc3,
        service: 'Healthcare',
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc4',
        name: 'Dr. Christopher Lee',
        image: doc4,
        service: 'Healthcare',
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc5',
        name: 'Dr. Jennifer Garcia',
        image: doc5,
        service: 'Healthcare',
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc6',
        name: 'Dr. Andrew Williams',
        image: doc6,
        service: 'Healthcare',
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc7',
        name: 'Dr. Christopher Davis',
        image: doc7,
        service: 'Healthcare',
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc8',
        name: 'Dr. Timothy White',
        image: doc8,
        service: 'Healthcare',
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc9',
        name: 'Dr. Ava Mitchell',
        image: doc9,
        service: 'Healthcare',
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc10',
        name: 'Dr. Jeffrey King',
        image: doc10,
        service: 'Healthcare',
        speciality: 'Pediatricians',
        degree: 'MBBS',
        experience: '2 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 40,
        address: {
            line1: '47th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc11',
        name: 'Dr. Zoe Kelly',
        image: doc11,
        service: 'Healthcare',
        speciality: 'Gastroenterologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc12',
        name: 'Dr. Patrick Harris',
        image: doc12,
        service: 'Healthcare',
        speciality: 'Neurologist',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '57th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc13',
        name: 'Dr. Chloe Evans',
        image: doc13,
        service: 'Healthcare',
        speciality: 'General Physician',
        degree: 'MBBS',
        experience: '4 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc14',
        name: 'Dr. Ryan Martinez',
        image: doc14,
        service: 'Healthcare',
        speciality: 'Gynecologist',
        degree: 'MBBS',
        experience: '3 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 60,
        address: {
            line1: '27th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc15',
        name: 'Dr. Amelia Hill',
        image: doc15,
        service: 'Healthcare',
        speciality: 'Dermatologist',
        degree: 'MBBS',
        experience: '1 Years',
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 30,
        address: {
            line1: '37th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
]