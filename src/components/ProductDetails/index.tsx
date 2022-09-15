import { Grid } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useWindowSize } from '../../hooks/useWindowSize';
import { addToCart, setCart } from '../../store/slices/cart/cart.slice';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';

type Props = {}

interface ICartItems {
    productId: number;
    quantity: number;
}

function ProductDetails({ }: Props) {

    const { id: productId } = useParams();
    const [width, height] = useWindowSize();
    const cart: Array<ICartItems> = useAppSelector((state): Array<ICartItems> => state.cart.value);
    const dispatcher = useAppDispatch();

    const [images, setImages] = useState([{
        download_url: ""
    }]);
    const [activeImage, setActiveImage] = useState({
        download_url: ""
    });
    const [product, setProduct] = useState<any>({});

    useEffect(() => {
        axios.get("https://picsum.photos/v2/list?limit=4").then((res) => {
            setImages(res.data);
            setActiveImage(res.data[0]);
        })

        fetch(`https://fakestoreapi.com/products/${productId}`)
            .then(res => res.json())
            .then(json => setProduct(json))
    }, [productId])

    const isInCart = () => {
        let item = cart.find((item) => item.productId.toString() === productId)
        if (item) {
            return item.quantity;
        }

        return null;
    }

    const handleImageClick = (i: number) => setActiveImage(images[i]);
    const handleAddToCart = () => {
        dispatcher(addToCart({
            productId,
            quantity: 1
        }))
    }

    const increaseQuantity = () => {
        let updateCart = [...cart];
        let objIndex = updateCart.findIndex((obj => obj.productId.toString() === productId));
        updateCart[objIndex] = {
            ...updateCart[objIndex],
            quantity: updateCart[objIndex].quantity + 1
        };

        dispatcher(setCart(updateCart));
    }

    const decreaseQuantity = () => {
        let updateCart = [...cart];
        let objIndex = updateCart.findIndex((obj => obj.productId.toString() === productId));
        if (updateCart[objIndex].quantity > 0) {

            let updatedQuantity = updateCart[objIndex].quantity - 1;

            if (updatedQuantity === 0) {
                updateCart.splice(objIndex, 1);
            } else {
                updateCart[objIndex] = {
                    ...updateCart[objIndex],
                    quantity: updatedQuantity
                };
            }

            dispatcher(setCart(updateCart));
        }
    }

    return (
        <div className={`${width > 600 && "px-10 py-10"}`}>
            <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <div className={`flex flex-col gap-5 ${width > 600 && "p-5"}`}>
                        <img className={`w-full ${width > 600 && "rounded-md"}`} src={activeImage.download_url} alt="Profile" />
                        <div className='flex justify-between'>
                            {
                                width > 600 && images && images.map((image, i) => <img className="w-20 rounded-md" onClick={() => handleImageClick(i)} src={image.download_url} alt="Profile" />)
                            }
                        </div>
                    </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <div className={`flex flex-col p-5 gap-2 ${width <= 600 && "pt-0"}`}>
                        <p className='text-PRIMARY_ORANGE font-bold text-xs'>SNEAKER COMPANY</p>
                        <p className='font-bold text-2xl'>{product.title || "Fall Limited Edition Sneakers"}</p>
                        <p className='text-gray-500 font-medium text-[10px] mt-3'>{product.description}</p>
                        <div className='flex flex-col'>
                            <div className='flex items-center gap-4'>
                                <p className='font-bold text-xl'>${product.price?.toFixed(2)}</p>
                                <div className='bg-PRIMARY_ORANGE/10 rounded-md py-1 px-2'>
                                    <p className='text-PRIMARY_ORANGE font-bold text-xs'>50%</p>
                                </div>
                            </div>
                            <p className='text-xs text-gray-500/70 font-bold line-through	'>
                                $250.00
                            </p>
                        </div>

                        <div className={`flex justify-between mt-5 ${width <= 600 && "flex-col"}`}>
                            <div className={`flex justify-between rounded-lg bg-[#f7f8fd] ${width <= 600 ? "h-10 w-full mb-5" : "h-8 w-36"}`}>
                                <button disabled={!isInCart() ? true : false} onClick={decreaseQuantity} className={`w-12 font-bold text-PRIMARY_ORANGE rounded-l-lg ${isInCart() && "hover:bg-gray-500/50"}`}>-</button>
                                <p className='w-12 flex font-bold justify-center items-center'>{isInCart() || 0}</p>
                                <button disabled={!isInCart() ? true : false} onClick={increaseQuantity} className={`w-12 font-bold text-PRIMARY_ORANGE rounded-r-lg  ${isInCart() && "hover:bg-gray-500/50"}`}>+</button>
                            </div>
                            <button onClick={handleAddToCart} disabled={isInCart() ? true : false} className={`text-white text-xs font-semibold bg-PRIMARY_ORANGE rounded-lg ${!isInCart() && "hover:bg-orange-500"} ${width <= 600 ? "h-10 w-full mb-5" : "h-8 w-44"} shadow-md shadow-PRIMARY_ORANGE/50`}>Add to Cart</button>
                        </div>

                    </div>
                </Grid>
            </Grid>
        </div >
    )
}

export default ProductDetails