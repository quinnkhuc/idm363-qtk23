import Header from "../components/Header/Header";
import Form from "../components/Form/Form";
import { useSelector } from "react-redux";

export default function Admin() {
  const products = useSelector((state) => state.product.value);

    return (
      <>
        <Header/>
        <div id="form-container">
          {products.map((product) => (
            <Form
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </>
    );
}