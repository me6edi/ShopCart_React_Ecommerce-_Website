import React, { useEffect, useState } from 'react'

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
        }
    }

// handle item remove 

const handleRemoveItem = (item) => {
    const updatecart = cartItems.filter((cartItem) => cartItems.id !== item.id);

    // update newcart
    setcartItems(updatecart);
    updateLocalStorage(updatecart)
}
const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// cart subtotal
const cartSubtoal = cartItems.reduce((total, item))
  return (
    <div>CartPage</div>
  )
}

export default CartPage