import { Spinner } from "react-bootstrap";
const Loader = () => {
  const classSpinner = {
    width: "100px",
    height: "100px",
    margin: "auto",
    display: "block",
  };
  return (
    <Spinner
      animation="border"
      role="stats"
      style={classSpinner}
    ></Spinner>
  );
};
export default Loader;
