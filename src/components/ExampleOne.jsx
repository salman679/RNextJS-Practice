import { useState } from "react";

export default function ExampleOne() {
  const [firstName] = useState("Taylor");
  const [lastName] = useState("Swift");

  // 🔴 Avoid: redundant state and unnecessary Effect
  //   const [fullName, setFullName] = useState("");
  //   useEffect(() => {
  //     setFullName(firstName + " " + lastName);
  //   }, [firstName, lastName]);

  // ✅ Good: calculated during rendering
  const fullName = firstName + " " + lastName;

  return (
    <>
      <div>
        <h1>{fullName}</h1>
      </div>
    </>
  );
}
