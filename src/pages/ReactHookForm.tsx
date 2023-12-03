import {
  ErrorMessage,
  Form,
  Input,
  Label,
  NameInput,
  SelectContainer,
  SexBlock,
  SexBlockContent,
  SexBlockName,
  SexLabel,
  Submit,
} from "../assets/formStyles";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import YupPassword from "yup-password";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChangeEvent } from "react";

import { IFormDataYup } from "../lib/types";
import { notFoundImage } from "../lib/constants";

import { Select } from "../components/UI/Select/Select";
import {
  useAppActionsBaseState,
  useAppActionsHookForm,
  useAppSelector,
} from "../redux/hooks";
import { getSchema } from "../lib/schema";
import { ControllerRenderProps } from "react-hook-form/dist/types/controller";
import { useNavigate } from "react-router-dom";

const ReactHookForm = () => {
  YupPassword(yup);
  const redux = useAppSelector((state) => state.reactHookForm);
  const { allCountry } = useAppSelector((state) => state.baseState);
  const {
    setName,
    setAge,
    setEmail,
    setImage,
    setSex,
    setPassword,
    setCountry,
  } = useAppActionsHookForm();

  const navigate = useNavigate();

  const { addForm } = useAppActionsBaseState();
  const schema = getSchema(allCountry);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
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
      addForm({
        name,
        age,
        email,
        sex,
        password,
        country,
        image: image || notFoundImage,
      });
      reset();
      navigate("/");
    };
  };

  const onChangeImg = (
    e: ChangeEvent<HTMLInputElement>,
    field: ControllerRenderProps<IFormDataYup, "image">
  ) => {
    const files = e.target.files;
    if (files?.length) return field.onChange(files[0]);
    return null;
  };

  return (
    <>
      <h1>React Hook Form</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="name">
          <NameInput> Name: </NameInput>
          <Input id="name" placeholder={redux.name} {...register("name")} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </Label>

        <Label htmlFor="age">
          <NameInput> Age: </NameInput>
          <Input
            id="age"
            type="number"
            placeholder={redux.age.toString()}
            {...register("age")}
          />
          <ErrorMessage>{errors.age?.message}</ErrorMessage>
        </Label>

        <Label htmlFor="email">
          <NameInput> Email: </NameInput>
          <Input
            id="email"
            type="email"
            placeholder={redux.email}
            {...register("email")}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </Label>

        <Label htmlFor="password">
          <NameInput> Password: </NameInput>
          <Input
            id="password"
            type="password"
            placeholder={redux.password}
            {...register("password")}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </Label>

        <Label htmlFor="passwordConfirm">
          <NameInput> Confirm Password: </NameInput>
          <Input
            id="passwordConfirm"
            type="password"
            placeholder={redux.password}
            {...register("passwordConfirm")}
          />
          <ErrorMessage>{errors.passwordConfirm?.message}</ErrorMessage>
        </Label>

        <Controller
          control={control}
          name="country"
          defaultValue={redux.country}
          render={({ field: { onChange } }) => (
            <SelectContainer>
              <Select
                label="Country:"
                list={allCountry}
                onChange={onChange}
                selected={redux.country}
              />
              <ErrorMessage>{errors.country?.message}</ErrorMessage>
            </SelectContainer>
          )}
        />

        <Controller
          name="image"
          control={control}
          render={({ field }) => (
            <Label htmlFor="picture">
              <NameInput> Picture: </NameInput>
              <Input
                id="picture"
                type="file"
                onBlur={field.onBlur}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  onChangeImg(e, field)
                }
              />
              <ErrorMessage>{errors.image?.message}</ErrorMessage>
            </Label>
          )}
        />

        <SexBlock>
          <SexBlockName> Sex: </SexBlockName>
          <SexBlockContent>
            <SexLabel htmlFor="sex-male">
              Male
              <Input
                type="radio"
                value="male"
                id="sex-male"
                checked
                {...register("sex")}
              />
            </SexLabel>
            <SexLabel htmlFor="sex-female">
              Female
              <Input
                type="radio"
                value={"female"}
                id="sex-female"
                {...register("sex")}
              />
            </SexLabel>
            <ErrorMessage>{errors.sex?.message}</ErrorMessage>
          </SexBlockContent>
        </SexBlock>

        <Label htmlFor="acceptTerms">
          <NameInput> Terms & Conditions: </NameInput>
          <Input
            id="acceptTerms"
            type="checkbox"
            {...register("acceptTerms")}
          />
          <ErrorMessage>{errors.acceptTerms?.message}</ErrorMessage>
        </Label>

        <Submit disabled={!isValid} type="submit" value="Save to redux" />
      </Form>
    </>
  );
};

export default ReactHookForm;
