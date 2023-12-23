"use server";

export const sendMail = (formData: FormData) => {
  console.log(formData.get("email"));
  console.log(formData.get("message"));
};
