import { useForm, SubmitHandler, Controller } from "react-hook-form";
import YupPassword from "yup-password";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChangeEvent } from "react";

import { IFormDataYup } from "../lib/types";
import { notFoundImage } from "../lib/constants";

import { Select } from "../components/UI/Select/Select";
import { useAppActionsHookForm, useAppSelector } from "../redux/hooks";

const ReactHookForm = () => {
  YupPassword(yup);
  const redux = useAppSelector((state) => state.reactHookForm);
  const {
    setName,
    setAge,
    setEmail,
    setImage,
    setSex,
    setPassword,
    setCountry,
  } = useAppActionsHookForm();
  const { allCountry } = useAppSelector((state) => state.baseState);

  const MAX_FILE_SIZE = 1024000;

  const validFileExtensions = ["image/jpeg", "image/png"];

  const schema = yup.object().shape({
    name: yup
      .string()
      .required()
      .test(
        "firstLetterUppercase",
        "The first letter must be capitalized",
        (value) => /^[A-ZА-ЯЁ]/.test(value)
      ),
    age: yup
      .number()
      .transform((value) => (Number.isNaN(value) ? null : value))
      .nullable()
      .min(1)
      .required(),
    email: yup.string().email().required(),
    password: yup
      .string()
      .password()
      .min(0)
      .minNumbers(1)
      .minLowercase(1)
      .minUppercase(1)
      .minSymbols(1)
      .required(),
    passwordConfirmation: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required(),
    sex: yup
      .string()
      .oneOf(["male", "female"], "Select male or female")
      .required(),
    country: yup
      .string()
      .required()
      .oneOf(allCountry, "Select a country from the list"),
    image: yup
      .mixed<File>()
      .required()
      .test(
        "fileSize",
        "File Size is too large",
        (file) => file.size <= MAX_FILE_SIZE
      )
      .test("fileType", "Unsupported File Format", (file: File) =>
        validFileExtensions.includes(file.type)
      ),
    acceptTerms: yup.boolean().isTrue().required(),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormDataYup>({
    mode: "onBlur",
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<IFormDataYup> = (data) => {
    const reader = new FileReader();
    reader.readAsDataURL(data.image);
    reader.onloadend = function () {
      const image = reader.result?.toString();
      const { name, age, email, password, sex, country } = data;
      setName(name);
      setAge(age);
      setEmail(email);
      setPassword(password);
      setSex(sex);
      setImage(image || notFoundImage);
      setCountry(country);
      reset();
    };
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">
        <span> Name </span>
        <input id="name" placeholder={redux.name} {...register("name")} />
      </label>
      <p>{errors.name?.message}</p>

      <label htmlFor="age">
        <span> Age </span>
        <input
          id="age"
          type="number"
          placeholder={redux.age.toString()}
          {...register("age")}
        />
      </label>
      <p>{errors.age?.message}</p>

      <label htmlFor="email">
        <span> Email </span>
        <input
          id="email"
          type="email"
          placeholder={redux.email}
          {...register("email")}
        />
      </label>
      <p>{errors.email?.message}</p>

      <label htmlFor="password">
        <span> Password </span>
        <input
          id="password"
          type="password"
          placeholder={redux.password}
          {...register("password")}
        />
      </label>
      <p>{errors.password?.message}</p>

      <label htmlFor="confirmPassword">
        <span> Confirm Password </span>
        <input
          id="confirmPassword"
          type="password"
          placeholder={redux.password}
          {...register("passwordConfirmation")}
        />
      </label>
      <p>{errors.passwordConfirmation?.message}</p>

      <div>
        <span> Sex </span>
        <label htmlFor="sex-male">
          <input type="radio" value="male" id="sex-male" {...register("sex")} />
          Male
        </label>
        <label htmlFor="sex-female">
          <input
            type="radio"
            value={"female"}
            id="sex-female"
            {...register("sex")}
          />
          Female
        </label>
      </div>
      <p>{errors.sex?.message}</p>

      <Controller
        name="image"
        control={control}
        render={({ field }) => (
          <label htmlFor="picture">
            <span> Picture </span>
            <input
              id="picture"
              type="file"
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                const files = e.target.files;
                if (files?.length) field.onChange(files[0]);
              }}
            />
          </label>
        )}
      />
      <p>{errors.image?.message}</p>

      <Controller
        control={control}
        name="country"
        defaultValue={redux.country}
        render={({ field: { onChange } }) => (
          <Select
            label="Country"
            list={allCountry}
            onChange={onChange}
            selected={redux.country}
          />
        )}
      />
      <p>{errors.country?.message}</p>

      <label htmlFor="acceptTerms">
        <span> Terms & Conditions </span>
        <input id="acceptTerms" type="checkbox" {...register("acceptTerms")} />
      </label>
      <p>{errors.acceptTerms?.message}</p>

      <input type="submit" />
    </form>
  );
};

export default ReactHookForm;
