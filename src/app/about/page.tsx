"use client";

export default function Home() {
  return (
    <div className="w-full min-h-[calc(100vh-80px-65px)] px-[25px] max-w-[920px]  mx-auto pt-14 text-white ">
      <h1 className=" text-3xl font-semibold my-4">
        Hello again, I'm Abdellah 👋🏼
      </h1>
      <div className=" flex flex-col text-lg min-h-[300px] gap-6">
        <p>
          Born in 2002 in Morocco. I'm currently a software engineering student
          at{" "}
          <a
            className="text-blue-500 hover:cursor-pointer hover:opacity-80"
            target="_blank"
            href="https://www.1337.ma/"
          >
            1337 coding school{" "}
          </a>{" "}
          part of the{" "}
          <a
            className="text-blue-500 hover:cursor-pointer hover:opacity-80"
            target="_blank"
            href="https://www.42network.org/"
          >
            {" "}
            42 network
          </a>
          . Right now, I'm a full-stack developer at Unibitsoft in Casablanca,
          using the .NET platform and ReactJS.
        </p>
        <p>
          My gig involves solving problems and crafting cool, modern solutions.
          When I'm not coding or working on a project, you'll catch me soaking
          up new knowledge through
          <a
            className="text-blue-500 hover:cursor-pointer hover:opacity-80"
            target="_blank"
            href=""
          >
            {" "}
            reading
          </a>{" "}
          or jotting down{" "}
          <a
            className="text-blue-500 hover:cursor-pointer hover:opacity-80"
            target="_blank"
            href=""
          >
            my thoughts,
          </a>{" "}
          watching anime or sporting as well {";)"}
        </p>
        <div>
          <h4 className="font-semibold text-xl my-2">Life</h4>
          <p>
            In my past life, I was a high school student with a burning
            curiosity to make life easier for others. That led me to the world
            of programming, starting with C. The 1337 coding school was my
            game-changer, where I honed skills in various IT areas like C and
            C++, networking, DevOps, and web development. Now, I'm all about web
            development and creating snazzy solutions for folks using the JS
            ecosystem {"(react next node express nest...)"}. Oh, and 2024 is the
            year I'm exploring the wonders of .NET and c#.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-xl my-2">Palybook</h4>
          <p>
            I've even put together a{" "}
            <a
              className="text-blue-500 hover:cursor-pointer hover:opacity-80"
              target="_blank"
              href=""
            >
              playbook
            </a>{" "}
            on how to team up with me. It spills the beans on my strengths,
            weaknesses, and the principles I live by. Let's make some tech
            magic!
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-xl my-2">Let's connect</h4>
          <p>
            For quick communication,{" "}
            <a
              className="text-blue-500 hover:cursor-pointer hover:opacity-80"
              target="_blank"
              href=""
            >
              email
            </a>{" "}
            is best. You can also reach me easily on{" "}
            <a
              className="text-blue-500 hover:cursor-pointer hover:opacity-80"
              target="_blank"
              href=""
            >
              Twitter
            </a>{" "}
            and{" "}
            <a
              className="text-blue-500 hover:cursor-pointer hover:opacity-80"
              target="_blank"
              href=""
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
