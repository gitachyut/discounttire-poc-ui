import React from 'react';

// const styles = {
// }

export default function CategoryBar(categories) {
    return (
        <ul>
            {
                categories.categories.map( category => <li key={category.id}>{ category.name }</li> )
            }
        </ul>
    )
  }