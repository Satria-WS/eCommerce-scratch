import { Row, Col } from "react-bootstrap";
import products from "../data/product";
import Product from "../components/Product";
const HomeScreen = () => {
  return (
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
  );
};
export default HomeScreen;
