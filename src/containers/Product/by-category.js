import ProductsByCategory from "../../components/products-by-category/products-by-category";
import Categories from "../../components/categories/categories";
import {
  useParams,
  Link
} from "react-router-dom";

export default function ProductByCategory(props) {
  let { id } = useParams();
  return (
    <>
     <Link to="/"><h1>Demo Store</h1></Link> 
      <Categories />
      <ProductsByCategory id={id} />
    </>
  )
}