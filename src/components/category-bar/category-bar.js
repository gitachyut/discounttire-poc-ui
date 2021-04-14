import React from 'react';
import {
    Link
} from "react-router-dom";

const styles = {
    ul: {
        listStyleType: "none",
        margin: 0,
        padding: "5px 5px",
        display: "flex",
        background: "#c3c1c1"
    },
    li: {
        padding: "5px"
    },
    link:{
        color: "black",
        textDecoration: "none"
    }
}


export default function CategoryBar(categories) {
    return (
        <ul style={styles.ul}>
            {
                categories.categories.map( category => 
                    <Link  style={styles.link} to={`/categories/${category.id}/products/`}>
                        <li  style={styles.li} key={category.id}>{ category.name }</li> 
                    </Link>  
                )
            }
        </ul>
    )
  }