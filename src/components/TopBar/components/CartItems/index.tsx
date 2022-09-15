import React from 'react'
import { removeFromCart } from '../../../../store/slices/cart/cart.slice';
import { useAppDispatch } from '../../../../utils/hooks';

type Props = {
    items: ICartItems;
    index: number;
}

interface ICartItems {
    productId: number;
    quantity: number;
}

function CartItems({ items, index }: Props) {

    const dispatcher = useAppDispatch();

    const handleRemoveProduct = () => dispatcher(removeFromCart(index));

    return (
        <div className='h-full flex items-center gap-2'>
            <img className={`w-8 rounded-md`} src={"https://picsum.photos/200"} alt="Product in Cart" />
            <div className='flex flex-col flex-grow'>
                <p className='text-gray-500 text-sm'>{"title x x x x x x x x x x x x".slice(0, 20)}</p>
                <div className='flex gap-2'>
                    <p className='text-gray-500 text-xs'>$125.00 x 3</p>
                    <p className='text-xs font-bold'>$375.00</p>
                </div>
            </div>
            <button onClick={handleRemoveProduct} type="button" className="cursor-pointer inline-flex relative items-center text-sm font-medium text-center bg-white rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-4 text-gray-500">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>

            </button>
        </div>
    )
}

export default CartItems