'use client'
import axios from 'axios';
import Link from 'next/link';
// import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function VerifyEmail() {
    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);
    // const router = useRouter();
    const VerifyUserEmail = async () => {
        try {
            await axios.post("api/users/verifyemail", { token })
            setVerified(true)
            setError(false)
        } catch (error: any) {
            setError(true)
            console.log(error.message.data);

        }
    }

    useEffect(() => {
        // row js way 
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken || "")


        // nexjs way 
        // const { query } = router;
        // const urlToken = query.token;


    }, [])

    useEffect(() => {
        if (token.length > 0) {
            VerifyUserEmail()
        }
    }, [token])


    return (
        <div className='flex flex-col justify-center items-center min-h-screen py-2'>
            <h1 className='text-4xl'>Verify Token</h1>
            <h2 className='p-2 bg-orange-500 text-black'>
                {
                    token ? `${token}` : "no token"
                }
            </h2>
            {
                verified && (
                    <div>
                        <h2>verified</h2>
                        <Link href="/auth/login"></Link>
                    </div>
                )
            }
            {
                error && (
                    <div>
                        <h2>Error</h2>
                        {/* <Link href="/auth/login"></Link> */}
                    </div>
                )
            }
        </div>
    )
}

