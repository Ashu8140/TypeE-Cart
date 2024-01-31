import  { FC } from 'react'

import Product from './Product'


type ProductListProps={
  object:any
}

const ProductList: FC<ProductListProps> = ({ object}) => {
  
  return (
    <div className="flex flex-wrap gap-2">
    {object.map(function(item:any){
      return(
   <Product 
          
            id={item.id}
            thumbnail={item.thumbnail}
            category={item.category}
            title={item.title}
            price={item.price}
            rating={item.rating} />
 ); })}
    </div>
  );

}

export default ProductList;