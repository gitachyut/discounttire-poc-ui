import useProductByCategory from '../../gql-hooks/useProductByCategory/useProductByCategory';
import ProductCard from '../product-card/product-card';

export default function ProductsByCategory({id}) {
  const { isLoading, data , error } = useProductByCategory(id);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
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
    </div>
  )
}