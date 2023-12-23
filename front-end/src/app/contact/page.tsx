import { Button, Input, Textarea } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="w-full h-[calc(100vh-65px)] p-[10px] pt-[65px] flex justify-center items-center">
      <form
        // action={async (FormData) => {
        //   console.log(FormData);
        // }}
        className="flex flex-col gap-6 w-full sm:w-1/2 "
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
        <Input
          type="email"
          label="Email"
          placeholder="Enter your email"
          className="max-w-[500px]"
          required
        />
        <Textarea
          required
          label="Message"
          placeholder="Enter your message"
          className="max-w-[500px]"
        />
        <Button color="primary" variant="shadow" className="w-fit -mt-2">
          Submit
        </Button>
      </form>
    </main>
  );
}
