'use client'
import OrRegister from "@/components/Inputs/orRegister";
import Link from "next/link";
import { useRouter } from "next/navigation";
import LoginForm from '../LoginForm/LoginForm'

export default function LoginPage() {

    const route = useRouter()


    return (
        <div className="my-container">
            <div className="flex flex-wrap gap-5 items-center justify-center my-5 w-full md:w-[50%] mx-auto">
                <div className="flex gap-5 items-center justify-center">
                    <Link href={'/login'} className="text-[#46A358] text-[20px] font-[500]">Login</Link>
                    <p className="text-[#3D3D3D] text-[18px] font-[250]">|</p>
                    <Link href={'/register'}>Register</Link>
                </div>

                <LoginForm />

                <OrRegister
                    mainText={'Or login with'}
                />


            </div>

        </div>
    )
}