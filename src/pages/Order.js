import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import OrderProfile from '../components/order detail/OrderProfile';
import { getOrderDetails } from '../redux';

const Order = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getOrderDetails(id));
    }, []);
  return (
    <div><OrderProfile/></div>
  )
}

export default Order