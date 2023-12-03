import * as yup from "yup";
import { CountryCodes } from "./constants";

const MAX_FILE_SIZE = 1024000;
const validFileExtensions = ["image/jpeg", "image/png"];

export const getSchema = (countries: CountryCodes[]) =>
  yup.object().shape({
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
    passwordConfirm: yup
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
      .oneOf(countries, "Select a country from the list"),
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
