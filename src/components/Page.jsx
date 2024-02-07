import {
  useContext,
  useEffect,
  experimental_useEffectEvent as useEffectEvent,
} from "react";
import { shoppingCardContext } from "../context/ShoppingCardContext";
import logVisit from "../utilities/logVisit";

export default function Page({ url, onPageChange, addItem }) {
  const items = useContext(shoppingCardContext);
  const numberOfItems = items.length;

  const onVisit = useEffectEvent((visitedUrl) => {
    logVisit(visitedUrl, numberOfItems);
  });

  useEffect(() => {
    onVisit(url);
    // logVisit(url, numberOfItems);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return (
    <div>
      <div>This is page</div>
      <button onClick={onPageChange}>Change Page</button>
      <button onClick={addItem}>Add Item</button>
      <div>Total Item in Card {numberOfItems}</div>
    </div>
  );
}
