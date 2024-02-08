import useFormInput from "../hooks/useFormInput";

export default function FormInput() {
  const firstNamePage = useFormInput("mary");
  const lastNamePage = useFormInput("ami");

  return (
    <>
      <label>
        First name:
        <input value={firstNamePage.value} onChange={firstNamePage.onChange} />
      </label>
      <br />
      <br />
      <label>
        Last name:
        <input value={lastNamePage.value} onChange={lastNamePage.onChange} />
      </label>
      <p>
        <b>
          Good morning {firstNamePage.value} {lastNamePage.value}.
        </b>
      </p>
    </>
  );
}
