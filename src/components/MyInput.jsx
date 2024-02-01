/* eslint-disable react/display-name */
import { forwardRef, useImperativeHandle, useRef } from "react";

export const MyInput = forwardRef((props, ref) => {
  const realInputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    style: realInputRef.current.style,
  }));

  return <input {...props} ref={realInputRef} />;
});
