import { object, string } from "yup";

const errors = {
  required: "Bu alan zorunludur.",
  email: "Geçerli bir email adresi belirtin.",
  min: "En az 5 karakter girmelisiniz.",
};

const validations = object({
  name: string().required(errors.required),
  email: string().email(errors.email).required(errors.required),
  message: string().min(5, errors.min).required(errors.required),
  gender: string().required(errors.required),
});

export default validations;
