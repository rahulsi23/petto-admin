import React from 'react'
import { Breadcrumb, ProductCategoryTable } from './sub-component'

const ProductCategory = () => {
  return (
    <>
    <div className='main-wrapper'>
        <Breadcrumb />
        <div className='card'>
        <div className="card-body">
        <ProductCategoryTable />
        </div>
       </div>
     </div>
</>
  )
}

export default ProductCategory