import React from 'react';

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
    }
}


export default function CategoryBar(categories) {
    return (
        <ul style={styles.ul}>
            {
                categories.categories.map( category => <li  style={styles.li} key={category.id}>{ category.name }</li> )
            }
        </ul>
    )
  }