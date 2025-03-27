import React from 'react'
import Item from '../components/Item/Item';
import "./ProductsBunch.css"


const ProductsBunch = ({title, data}) => {
  return (
    <div className="productsbunch">
      <h1>{title}</h1>
      <hr />
      <div className="productsbunch-item">
        {data.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  )
}

export default ProductsBunch
