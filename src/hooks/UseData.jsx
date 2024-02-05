import { useEffect, useState } from "react";
import fetchResults from "../utilities/FetchResult";

export default function useData(query, page) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    let ignore = false;

    fetchResults(query, page).then((json) => {
      if (!ignore) {
        setResults(json);
      }
    });

    // cleanup
    return () => {
      ignore = true;
    };
  }, [query, page]);

  return results;
}
