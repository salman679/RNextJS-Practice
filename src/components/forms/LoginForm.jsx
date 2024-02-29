import { useForm } from "react-hook-form";
import Field from "../Field";
import FieldSet from "../FieldSet";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  console.log(errors);
  function submitForm(formData) {
    console.log(formData);

    const user = { email: "Sbinazhar671@gmail.com", password: "Salman671" };

    const found =
      formData.email === user.email && formData.password === user.password;

    if (!found) {
      setError("root.random", {
        message: `user with email ${formData.email} is not found. `,
        type: "random",
      });
    }
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <form action="" onSubmit={handleSubmit(submitForm)}>
        <FieldSet level={"Enter Form Details"}>
          <Field label={"Email"} error={errors.email}>
            <input
              {...register("email", {
                required: "Email is required.",
              })}
              type="email"
              name="email"
              placeholder="Enter Your Email"
              id="email"
              className={`focus:outline-none p-2 border box-border w-[300px] rounded-md ${
                errors.email ? "border-red-600" : "border-gray-200"
              }`}
            />
          </Field>
          <Field label={"Password"} error={errors.password}>
            <input
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 8,
                  message: "Your password must be at least 8 character.",
                },
              })}
              type="password"
              name="password"
              placeholder="Enter Your Password"
              id="password"
              className={`focus:outline-none p-2 border box-border w-[300px] rounded-md ${
                errors.password ? "border-red-600" : "border-gray-200"
              }`}
            />
          </Field>
        </FieldSet>
        <div>{errors?.root?.random?.message}</div>
        <Field>
          <button className="pt-1 m-auto pb-2 px-3 text-white text-base cursor-pointer mt-2 rounded-md bg-purple-500">
            Login
          </button>
        </Field>
      </form>
    </div>
  );
}
