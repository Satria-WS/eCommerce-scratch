import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import { useParams } from "react-router-dom";
import { useGetProductsQuery } from "../slices/productsApiSlice";

// import products from "../data/product";
// import axios from "axios";

const HomeScreen = () => {
  //did not using again
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   try {
  //     const fetchProducts = async () => {
  //       const { data } = await axios.get("/api/products");
  //       setProducts(data);
  //     };
  //     fetchProducts();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }, []);

  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
      ) : (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products.map((product, id) => {
              return (
                <Col key={id + 1} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} _id={id + 1} />
                </Col>
              );
            })}
          </Row>
        </>
      )}
    </>
  );
};
export default HomeScreen;
