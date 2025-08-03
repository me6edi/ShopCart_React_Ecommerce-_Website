import React, { useState } from 'react'
const desc = "Energistia an deliver atactica metrcs after adsionary Apropia trnsition enterpris an sources applications emerging psd template."

const ProductDisplay = ({item}) => {
    console.log(item)
    const{name, id, price,seller, ratingsCount,quantity} = item;

    const [prequantity, setQuantity] = useState(quantity);
    const [coupon, setCoupon] = useState ("");
    const [size, setSize] = useState ("Select Size");
    const [color, setcolor] = useState ("Select color");
  return (
    <div>
        <div>
            <h4>{name}</h4>
            <p className="rating">
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                <i className='icofont-star'></i>
                {ratingsCount} review
            </p>
            <h4>${price}</h4>
            <h6>{seller}</h6>
            <p>{desc}</p>
        </div>


        {/* cart components */}
        <div>
            <form>
                <div className="select-product size">
                <select value={size}>
                    <option>Select Size</option>
                    <option value="SM">SM</option>
                    <option value="MO">MO</option>
                    <option value="LG">LG</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                </select>
                </div>
            </form>
        </div>
    </div>
  )
}

export default ProductDisplay