import React from 'react';

const ShopCategory = ({ filterItem, setItem, menuItems, setProducts, selectedCategory }) => {
    return (
        <>
            <div className='widget-header'>
                <h5 className='ms-2'>All Categories</h5>
            </div>
            <div>

                {menuItems.map((val, id) => (
                    <button
                        className={`m-2 ${selectedCategory === val ? "bg-warning" : ""}`}
                        key={id}
                        onClick={() => filterItem(val)}
                    >
                        {val}
                    </button>
                ))}
            </div>
        </>
    );
};

export default ShopCategory;
