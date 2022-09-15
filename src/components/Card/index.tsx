import React from 'react'
import { useNavigate } from 'react-router-dom';
import Image from "../../assets/bag.webp";

interface Props {
    product: any;
    index: number;
}

interface IProduct {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: object;
    title: string;
}

function Card({ product, index }: Props) {

    const navigate = useNavigate();

    const handleClick = () => navigate(`/product/${product.id}`);

    return (
        <div className="w-full flex flex-col gap-3 hover:bg-PRIMARY_ORANGE/5 rounded-md" onClick={handleClick}>
            <img className="w-full rounded-md" src={`https://picsum.photos/200/300?random=${index}`} alt="Profile Picture" />
            <div className='flex flex-col'>
                <p className='text-sm font-medium'>{product.title}</p>
                <p className='text-sm font-medium text-gray-500/80 italic'>{product.category}</p>
                <p className='text-sm font-medium'>${product.price.toFixed(2)}</p>
            </div>
        </div>
    )
}

export default Card