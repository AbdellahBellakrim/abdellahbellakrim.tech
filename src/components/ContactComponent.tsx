"use client";
import { Button, Input, Textarea } from "@nextui-org/react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function ContactComponent() {
  const form: any = useRef();

  return (
    <form
      ref={form}
      className="flex flex-col gap-6 w-full"
      onSubmit={(event: any) => {
        event.preventDefault();
        emailjs
          .sendForm(
            `${process.env.NEXT_PUBLIC_API_SERVICE_ID}`,
            `${process.env.NEXT_PUBLIC_API_TEMPLATE_ID}`,
            form.current,
            `${process.env.NEXT_PUBLIC_API_PUBLIC_KEY}`
          )
          .then(
            () => {
              form.current.reset();
              toast.success("Email sent!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            },
            () => {
              toast.error("Please try again!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }
          );
      }}
    >
      <h2 className="text-xl font-semibold  text-white">Contact Me:</h2>
      <p className="overflow-hidden">
        Please contact me directly at{" "}
        <a
          className="hover:cursor-pointer underline text-white hover:opacity-90"
          href={`mailto:${process.env.NEXT_PUBLIC_API_EMAIL}`}
        >
          {`${process.env.NEXT_PUBLIC_API_EMAIL}`}
        </a>{" "}
        or through this form.
      </p>
      <label htmlFor="name">
        <Input
          type="text"
          label="Name"
          placeholder="Enter your name"
          isRequired
          name="user_name"
          id="name"
          variant="underlined"
          autoComplete="some-name"
        />
      </label>
      <label htmlFor="email">
        <Input
          type="email"
          label="Email"
          placeholder="Enter your email"
          isRequired
          name="user_email"
          id="email"
          autoComplete="some-email"
          variant="underlined"
        />
      </label>
      <label htmlFor="message">
        <Textarea
          isRequired
          size="lg"
          label="Message"
          placeholder="Enter your message"
          name="message"
          id="message"
          variant="underlined"
        />
      </label>
      <Button color="primary" className="w-fit -mt-2 rounded-md" type="submit">
        Submit
      </Button>
    </form>
  );
}

export default ContactComponent;
