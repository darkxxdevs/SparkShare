"use client"
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import { CircleDot } from 'lucide-react';


type Inputs = {
	email: string
	password: string
}

const LoginForm = () => {
	const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='w-96 flex flex-col'>
			<span className='mb-10'>
				<span className='text-6xl'>Welcome </span>
				back!
			</span>
			<label className='font-bold text-sm'>Email</label>
			<Input placeholder='Enter your email' {...register("email", { required: true })} />

			<label className='font-bold text-gray-100 text-sm'>password</label>
			<Input placeholder='enter you password' {...register("password", { required: true })} />
			<span className='mt-3'>
				{errors.email && !errors.password && <span className='text-red-200 text-xs flex items-center gap-2'><CircleDot size={8} /> mail is required!</span>}

				{errors.password && !errors.email && < span className='text-red-200 text-xs  flex items-center gap-2'><CircleDot size={8} /> password is required!</span>}
				{errors.email && errors.password && <span className='text-red-200 text-xs flex items-center gap-2'><CircleDot size={8} /> Both email and password are mandatory!</span>}
			</span>

			<Button type='submit' variant={"secondary"} className='w-[100%] mt-10'>Login</Button>

		</form >

	)
}

export default LoginForm 
