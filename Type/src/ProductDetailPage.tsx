import  { FC,useState,useEffect} from 'react'
import { useParams } from 'react-router';
import { getProductDetail } from './Api';
import { Link } from 'react-router-dom';
import {HiArrowNarrowLeft,HiArrowNarrowRight,HiArrowSmLeft} from "react-icons/hi";
import NotFound from './NotFound';
import Loading from './Loading';

type ProductDetailPageProps={


}

const ProductDetailPage: FC<ProductDetailPageProps> = ({  }) => {
  const id= +(useParams<{id:any}>().id);
  console.log(id);

  const [data,setData]=useState<any>();
  const [loading, setLoading]=useState(true);

console.log("data",data);

 useEffect(function(){
  const ProductDetail=getProductDetail(id);
  ProductDetail.then(function(item){
    setData(item);
    setLoading(false);
  })
 },[id]);


 if(loading){
  return  <Loading/>
 }
 if (!data) {
  return <NotFound/>;
}

  return (
    <div>
     
   <div className="flex max-w-2xl gap-8 p-6 pb-16 bg-gray-100 border-2 border-solid ">

<div>
   <Link className="flex text-xl" to="/"><HiArrowSmLeft className="text-3xl" />Back </Link> 
  <img className="h-full max-w-full " src={data.thumbnail}  />
</div>
<div className="mt-12">
  <h1 className="text-2xl">{data.title}</h1>
  <h1 className="mt-4 text-xl font-bold">{data.price}</h1>
  <p className="mt-2">{data.description}</p>
  
   <input className="w-10 py-1 text-center border-2 border-black rounded-md " type="number" min={1}   ></input>
  
  <button className="px-8 py-1 mt-6 ml-1 bg-red-400 border-2 border-black rounded-md">Add to Card</button>
</div>
</div>
<div className="flex justify-between mt-4">
<div>
   {id > 1 && <Link className="flex text-xl text-blue-500 item-center" to={"/products/" + (id - 1)}><HiArrowNarrowLeft className="text-3xl"/>Preious </Link>} 
</div>
<Link className="flex text-xl text-blue-500 item-center" to={"/products/" + (id + 1)}>
Next<HiArrowNarrowRight className="text-3xl"/> </Link> 
</div>
    </div>
  );
}

export default ProductDetailPage;