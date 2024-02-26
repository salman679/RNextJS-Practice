import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

export default function AddProduct() {
  const queryClient = useQueryClient();
  const [state, setState] = useState({
    title: "",
    description: "",
    price: 0,
    rating: 5,
    thumbnail: "",
  });

  function handleChange(event) {
    const name = event.target.name;
    const value =
      event.target.type === "number"
        ? event.target.valueAsNumber
        : event.target.value;

    setState({
      ...state,
      [name]: value,
    });
  }

  const mutation = useMutation({
    mutationFn: (newProduct) =>
      axios.post(`http://localhost:3000/products`, newProduct),
    onSuccess: (data, variable, context) => {
      console.log(context);
      queryClient.invalidateQueries(["products"]);
      // queryClient.setQueriesData(["random"], { value: "some random data" });
    },
    onMutate: (variable) => {
      return { ...variable, id: crypto.randomUUID().toString() };
    },
  });

  if (mutation.isPending) {
    return <span>Submitting.....</span>;
  }

  if (mutation.isError) {
    return <span>Error: {mutation.error.message}</span>;
  }

  function handleSubmit(event) {
    event.preventDefault();

    mutation.mutate(state);
    setState("");
  }
  return (
    <div className="bg-gray-100 m-2 p-2 h-1/2 rounded w-1/5 flex flex-col items-center justify-center">
      <h2 className="text-2xl py-2">Add Product</h2>
      {mutation.isSuccess && <p>Product Added!</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          className="rounded border p-2 mb-2 mx-auto block"
          value={state.title}
          onChange={handleChange}
          placeholder="Enter Your Title"
        />
        <input
          type="text"
          name="description"
          className="rounded border p-2 mb-2 mx-auto block"
          value={state.description}
          onChange={handleChange}
          placeholder="Enter A Description"
        />
        <input
          type="number"
          name="price"
          className="rounded border p-2 mb-2 mx-auto block"
          value={state.price}
          onChange={handleChange}
          placeholder="Enter Product Price"
        />
        <input
          type="text"
          name="thumbnail"
          className="rounded border p-2 mb-2 mx-auto block"
          value={state.thumbnail}
          onChange={handleChange}
          placeholder="Enter A Thumbnail"
        />
        <button className="bg-black p-2 text-white rounded  mx-auto block">
          Add Product
        </button>
      </form>
    </div>
  );
}
