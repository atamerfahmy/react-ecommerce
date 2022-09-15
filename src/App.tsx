import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './utils/hooks';
import { userLoginAction } from './store/slices/user/user.actions';
import {
  BrowserRouter,
  Routes,
  Route,
  useRoutes,
  useLocation
} from "react-router-dom";
import Login from './components/Login';
import AppRoutes from "./routes";
import TopBar from './components/TopBar';
import { addToCart, setCart } from './store/slices/cart/cart.slice';
import { setProducts } from './store/slices/products/product.slice';

function App() {

  const dispatcher = useAppDispatch();

  const loggedIn = useAppSelector((state) => state.user.value.loggedIn);

  const routing = useRoutes(AppRoutes(loggedIn));
  let location = useLocation();

  useEffect(() => {

    fetch('https://fakestoreapi.com/carts/user/2')
      .then(res => res.json())
      .then(json => dispatcher(setCart(json[0].products)))

    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => dispatcher(setProducts(json)))

  }, [])

  return (
    <>
      {
        location.pathname !== "/signin" && location.pathname !== "/signup" ?
          <TopBar />
          :
          null
      }
      {routing}
    </>
  );
}

export default App;
