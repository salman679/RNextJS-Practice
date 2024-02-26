import { useState } from "react";

import CardIdContext from "../context";

// eslint-disable-next-line react/prop-types
export default function CardIDProvider({ children }) {
  const [cardId, setCardId] = useState(1);
  return (
    <CardIdContext.Provider value={{ cardId, setCardId }}>
      {children}
    </CardIdContext.Provider>
  );
}
