import { useEffect, useRef } from "react";

export default function Dialog() {
  const dialogRef = useRef();

  console.log("dialoguing");

  useEffect(() => {
    const dialog = dialogRef.current;

    dialog.showModal();

    return () => {
      dialog.close();
    };
  });

  return <dialog ref={dialogRef}>This is Dialog tag</dialog>;
}
