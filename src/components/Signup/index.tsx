import React, { useMemo } from 'react'
import { Link } from 'react-router-dom';
import { BACKGROUND_OFF_WHITE, DEFAULT_PURPLE, PRIMARY_GREEN, SIGNUP_BACKGROUND_COLOR } from '../../utils/colors';
import { getWindowDimensions } from '../../utils/functions';
import styles from "./styles.module.css";

type Props = {}

function Signup({ }: Props): JSX.Element {

    return (
        <div className="flex flex-col justify-center items-center min-h-[100vh] gap-8 py-10" style={{ backgroundColor: SIGNUP_BACKGROUND_COLOR }}>
            <div className='bg-white max-w-[500px] min-w-[350px] shadow-lg rounded-t-sm'>
                <div className='flex justify-center items-center flex-col p-8 gap-4 '>
                    <h1 className="text-3xl font-bold self-center mb-4">
                        Sign up
                    </h1>
                    <input placeholder='Full Name' className="rounded-md border-solid border-2 border-gray-500/20 px-2 h-12 min-w-full" />
                    <input placeholder='Email' className="rounded-md border-solid border-2 border-gray-500/20 px-2 h-12 min-w-full" />
                    <input placeholder='Password' className="rounded-md border-solid border-2 border-gray-500/20 px-2 h-12 min-w-full" />
                    <input placeholder='Confirm Password' className="rounded-md border-solid border-2 border-gray-500/20 px-2 h-12 min-w-full" />
                    <button className='text-white w-full h-12 bg-[#00d277] rounded-md hover:bg-green-700'>Create Account</button>
                    <p className='text-sm text-gray-700/70'>By signing up, you agree to the <Link style={{ textDecoration: "underline" }} to={"#"}>Terms of Service</Link> and <Link style={{ textDecoration: "underline" }} to={"#"}>Privacy Policy</Link></p>
                </div>
            </div>
            <p className='text-sm text-gray-700/70 font-semibold'>Already have an account? <Link style={{ textDecoration: "underline", color: "blue" }} to={"/signin"}>Log in</Link></p>
        </div>
    )
}

export default Signup