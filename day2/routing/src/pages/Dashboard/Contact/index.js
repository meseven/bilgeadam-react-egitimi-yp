import React from "react";
import { useFormik } from "formik";
import validationSchema from "./validations";

function Contact() {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
    isSubmitting,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      gender: "",
    },
    onSubmit: async (values, bag) => {
      await new Promise((r) => setTimeout(r, 1000));

      if (values.email === "test@test.com") {
        return bag.setFieldError("email", "This email already taken.");
      }

      console.log(values);
      bag.resetForm();
    },
    validationSchema,
  });

  return (
    <div>
      <h2>Contact</h2>

      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="isim"
            value={values.name}
            onChange={handleChange("name")}
            onBlur={handleBlur("name")}
            disabled={isSubmitting}
          />
          {errors.name && touched.name && (
            <div className="error">{errors.name}</div>
          )}
        </div>

        <div>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email"
            value={values.email}
            onChange={handleChange("email")}
            onBlur={handleBlur("email")}
            disabled={isSubmitting}
          />
          {errors.email && touched.email && (
            <div className="error">{errors.email}</div>
          )}
        </div>

        <div>
          <textarea
            placeholder="mesajınız"
            id="message"
            name="message"
            value={values.message}
            onChange={handleChange("message")}
            onBlur={handleBlur("message")}
            disabled={isSubmitting}
          />
          {errors.message && touched.message && (
            <div className="error">{errors.message}</div>
          )}
        </div>

        <div style={{ marginBottom: 10 }}>
          <select
            name="gender"
            id="gender"
            value={values.gender}
            onChange={handleChange("gender")}
            onBlur={handleBlur("gender")}
          >
            <option value="">Cinsiyet</option>
            <option value="erkek">Erkek</option>
            <option value="kadin">Kadın</option>
          </select>

          {errors.gender && touched.gender && (
            <div className="error">{errors.gender}</div>
          )}
        </div>

        <div>
          <button type="submit" disabled={isSubmitting}>
            Gönder
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
