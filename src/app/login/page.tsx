/* eslint-disable react/no-unescaped-entities */
'use client';
import React from 'react'
import Link from 'next/link';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const LoginPage = () => {

    const router = useRouter();
    const [body, setBody] = React.useState<any>();
    const [isLoading, setIsLoading] = React.useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBody({ ...body, [name]: value });
    };

    const handleRegister = async () => {
        setIsLoading(true);
        if (!body?.email && !body?.password) {
            toast.error('Please fill all the fields');
            return;
        }
        await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/users/authenticate`, {
            email: body.email,
            password: body.password
        }, { withCredentials: true })
            .then(res => {
                setIsLoading(false);
                toast.success('Login Successful');
                router.replace('/projects');
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
                toast.error(err.response ? err.response.data.message : err.message);
            });
    };

    return (
        <div className='flex items-center justify-center h-screen bg-slate-400'>
            <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700 font-normal mb-2">
                        Email:
                        <input type="email" name="email"
                            defaultValue={body?.email} disabled={isLoading}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md disabled:opacity-50"
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">
                        Password:
                        <input type="password" name="password"
                            defaultValue={body?.password} disabled={isLoading}
                            onChange={handleChange}
                            className="mt-1 p-2 w-full border rounded-md disabled:opacity-50"
                        />
                    </label>
                </div>
                <div className="flex flex-col space-x-4 gap-2">
                    <button disabled={isLoading || !body} onClick={handleRegister} className="bg-red-500 text-white w-full py-2 px-4 rounded hover:bg-red-700 disabled:opacity-50" >
                        {isLoading ? 'Loading...' : 'Register'}
                    </button>
                    <p className="text-center text-sm text-gray-500">
                        Don't have an account ?
                        <Link href='/register' className='text-blue-500 underline ml-1'>
                            Register
                        </Link>
                    </p>
                </div>
            </div>
            <Toaster
                position='bottom-center'
            />
        </div>
    )
}

export default LoginPage