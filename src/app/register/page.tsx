/* eslint-disable react/no-unescaped-entities */
'use client';
import Link from 'next/link';
import React from 'react'

const RegisterPage = () => {

    const [body, setBody] = React.useState({
        email: '',
        password: '',
        name: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBody({
            ...body,
            [name]: value
        });
    };

    const handleRegister = () => {
        // Logic for registration
        console.log('Register data:', body);
    };

    return (
        <div className='flex items-center justify-center h-screen bg-slate-400'>
            <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={body.email}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={body.password}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={body.name}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md"
                        />
                    </label>
                </div>
                <div className="flex flex-col space-x-4 gap-2">
                    <button onClick={handleRegister} className="bg-red-500 text-white w-full py-2 px-4 rounded hover:bg-red-700" >
                        Register
                    </button>
                    <p className="text-center text-sm text-gray-500">
                        You're already registered ? 
                        <Link href='/login' className='text-blue-500 underline ml-1'>
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage