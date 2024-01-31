import  { FC, useEffect, useState } from 'react'
import ProductList from './ProductList';
import { getProductList } from './Api';
import NotFound from './NotFound';
import Loading from './Loading';

type ProductListPageProps={
    
  query:string
  prise:number
}

const ProductListPage: FC<ProductListPageProps> = ({  }) => {

const [items,setItems]=useState([]);
const [query,setQuery]=useState("");
const [sort,setSort]=useState("defalt");
const [loading,setLoading]=useState(true);
console.log(items);

useEffect(function(){
  const productList= getProductList();
  productList.then(function(promise){
    setItems(promise);
  setLoading(false) });
},[]);

function handleChange(event:any){
  setQuery(event.target.value);
}
function handleSort(event:any){
  setSort(event.target.value);
}

 const filterData=items.filter(function(data:any){
   const lowerCaseTitle = data.title.toLowerCase();
    const lowerCaseProduct = query.toLowerCase();
    return lowerCaseTitle.indexOf(lowerCaseProduct) != -1;
  
 })
 
 if(sort=="name"){
  filterData.sort(function(x:any,y:any){
  return x.title<y.title ? -1:1;
});
  }else if(sort=="lowtohigh"){
   filterData.sort(function(x:any,y:any){
   return x.price - y.price;
   });}
  else if(sort=="hightolow"){
   filterData.sort(function(x:any,y:any){
   return y.price - x.price;
   });}

   if(loading){
    return <Loading/>
   }

   if(!items){
    return <NotFound/>
   }
  
  return (
    <div >
      <div className='flex justify-between sm:flex-row md: flex-col '>
      <input type='text' onChange={handleChange} value={query} className='border-2 border-black px-8 py-2 my-4 ml-10 text-xl ' placeholder='Search'></input>
      <select onChange={handleSort}
      value={sort} 
      className='border-2 border-black  py-2 my-4 ml-10 text-xl mr-24 '>
        <option value="defalt">Defalt Sorting</option>
        <option value="name">Sort by name</option>
        <option value="lowtohigh">Sort by Price:low to high</option>
        <option value="hightolow">Sort by Price:high to low</option>
      </select>
      </div>
     {items.length>0 && <ProductList object={filterData} />}
     {items.length==0 && <NotFound/> }
    </div>
  )
}

export default ProductListPage;