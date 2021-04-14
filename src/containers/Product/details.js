import Product from "../../components/product/product";
import Categories from "../../components/categories/categories";
import {
  useParams,
  Link
} from "react-router-dom";

export default function ProductDetails(props) {
  let { id } = useParams();
  return (
    <>
     <Link to="/"><h1>Demo Store</h1></Link> 
      <Categories />
      <Product id={id} />
    </>
  )
}