import "./styles.css";
import ProductImg from "assets/images/product.png";

const ProductCard = () => {
  return (
    <div>
      <div>
        <img src={ProductImg} alt="Nome do Produto" />
      </div>
      <div>
        <h6>Computador Desktop - Intel Core i7</h6>
        <p>2345.67</p>
      </div>
    </div>
  );
};
export default ProductCard;
