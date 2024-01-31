import  { FC } from 'react'
import {Link} from "react-router-dom"

type productProps={
  thumbnail:string
  category:string
  title:string
  rating:string
  price:number
  id:number


}

const Product: FC<productProps> = ({thumbnail,category,title,rating,price,id}) => {
  return (
    <div>
    <div className="p-2 max-w-xs rounded-md bg-red-500 ">
      <div className=" w-full aspect-square">
			<img className="h-full w-full object-cover " src={thumbnail} />
        </div>
			<h2 className="text-gray-500">{category}</h2>
			<h2 className="text-xl">{title}</h2>
			<h2 className="text-red-500 text-xl">{rating}</h2>
			<h2>{price}</h2> 
			<Link className="text-blue-400 text-xl text-blue"to={'/products/'+id}> 
				View Data
			</Link> 
		</div>
    </div>
  )
}

export default Product;