import Products from "../../components/products/products";
import Categories from "../../components/categories/categories";
import {
  Link
} from "react-router-dom";

export default function Home() {
  return (
    <>
      <Link to="/"><h1>Demo Store</h1></Link> 
      <Categories />
      <Products />
    </>
  )
}