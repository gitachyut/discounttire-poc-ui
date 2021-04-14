import Products from "../../components/products/products";
import Categories from "../../components/categories/categories";

export default function Home() {
  return (
    <>
      <h1> Store </h1>
      <Categories />
      <Products />
    </>
  )
}