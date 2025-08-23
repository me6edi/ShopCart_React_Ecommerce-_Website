import React, { useEffect, useState } from 'react'
import PageHeader from '../components/PageHeader';  
import { Link } from 'react-router-dom';

const CartPage = () => {
    const [cartItems, setcartItems] = useState([]);

    useEffect(()=> {
        // fetch cart item from local storage
        const storedcartItems = JSON.parse(localStorage.getItem("cart")) || [];
        setcartItems(storedcartItems);
    }, [])

    // calculate prices
    const calculateTotalprice = (item) => {
        return item.price * item.quantity;
    }

    // handle quantity increase
    const handleIncrease = (item) =>{
        item.quantity += 1;
        setcartItems([...cartItems]);

        // update local storage with new cart items
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }

    // handle quantity decrease
    const handleDecrease = (item) => {
        if(item.quantity > 1){
            item.quantity -= 1;
            setcartItems([...cartItems]);
            updateLocalStorage([...cartItems]); 
        }
    }

    // handle item remove 
    const handleRemoveItem = (item) => {
        const updatecart = cartItems.filter((cartItem) => cartItem.id !== item.id); 
        setcartItems(updatecart);
        updateLocalStorage(updatecart);
    }

    const updateLocalStorage = (cart) => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    // cart subtotal
    const cartSubtotal = cartItems.reduce((total, item) => {
        return total + calculateTotalprice(item);
    }, 0)

    // order total
    const orderTotal = cartSubtotal;

    return <div>
        <PageHeader title="Shop Cart" cartPage="Cart Page" />
        <div className="shop-cart padding-tb">
            <div className="container">
                    <div className="section-wrapper">
                        {/* cart top */}
                        <div className="cart-top">
                            <table>
                                <thead>
                                    <tr>
                                        <th className='cat-product'>Product</th>
                                        <th className='cat-price'>Price</th>
                                        <th className='cat-quantity'>Quantity</th>
                                        <th className='cat-toprice'>Total</th>
                                        <th className='cat-edit'>Edit</th>
                                    </tr>
                                </thead>

                                {/* table body */}
                                <tbody>
                                    {
                                        cartItems.map((item,indx) => (
                                            <tr key={indx}>
                                                    <td className='product-item cat-product'>
                                                        <div className="p-thumb">
                                                            <Link to="/shop"><img src={item.img}/></Link>
                                                        </div>
                                                        <div className="p-content">
                                                            <Link to='/shop'>{item.name}</Link>
                                                        </div>
                                                    </td>
                                                    <td className="cat-price">$
                                                        {item.price}
                                                    </td>
                                                    <td className="cat-quantity">
                                                        <div className='cart-plus-minus'>
                                                                <div className='dec qtybutton'>-</div>
                                                                <input type="text"  className='cart-plus-minus-box' name='qtybutton' value={item.quantity}/>
                                                        </div>
                                                    </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                        {/* cart top end */}
                    </div>
            </div>
        </div>
    </div>
};

export default CartPage
