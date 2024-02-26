import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const retrieveProducts = async ({ queryKey }) => {
  const responds = await axios.get(
    `http://localhost:3000/${queryKey[0]}/${queryKey[1]}`
  );
  return responds.data;
};

// eslint-disable-next-line react/prop-types
export default function ProductDetails({ id }) {
  const {
    data: product,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", id],
    queryFn: retrieveProducts,
  });

  if (isLoading) return <div>Fetching Products......</div>;
  if (error) return <div>An Error occurred: {error.message}</div>;
  return (
    <div className="w-1/5">
      <h1 className="text-3xl my-2 text-center mt-3">ProductDetails</h1>
      <div className="border bg-gray-100 p-1 rounded flex flex-col">
        <img
          className="object-cover h-24 w-24 border rounded-full m-auto"
          src={product?.thumbnail}
          alt={product?.title}
        />
        <div className="p-4">
          <p>{product?.title}</p>
          <p>{product?.description}</p>
          <p>USD {product?.price}</p>
          <p>{product?.rating}/5</p>
        </div>
      </div>
    </div>
  );
}
