// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";

import { useGetProductsQuery } from "../slices/productsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";

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
        <Loader />
      ) : error ? (
        <Message variant={"danger"}>
          {error?.data?.message || error.error}
        </Message>
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
