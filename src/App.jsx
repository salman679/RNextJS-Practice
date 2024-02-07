import { useState } from "react";
import Page from "./components/Page";
import { shoppingCardContext } from "./context/ShoppingCardContext";

const items = [
  {
    id: 1,
    title: "Product 1",
  },
];

export default function App() {
  const [page, setPage] = useState("/home");
  const [cardItem, setCardItem] = useState(items);

  function handleAddItem() {
    return setCardItem([
      ...cardItem,
      {
        id: 2,
        title: "ami tomay balobasi",
      },
    ]);
  }

  const handlePageChange = () => {
    setPage("/card");
  };
  return (
    <div>
      <shoppingCardContext.Provider value={cardItem}>
        <Page
          url={page}
          onPageChange={handlePageChange}
          addItem={handleAddItem}
        />
      </shoppingCardContext.Provider>
    </div>
  );
}
