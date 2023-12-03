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
import { FormEvent, useRef, useState } from "react";
import YupPassword from "yup-password";
import * as yup from "yup";
import { ValidationError } from "yup";
import {
  useAppActionsBaseState,
  useAppActionsUncontrolledForm,
  useAppSelector,
} from "../redux/hooks";
import { getSchema } from "../lib/schema";
import { Select } from "../components/UI/Select/Select";
import { IFormDataYup } from "../lib/types";
import { CountryCodes, notFoundImage } from "../lib/constants";
import { useNavigate } from "react-router-dom";

const UncontrolledForm = () => {
  YupPassword(yup);
  const redux = useAppSelector((state) => state.uncontrolledForm);
  const {
    setName,
    setAge,
    setEmail,
    setImage,
    setSex,
    setPassword,
    setCountry,
  } = useAppActionsUncontrolledForm();

  const navigate = useNavigate();

  const { allCountry } = useAppSelector((state) => state.baseState);
  const { addForm } = useAppActionsBaseState();

  const schema = getSchema(allCountry);

  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const sexMaleRef = useRef<HTMLInputElement>(null);
  const sexFemaleRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const acceptTermsRef = useRef<HTMLInputElement>(null);

  const [errors, setErrors] = useState<Record<string, string> | null>(null);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({});

    const valueFields: IFormDataYup = {
      name: nameRef.current?.value || "",
      age: Number(ageRef.current?.value),
      email: emailRef.current?.value || "",
      password: passwordRef.current?.value || "",
      passwordConfirm: passwordConfirmRef.current?.value || "",
      country: countryRef.current?.value as CountryCodes,
      sex: sexMaleRef.current?.checked ? "male" : "female",
      image: imageRef.current?.files
        ? imageRef.current?.files[0]
        : new File([""], ""),
      acceptTerms: acceptTermsRef.current?.checked as true,
    };
    try {
      schema.validateSync(valueFields, { abortEarly: false });

      const reader = new FileReader();
      reader.readAsDataURL(valueFields.image);
      reader.onloadend = function () {
        const image = reader.result?.toString();
        setName(valueFields.name);
        setAge(Number(valueFields.age));
        setEmail(valueFields.email);
        setImage(image || notFoundImage);
        setSex(valueFields.sex);
        setPassword(valueFields.password);
        setCountry(valueFields.country);
        addForm({
          name: valueFields.name,
          age: valueFields.age,
          email: valueFields.email,
          image: image || notFoundImage,
          sex: valueFields.sex,
          password: valueFields.password,
          country: valueFields.country,
        });
        navigate("/");
      };
    } catch (error) {
      interface ErrorsMap {
        [key: string]: string;
      }
      if (error instanceof ValidationError) {
        const errorsMap = error.inner.reduce((res: ErrorsMap, er) => {
          const nameInput = er.path;
          if (nameInput) res[nameInput] = er.message;
          return res;
        }, {});
        setErrors(errorsMap);
      }
    }
  };
  return (
    <>
      <h1>Uncontrolled Form</h1>
      <Form onSubmit={onSubmit}>
        <Label htmlFor="name">
          <NameInput> Name: </NameInput>
          <Input placeholder={redux.name} id="name" type="text" ref={nameRef} />
          <ErrorMessage>{errors?.name}</ErrorMessage>
        </Label>

        <Label htmlFor="age">
          <NameInput> Age: </NameInput>
          <Input
            id="age"
            type="number"
            placeholder={redux.age.toString()}
            ref={ageRef}
          />
          <ErrorMessage>{errors?.age}</ErrorMessage>
        </Label>

        <Label htmlFor="email">
          <NameInput> Email: </NameInput>
          <Input
            id="email"
            type="email"
            placeholder={redux.email}
            ref={emailRef}
          />
          <ErrorMessage>{errors?.email}</ErrorMessage>
        </Label>

        <Label htmlFor="password">
          <NameInput> Password: </NameInput>
          <Input
            id="password"
            type="password"
            placeholder={redux.password}
            ref={passwordRef}
          />
          <ErrorMessage>{errors?.password}</ErrorMessage>
        </Label>

        <Label htmlFor="passwordConfirm">
          <NameInput> Confirm Password: </NameInput>
          <Input
            id="passwordConfirm"
            type="password"
            placeholder={redux.password}
            ref={passwordConfirmRef}
          />
          <ErrorMessage>{errors?.passwordConfirm}</ErrorMessage>
        </Label>

        <SelectContainer>
          <Select
            label="Country:"
            list={allCountry}
            setRef={countryRef}
            selected={redux.country}
          />
          <ErrorMessage>{errors?.country}</ErrorMessage>
        </SelectContainer>

        <Label htmlFor="picture">
          <NameInput> Picture: </NameInput>
          <Input id="picture" type="file" ref={imageRef} />
          <ErrorMessage>{errors?.image}</ErrorMessage>
        </Label>

        <SexBlock>
          <SexBlockName> Sex: </SexBlockName>
          <SexBlockContent>
            <SexLabel htmlFor="sex-male">
              Male
              <Input
                defaultChecked
                name="sex"
                type="radio"
                value="male"
                id="sex-male"
                ref={sexMaleRef}
              />
            </SexLabel>
            <SexLabel htmlFor="sex-female">
              Female
              <Input
                name="sex"
                type="radio"
                value="female"
                id="sex-female"
                ref={sexFemaleRef}
              />
            </SexLabel>
            <ErrorMessage>{errors?.sex}</ErrorMessage>
          </SexBlockContent>
        </SexBlock>

        <Label htmlFor="acceptTerms">
          <NameInput> Terms & Conditions: </NameInput>
          <Input id="acceptTerms" type="checkbox" ref={acceptTermsRef} />
          <ErrorMessage>{errors?.acceptTerms}</ErrorMessage>
        </Label>

        <Submit type="submit" value="Save to redux" />
      </Form>
    </>
  );
};

export default UncontrolledForm;
