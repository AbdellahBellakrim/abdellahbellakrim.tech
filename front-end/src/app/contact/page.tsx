"use client";
import { Button, Input, Textarea } from "@nextui-org/react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const form: any = useRef();

  return (
    <main className="w-full h-[calc(100vh-65px)] p-[10px] pt-[65px] flex justify-center items-center">
      <form
        ref={form}
        className="flex flex-col gap-6 w-full sm:w-1/2 h-fit"
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
        <h2 className="text-[24px] font-semibold tracking-[2.4px]">
          Contact Me
        </h2>
        <p className="-mt-6">
          Please contact me directly at{" "}
          <a
            className="hover:cursor-pointer underline"
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
            className="max-w-[500px]"
            isRequired
            name="user_name"
            id="name"
            autoComplete="some-name"
          />
        </label>
        <label htmlFor="email">
          <Input
            type="email"
            label="Email"
            placeholder="Enter your email"
            className="max-w-[500px]"
            isRequired
            name="user_email"
            id="email"
            autoComplete="some-email"
          />
        </label>
        <label htmlFor="message">
          <Textarea
            className="max-w-[500px]"
            isRequired
            size="lg"
            label="Message"
            placeholder="Enter your message"
            name="message"
            id="message"
          />
        </label>
        <Button color="primary" className="w-fit -mt-2" type="submit">
          Submit
        </Button>
      </form>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </main>
  );
}
