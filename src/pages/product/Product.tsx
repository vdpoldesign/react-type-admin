import Single from "../../components/single/Single";
import { singleProduct } from "../../data";
import "./product.scss";

const Product = () => {
  //Fetch data en stuur naar enkele component
  return (
    <div className="product">
      <Single {...singleProduct} />
    </div>
  );
};

export default Product;
