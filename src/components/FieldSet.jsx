// eslint-disable-next-line react/prop-types
export default function FieldSet({ level, children, another }) {
  return (
    <fieldset className="m-2 border-none p-0">
      <div className="flex items-center justify-center">
        {level && (
          <legend className="text-base font-bold mr-2 ms-0 flex items-center justify-between">
            {level}
          </legend>
        )}
        {another && another}
      </div>
      <div className="flex flex-col justify-between self-start">{children}</div>
    </fieldset>
  );
}
