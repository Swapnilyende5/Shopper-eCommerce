import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
// import dropdown_icon from "../components/assets/dropdown_icon.png";
import Item from "../components/Item/Item";
import "./CSS/ShopCategory.css";

const ShopCategory = ({ banner, category }) => {
  const { all_product } = useContext(ShopContext);
  const [addItem, setAddItem] = useState(8);

  const filteredByCategory = all_product.filter(
    (products) => products.category === category
  );

  const handleExplore = () => {
    setAddItem(addItem + 4);
  };
  const handleSort = (e) => {
    filteredByCategory.filter((item) => {
      if (e.target.value === "five") {
        return item.rating === 5;
      } else if (e.target.value === "above4") {
        return item.rating > 4;
      } else {
        return item.rating > 3;
      }
    });
  };

  useEffect(() => {
    setAddItem(8);
  }, [category]);

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-{addItem}</span> out of {filteredByCategory.length}
          products
        </p>
        <div className="shopcategory-sort">
          Sort by Rating:
          <select name="rating" id="rating" onChange={handleSort}>
            <option value="select">Select</option>
            <option value="five">5</option>
            <option value="above4">4 and above</option>
            <option value="above3">3 and above</option>
          </select>
        </div>
      </div>
      <div className="shopcategory-products">
        {filteredByCategory.slice(0, addItem).map((item, i) => {
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
      {filteredByCategory.length > addItem && (
        <div className="shopcategory-loadmore">
          <button type="button" onClick={handleExplore}>
            Explore More
          </button>
        </div>
      )}
    </div>
  );
};

export default ShopCategory;
