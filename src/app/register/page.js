'use client'
import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'
const getCharacterValidationError = (str) => {
    return `Your password must have at least 1 ${str} character`;
  };
const SignupSchema = Yup.object().shape({
    firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('required'),
    lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('required'),
    email: Yup.string().email('Invalid email').required('Required'),
    mobile: Yup.number().required('Required'),
    password:Yup.string()
    .min(5, 'password to short')
    .required('please enter a password')
    .matches(/[0-9]/, getCharacterValidationError("digit"))
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
  
    confirmPassword:Yup.string()
    .required("please retype your password")
    .oneOf([Yup. ref("password")], "Passwords does not match"),
    gender: Yup.string(),
    permanentAddress:Yup.string().required('Required'),
    temporaryAddress:Yup.string().required('Required'),
    dob:Yup.date().max(new Date(Date.now() - 567648000000), "You must be at least 18 years")
    .required("Required"),
})
const Register = () => {

    return (
        <>
            <div className='bg-gray-700 text-white'>
                <div className='max-w-[1200px] mx-auto py-10'>

                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            email: '',
                            mobile: '',
                            password:'',
                            confirmPassword:'',
                            gender: '',
                            permanentAddress:'',
                            temporaryAddress:'',
                            dob:'',
                        }}

                        validationSchema={SignupSchema}

                        onSubmit={(value) => {
                            console.log(value)
                        }}
                    >

                        {({ errors, touched }) => (
                            <Form className='bg-white text-black max-w-[650px] mx-auto p-10 rounded-lg'>
                                <legend className='text-center text-3xl font-semibold'>Register</legend>
                                <div className='flex gap-20 justify-between my-7'>
                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="firstName">First Name<span className='text-red-600'>*</span></label>
                                        <Field className='rounded-md p-1 border' id='firstName' name='firstName' placeholder='First Name' />
                                        {errors.firstName && touched.firstName ? (
                                            <div className='text-red-600'>{errors.firstName}</div>
                                        ) : null}
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label htmlFor="lastName">Last Name<span className='text-red-600'>*</span></label>
                                        <Field className='rounded-md p-1 border' id='lastName' name='lastName' placeholder='Last Name' />
                                        {errors.lastName && touched.lastName ? (
                                            <div className='text-red-600'>{errors.lastName}</div>
                                        ) : null}
                                    </div>
                                </div>

                                <div className='flex flex-col gap-2 mx-auto my-7'>
                                    <label htmlFor="email">Email<span className='text-red-600'>*</span></label>
                                    <Field className='border rounded-md p-1' id='email' name='email' type='email' placeholder='Email' />
                                    {errors.email && touched.email ? (
                                        <div className='text-red-600'>{errors.email}</div>
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-2 mx-auto'>
                                    <label htmlFor="mobile">Mobile<span className='text-red-600'>*</span></label>
                                    <Field className='border rounded-md p-1' id='mobile' name='mobile' type='number' />
                                    {errors.mobile && touched.mobile ? (
                                        <div className='text-red-600'>{errors.mobile}</div>
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-2 mx-auto my-7'>
                                    <label htmlFor="password">Password<span className='text-red-600'>*</span></label>
                                    <Field className='border rounded-md p-1' id='password' name='password' type='password'  />
                                    {errors.password && touched.password ? (
                                        <div className='text-red-600'>{errors.password}</div>
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-2 mx-auto my-7'>
                                    <label htmlFor="confirmPassword">Confirm Password<span className='text-red-600'>*</span></label>
                                    <Field className='border rounded-md p-1' id='confirmPassword' name='confirmPassword' type='password'  />
                                    {errors.confirmPassword && touched.confirmPassword ? (
                                        <div className='text-red-600'>{errors.confirmPassword}</div>
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-2 mx-auto my-7'>
                                    <label htmlFor="">Gender</label>
                                    <div className='flex gap-5'>
                                        <div className='flex gap-2 align-middle'>
                                            <Field type='radio' name='gender' id='male' value='male' /> <label htmlFor="male">Male</label>
                                        </div>
                                        <div className='flex gap-2 align-middle'>
                                            <Field type='radio' name='gender' id='female' value='female' /> <label htmlFor="female">Female</label>
                                        </div>
                                        <div className='flex gap-2 align-middle'>
                                            <Field type='radio' name='gender' id='others' value='others' /> <label htmlFor="others">Others</label>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-2 mx-auto'>
                                    <label htmlFor="permanentAddress">Permanent Address<span className='text-red-600'>*</span></label>
                                    <Field className='border rounded-md p-1' id='permanentAddress' name='permanentAddress' />
                                    {errors.permanentAddress && touched.permanentAddress ? (
                                        <div className='text-red-600'>{errors.permanentAddress}</div>
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-2 mx-auto my-7'>
                                    <label htmlFor="temporaryAddress">Temporary Address<span className='text-red-600'>*</span></label>
                                    <Field className='border rounded-md p-1' id='temporaryAddress' name='temporaryAddress' />
                                    {errors.temporaryAddress && touched.temporaryAddress ? (
                                        <div className='text-red-600'>{errors.temporaryAddress}</div>
                                    ) : null}
                                </div>
                                <div className='flex flex-col gap-2 mx-auto my-7'>
                                    <label htmlFor="dob">Date of Birth<span className='text-red-600'>*</span></label>
                                    <Field className='border rounded-md p-1' id='dob' name='dob' type='date' />
                                    {errors.dob && touched.dob ? (
                                        <div className='text-red-600'>{errors.dob}</div>
                                    ) : null}
                                </div>

                                <button className='bg-gray-700 text-white p-1  rounded-lg  w-full' type="submit">
                                Register
                            </button>
                            </Form>
                        )}

                    </Formik>
                </div>
            </div>
        </>
    )
}

export default Register