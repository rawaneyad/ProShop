import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import MyOrdersList from '../components/my orders/MyOrderList';
import { getMyOrders } from '../redux';

const MyOrders = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getMyOrders());
    }, []);
  return (
    <>
    <MyOrdersList/>
    </>
  )
}

export default MyOrders