import React, { useState } from 'react'
import productData from "../products.json"

const title = (
    <h2>Search Your one From <span>Thousand</span> of Products</h2>
)
const dese = "We have the largest collection of products"


// bannerList

const bannerList = [
{
    iconName: "icofont-users-alt-4",
    text: "1.5 Million Customers",
},
{
    iconName: "icofont-notification",
    text: "More then 2000 Marchent",
},
{
    iconName: "icofont-globe",
    text: "Buy Anything Online",
},
];


const Banner = () => {
    const [searchInput, setSearchInput] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(productData);

    // console.log(productData)

    // search functionality
    const handleSearch = e => {
        const searchTerm = e.target.value;
        setSearchInput(searchTerm)

        // filtering products based on search
        const filtered = productData.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
        {searchInput} onChange={handleSearch}
    }

  return (
    <div className='banner-section style-4'>
        <div className="container">
            <div className="banner-content">
                {title}
                <form>
                    <input type="text" name='search' id='search' placeholder='Search your product' value={searchInput} onChange={handleSearch}/>
                </form>
                <p>{dese}</p>
            </div>
        </div>
    </div>
  )
}

export default Banner