import { useContext } from "react";
import AddProduct from "./components/AddProduct";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";
import CardIdContext from "./context";

export default function App() {
  const { cardId } = useContext(CardIdContext);
  return (
    <div className="flex">
      <AddProduct />
      <Products />
      <ProductDetails id={cardId} />
    </div>
  );
}
