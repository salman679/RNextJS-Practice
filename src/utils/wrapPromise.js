export default function wrapPromise(promise) {
  let status = "pending";
  let responds;

  const suspender = promise.then(
    (res) => {
      status = "success";
      responds = res;
    },
    (err) => {
      status = "error";
      responds = err;
    }
  );

  const read = () => {
    switch (status) {
      case "pending":
        throw suspender;

      case "error":
        throw responds;

      default:
        return responds;
    }
  };

  return {
    read,
  };
}
