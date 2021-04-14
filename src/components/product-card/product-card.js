import React from 'react';

const styles = {
    card: {
        border: "1px solid grey",
        margin: "5px",
        padding: "5px",
        width: "500px",
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

    }
}

export default function ProductCard(product) {
    const { name, main_image, price, description, Category } = product.product;
    return (
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
    )
  }