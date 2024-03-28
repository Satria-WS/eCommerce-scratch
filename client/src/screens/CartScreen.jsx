import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import Message from "../components/Message";

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart.cartItems;
  console.log(cartItems.length);

  return (
    <Row>
      <Col md={8}>
        <h1 className="mb-3">Shopping Cart</h1>
        {cartItems === 0 ? (
          <Message>
            Your cart is empty <Link to={"/"}>Go back</Link>
          </Message>
        ) : (
          <ListGroup variant="flush">Items</ListGroup>
        )}
      </Col>
    </Row>
  );
};
export default CartScreen;
