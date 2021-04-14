import useProduct from '../../gql-hooks/useProduct/useProduct';
const styles = {
  card: {
      border: "1px solid grey",
      margin: "5px",
      padding: "5px",
      width: "450px",
      display: "flex"
  },
  img: {
      width: "100px",
      height: "200px",
      margin: "5px 0"
  },
  left: {
      marginRight: "10px"
  },
  right: {

  },
  link:{
      color: "black",
      textDecoration: "none"
  }
}

export default function Product({id}) {
  const { isLoading, data , error } = useProduct(id);
  console.log('data', data)
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {
        isLoading &&
          <i> Loading....</i>
      }
      { 
        !isLoading && 
          <div  style={styles.card}>
            <div style={styles.left}>
                <img style={styles.img} src={data.Products_by_pk.main_image} alt="product_img" />
            </div>
            <div style={styles.right}>
                <h4>{data.Products_by_pk.name}</h4>   
                <b>{data.Products_by_pk.price}</b>
                <p>{data.Products_by_pk.description}</p>
                <i>Category: {data.Products_by_pk.Category.name}</i>
            </div>
          </div>
      }
      {
        error && <span style={{ color: "red"}}> Something went wrong!</span>
      }
    </div>
  )
}