import React from 'react';
import Category from "../components/Category";
import ProductList from "../components/ProductList";
import CategoryList from "../components/Product/CategoryList";
import {useParams} from "react-router-dom";

const CategoryScreen = () => {
    const { id } = useParams();

    return (
        <div className="shop-container">
            <Category />
            <CategoryList id={id}/>
        </div>
    );
};

export default CategoryScreen;
