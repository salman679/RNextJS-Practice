import { Controller, useFieldArray, useForm } from "react-hook-form";
import Field from "../Field";
import FieldSet from "../FieldSet";
import NumberInput from "../NumberInput";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    name: "socials",
    control,
  });

  function submitForm(formData) {
    console.log(formData);
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <form action="" onSubmit={handleSubmit(submitForm)}>
        <FieldSet level={"Enter Your Details"}>
          <Field label={"Picture"} error={errors.picture}>
            <input
              {...register("picture", {
                required: "Picture is required.",
              })}
              type="file"
              name="picture"
              id="picture"
            />
          </Field>
          <Field label={"Full Name"} error={errors.fName}>
            <input
              {...register("fName", {
                required: "Full Name is required.",
              })}
              type="text"
              name="fName"
              placeholder="Enter Your Full Name"
              id="fName"
              className={`focus:outline-none p-2 border box-border w-full rounded-md ${
                errors.fName ? "border-red-600" : "border-gray-200"
              }`}
            />
          </Field>
          <Field label={"Age"} error={errors.age}>
            <Controller
              name="age"
              control={control}
              defaultValue={1}
              render={({ field: { ref, ...field } }) => (
                <NumberInput
                  id="age"
                  className={`focus:outline-none p-2 border box-border w-full rounded-md ${
                    errors.age ? "border-red-600" : "border-gray-200"
                  }`}
                  {...field}
                />
              )}
              rules={{
                max: {
                  value: 100,
                  message: "Age can be between 1 To 100",
                },
              }}
            />
            {/* <input
              {...register("age", {
                required: "Age is required",
                max: {
                  value: 100,
                  message: "Your Age Must be 1 To 100.",
                },
              })}
              type="number"
              name="age"
              placeholder="Enter your correct Age"
              id="age"
              className={`focus:outline-none p-2 border box-border w-full rounded-md ${
                errors.age ? "border-red-600" : "border-gray-200"
              }`}
            /> */}
          </Field>
          <Field label={"Email"} error={errors.email}>
            <input
              {...register("email", {
                required: "Email is required.",
              })}
              type="email"
              name="email"
              placeholder="Enter Your Email"
              id="email"
              className={`focus:outline-none p-2 border box-border w-full rounded-md ${
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
              className={`focus:outline-none p-2 border box-border w-full rounded-md ${
                errors.password ? "border-red-600" : "border-gray-200"
              }`}
            />
          </Field>
        </FieldSet>

        <FieldSet
          level={"Add Social Media Links"}
          another={
            <button
              onClick={(e) => (
                e.preventDefault(), append({ name: "", url: "" })
              )}
              className="border-2 pb-1 rounded-full size-6 flex items-center justify-center"
            >
              &#43;
            </button>
          }
        >
          {fields.map((field, index) => (
            <div
              className="flex justify-between items-center w-max"
              key={field.id}
            >
              <Field label={"Social Name"}>
                <input
                  className="focus:outline-none p-2 border box-border w-full rounded-md"
                  type="text"
                  {...register(`socials[${index}].name`)}
                  id={`socials[${index}].name`}
                  name={`socials[${index}].name`}
                />
              </Field>
              <Field label={"Social Url"}>
                <input
                  className="focus:outline-none p-2 border box-border w-full rounded-md"
                  type="text"
                  {...register(`socials[${index}].url`)}
                  id={`socials[${index}].url`}
                  name={`socials[${index}].url`}
                />
              </Field>
              <button
                className="mt-8 mr-2 text-2xl"
                onClick={() => remove(index)}
              >
                &#8722;
              </button>
            </div>
          ))}
        </FieldSet>
        <Field>
          <button className="pt-1 m-auto pb-2 px-3 text-white text-base cursor-pointer mt-2 rounded-md bg-purple-500">
            Register
          </button>
        </Field>
      </form>
    </div>
  );
}
