import wrapPromise from "../utils/wrapPromise";

export default function FetchPost(url) {
  const response = fetch(url).then((res) => res.json());
  return wrapPromise(response);
}
