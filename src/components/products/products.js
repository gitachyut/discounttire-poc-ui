import useProducts from '../../gql-hooks/useProducts/useProducts';
import ProductCard from '../product-card/product-card';

export default function Products() {
  const { isLoading, data , error } = useProducts();
  return (
    <>
      {
        isLoading &&
          <i> Loading....</i>
      }
      { 
        !isLoading && 
          data.Products.map((product) => {
            return <ProductCard key={product.id} product={product} />
          })
      }
      {
        error && <span style={{ color: "red"}}> Something went wrong!</span>
      }
    </>
  )
}