import React from "react";

const Product = (props) => {
  const imgsrc = "https://via.placeholder.com/300x300";
  const name = props.value.name;
  const price = props.value.price;
  let cartName = !props.value.addedToCart ? "Add to Cart" : "Remove";

  // handle cart number ;

  const handleCart = () => {
    console.log(cartName);
    //passing data child to parent using call back ();

    if (cartName === "Add to Cart") props.parent(1, name);
    else props.parent(-1, name);
  };

  // now child function available in child component (for reference :) below code

  // const Child = (data, name) => {
  //   setCart(cart + data);  // cart value re- render
  //   console.log(name);
  //   items.map((item) => {
  //     if (name === item.name) {
  //       item.addedToCart = !item.addedToCart;
  //     }
  //     return item;
  //   });
  //   console.log(items);
  // };

  return (
    <div className="card">
      <img src={imgsrc} alt="" />
      <h2>{name}</h2>
      <p>
        <b>{price}</b>
      </p>
      <button onClick={handleCart}>{cartName}</button>
    </div>
  );
};

export default Product;
