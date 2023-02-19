import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ListProducts from '../components/category/ListProducts'
import { getProductCategory } from '../redux';

const Category = () => {
    const { category } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProductCategory(category));
    }, []);
  return (
    <><ListProducts/></>
  )
}

export default Category