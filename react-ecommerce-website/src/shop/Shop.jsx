import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'

const showResults = "Showing 01 - 12 of 139 Results"
import Data from "../products.json"
import ProductCards from './ProductCards'

const Shop = () => {
    const [GridList, setGridList] = useState(true)
    const [products, setproducts] = useState(Data)
    console.log(products)
  return (
    <div>
        <PageHeader title="Our Shop Page" curpage="Shop"/>
        {/* shop page */}
        <div className="shop-page padding-tb">
            <div className="container">
                <div className="row justify-content-center">
                        <div className="col-lg-8 col-12">
                            <article>
                                {/* layout and title hare */}
                                <div className='shop-title d-flex flex-warp justify-content-between'>
                                            <p>{showResults}</p>
                                            <div className={`product-view-mode ${GridList ? "gridActive": "listActive"}`}>
                                                <a className='grid' onClick={()=> setGridList(!GridList)}>
                                                <i className='icofont-ghost'></i>
                                                </a>
                                                <a className='list' onClick={()=> setGridList(!GridList)}>
                                                <i className='icofont-listine-dots'></i>
                                                </a>
                                            </div>
                                </div>
                                {/* product cards */}
                                <div>
                                    <ProductCards GridList={GridList} products={products} />
                                </div>
                            </article>
                        </div>
                        <div className="col-lg-4 col-12">
                            left side
                        </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shop