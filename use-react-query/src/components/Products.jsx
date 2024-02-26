import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import CardIdContext from "../context";

const retrieveProducts = async ({ queryKey }) => {
  const responds = await axios.get(
    `http://localhost:3000/products?_page=${queryKey[1].page}&_per_page=6`
  );
  return responds.data;
};

const deleteProduct = async ({ productId }) => {
  const responds = await axios.delete(
    `http://localhost:3000/products/${productId}`
  );
  return responds.data;
};

export default function Products() {
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();

  const {
    data: products,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["products", { page }],
    queryFn: retrieveProducts,

    // retry: false,
    // staleTime: 5000,
    // refetchInterval: 1000,
  });

  const mutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });

  const { setCardId } = useContext(CardIdContext);

  if (isLoading) return <div>Fetching Products......</div>;
  if (error) return <div>An Error occurred: {error.message}</div>;

  function handleDelete(deleteId) {
    mutation.mutate({ productId: deleteId });
  }

  return (
    <div className="flex flex-col justify-center items-center w-3/5">
      <h2 className="text-3xl my-2">Product List</h2>
      <ul className="flex flex-wrap justify-center items-center">
        {products.data &&
          products.data.map((product) => (
            <li
              key={product.id}
              className="flex flex-col items-center m-2 border rounded-sm relative"
            >
              <button
                onClick={() => handleDelete(product.id)}
                className="absolute top-0 right-0 z-10 cursor-pointer"
              >
                <MdDelete />
              </button>
              <img
                className="object-cover h-64 w-96 rounded-sm"
                src={product.thumbnail}
                alt={product.title}
              />
              <p className="text-xl my-3">{product.title}</p>
              <button
                onClick={() => setCardId(product.id)}
                className="ml-auto m-2  bg-black rounded text-white px-3 py-2"
              >
                Show Details
              </button>
            </li>
          ))}
      </ul>
      <div className="flex">
        {products.prev && (
          <button
            className="p-1 mx-1 bg-gray-100 border cursor-pointer rounded-sm"
            onClick={() => setPage(products.prev)}
          >
            Prev
          </button>
        )}
        {products.next && (
          <button
            className="p-1 mx-1 bg-gray-100 border cursor-pointer rounded-sm"
            onClick={() => setPage(products.next)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
