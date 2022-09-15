import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import ProfileImage from "../../assets/profile.jpg";
import { useWindowSize } from '../../hooks/useWindowSize';
import { useAppSelector } from '../../utils/hooks';
import CartItems from './components/CartItems';

type Props = {}
interface ICartItems {
    productId: number;
    quantity: number;
}
function TopBar({ }: Props) {

    const navigate = useNavigate();
    const [width, height] = useWindowSize();
    const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

    const cart: Array<ICartItems> = useAppSelector((state): Array<ICartItems> => state.cart.value);

    const showCart = () => setIsCartOpen(true);
    const hideCart = (set: boolean) => hideCartWindow(set);

    useEffect(() => {
        console.log(isCartOpen);

    }, [isCartOpen])

    var timer = -1;

    function hideCartWindow(set: boolean) {
        clearTimeout(timer);

        if (set) {
            timer = window.setTimeout(function () {
                setIsCartOpen(false);
            }, 1000);
            console.log(timer);
        }
        //var millisecBeforeRedirect = 10000; 
    }

    return (
        <div className={`${width > 600 ? "py-5 px-10" : "px-2"} relative`}>
            <div className='flex justify-between border-b h-20'>
                <div className={`flex ${width < 750 ? "gap-2" : "gap-10"} items-center`}>
                    {
                        width < 750 ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                            :
                            null
                    }
                    <h2 onClick={() => navigate("/")} className='font-bold text-lg cursor-pointer'>sneakers</h2>
                    {
                        width > 750 ?
                            <>
                                <button className='text-sm text-gray-500 h-full hover:border-b-2 border-PRIMARY_ORANGE hover:text-black'>Collections</button>
                                <button className='text-sm text-gray-500 h-full hover:border-b-2 border-PRIMARY_ORANGE hover:text-black'>Men</button>
                                <button className='text-sm text-gray-500 h-full hover:border-b-2 border-PRIMARY_ORANGE hover:text-black'>Women</button>
                                <button className='text-sm text-gray-500 h-full hover:border-b-2 border-PRIMARY_ORANGE hover:text-black'>About</button>
                                <button className='text-sm text-gray-500 h-full hover:border-b-2 border-PRIMARY_ORANGE hover:text-black'>Contact</button>
                            </>
                            :
                            null
                    }
                </div>
                <div className='flex items-center gap-10'>
                    <button onMouseEnter={showCart} onMouseLeave={() => hideCart(true)} type="button" className="cursor-pointer inline-flex relative items-center p-3 text-sm font-medium text-center bg-white rounded-full ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        <span className="sr-only">Notifications</span>
                        <div className="inline-flex absolute top-0 -right-2 justify-center items-center w-6 h-4 text-xs font-bold text-white bg-PRIMARY_ORANGE rounded-lg ">{cart && cart.length}</div>
                    </button>

                    <img className="w-10 h-10 rounded-full cursor-pointer" src={ProfileImage} alt="Profile Picture" />
                </div>
            </div>

            {
                // onMouseLeave={() => hideCart(true)}
                isCartOpen && <div onMouseLeave={() => hideCart(true)} onMouseEnter={() => hideCart(false)} className={`absolute flex flex-col ${width < 600 ? "w-full right-0 h-[30vh] max-h-56" : "w-56  right-20 h-44"} rounded-lg shadow-xl z-10 bg-white`}>
                    <p className='font-bold p-4'>Cart</p>
                    <hr className="solid" />

                    {
                        cart.length === 0 ?
                            <div className='p-4 flex-grow flex justify-center items-center'>
                                <p className='text-xs font-semibold text-gray-500'>Your cart is empty.</p>
                            </div>
                            :
                            <div className='flex-grow flex flex-col p-4'>
                                <div className='h-14 overflow-y-auto'>
                                    {
                                        cart && cart.map((items, i) => (
                                            <CartItems items={items} index={i} />
                                        ))
                                    }
                                </div>
                                <div className='flex-grow'>
                                    <button className={`text-white text-xs font-semibold bg-PRIMARY_ORANGE rounded-lg hover:bg-orange-500 w-full ${width <= 600 ? "h-10" : "h-full"}`}>Checkout</button>
                                </div>
                            </div>
                    }
                </div>
            }
        </div>
    )
}

export default TopBar