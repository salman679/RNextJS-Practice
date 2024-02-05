export default function Example8({ data }) {
  // 🔴 Avoid: The onFetch handler runs too late
  // useEffect(() => {
  //   if (data) {
  //     onFetch(data);
  //   }
  // }, [data, onFetch]);

  return <div>Example 8: {data}</div>;
}
