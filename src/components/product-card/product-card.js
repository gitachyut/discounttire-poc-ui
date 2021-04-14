import React from 'react';
import {
    Link
  } from "react-router-dom";

const styles = {
    card: {
        border: "1px solid grey",
        margin: "5px",
        padding: "5px",
        width: "450px",
        display: "flex"
    },
    img: {
        width: "100px",
        height: "200px",
        margin: "5px 0"
    },
    left: {
        marginRight: "10px"
    },
    right: {

    },
    link:{
        color: "black",
        textDecoration: "none"
    }
}

export default function ProductCard(product) {
    const { id, name, main_image, price, description, Category } = product.product;
    return (
        <Link  style={styles.link} to={`/products/details/${id}`}>
            <div  style={styles.card}>
                <div style={styles.left}>
                    <img style={styles.img} src={main_image} alt="product_img" />
                </div>
                <div style={styles.right}>
                    <h4>{name}</h4>   
                    <b>{price}</b>
                    <p>{description}</p>
                    <i>Category: {Category.name}</i>
                </div>
            </div>
        </Link>
    )
  }