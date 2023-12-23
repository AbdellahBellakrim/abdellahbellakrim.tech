"use client";
import { sendMail } from "@/actions/sendEmail";
import { Button, Input, Textarea } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="w-full h-[calc(100vh-65px)] p-[10px] pt-[65px] flex justify-center items-center">
      <form
        className="flex flex-col gap-6 w-full sm:w-1/2 h-fit"
        onSubmit={async (event: any) => {
          event.preventDefault();
          const formData = new FormData(event.target);
          await sendMail(formData);
        }}
      >
        <h2 className="text-[24px] font-semibold tracking-[2.4px]">
          Contact Me
        </h2>
        <p className="-mt-6">
          Please contact me directly at{" "}
          <a
            className="hover:cursor-pointer underline"
            href="mailto:abdellah.bellakrim.tech@gmail.com"
          >
            abdellah.bellakrim.tech@gmail.com
          </a>{" "}
          or through this form.
        </p>
        <label htmlFor="email">
          <Input
            type="email"
            label="Email"
            placeholder="Enter your email"
            className="max-w-[500px]"
            isRequired
            name="email"
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
    </main>
  );
}
