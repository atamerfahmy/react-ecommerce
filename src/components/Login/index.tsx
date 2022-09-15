import React, { useMemo } from 'react'
import { Link } from 'react-router-dom';
import { BACKGROUND_OFF_WHITE, DEFAULT_PURPLE } from '../../utils/colors';
import { getWindowDimensions } from '../../utils/functions';
import styles from "./styles.module.css";

type Props = {}

function Login({ }: Props): JSX.Element {

    let { width, height } = getWindowDimensions();

    const styles = useMemo(() => {
        return {
            textBoxWidth: {
                width: (width > 400) ? "400px" : width + "px"
            }
        }
    }, [width]);

    return (
        <div className="flex justify-center items-center min-h-[100vh]" style={{ backgroundColor: BACKGROUND_OFF_WHITE }}>
            <div className="flex flex-col gap-8 w-[500px] mx-10">
                <h1 className="text-3xl font-bold self-center">
                    Sign in to your account
                </h1>
                <div className='flex flex-col'>
                    <input placeholder='Email address' className="rounded-t-lg border-solid border-2 border-gray-500/20 px-2 h-10 min-w-[350px]" />
                    <input placeholder='Password' className="rounded-b-lg border-solid border-b-2 border-x-2 border-gray-500/20 px-2 h-10 min-w-[350px]" />
                </div>
                <div className='flex justify-between min-w-[350px]'>
                    <div className='flex gap-2'>
                        <label className='flex items-center gap-2'><input type="checkbox" name="checkbox" className='flex items-center border-2 border-gray-500/20' />Remember me</label>
                    </div>
                    <Link to={'#'} style={{ color: DEFAULT_PURPLE }}>Forgot your password?</Link>
                </div>
                <button style={{ backgroundColor: DEFAULT_PURPLE }} className='rounded-lg text-white h-10'>Sign in</button>
                <div>
                    Do not have an account? <Link to={'/signup'} style={{ color: DEFAULT_PURPLE, alignSelf: "flex-end" }}>Signup</Link>
                </div>
            </div>
        </div>
    )
}

export default Login