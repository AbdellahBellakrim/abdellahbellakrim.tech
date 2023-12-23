export type skill = {
  id: string;
  header: string;
  content: string;
  banner: string;
};

export type project = {
  id: string;
  banner: string;
  header: string;
  link: string;
  tech: string[];
};
export const skills: skill[] = [
  {
    id: "001",
    header: "Front-end Development",
    content:
      "Skilled in JS, TS, React.js, Next.js, CSS, Tailwindcss. Crafts stunning, responsive, animated designs with finesse.",
    banner: "front-end-dev-icon.svg",
  },
  {
    id: "002",
    header: "Back-end and DevOps",
    content:
      "Skilled in Node.js, Express.js, Nest.js, PostgreSQL, Prisma, Docker, Shell scripting; crafts secure, optimized backend code.",
    banner: "back-end-dev-icon.png",
  },
  {
    id: "003",
    header: "low-level programming",
    content:
      "Exceptional low-level programming skills in C/C++. Problem solver adept at practicing data structures for optimal solutions.",
    banner: "icons8-c++-48.png",
  },
  {
    id: "004",
    header: "Innovative-solutions",
    content:
      "Mastering tech trends, I craft cutting-edge solutions with efficiency, blending innovation and precision in code.",
    banner: "icons8-innovation-48.png",
  },
];
export const projects: project[] = [
  {
    id: "001",
    banner: "fdf42.png",
    header: "FDF 42",
    link: "https://github.com/AbdellahBellakrim/fdf",
    tech: ["C", "Makefile", "Minilibx", "algorithms"],
  },
  {
    id: "002",
    banner: "pipex42.png",
    header: "PIPEX 42",
    link: "https://github.com/AbdellahBellakrim/pipex",
    tech: ["C", "Makefile", "algorithms", "Unix"],
  },
  {
    id: "003",
    banner: "pushswap42.png",
    header: "PUSH SWAP 42",
    link: "https://github.com/AbdellahBellakrim/push_swap-42",
    tech: ["C", "Makefile", "algorithms"],
  },
  {
    id: "004",
    banner: "minishell42.png",
    header: "MINISHELL 42",
    link: "https://github.com/AbdellahBellakrim/minishell_42",
    tech: ["C", "Makefile", "algorithms", "Unix", "Bash"],
  },
  {
    id: "005",
    banner: "philosophers42.png",
    header: "PHILOSOPHERS 42",
    link: "https://github.com/AbdellahBellakrim/philosophers_42",
    tech: ["C", "Makefile", "algorithms"],
  },
  {
    id: "006",
    banner: "cub3d.jpg",
    header: "CUBE3D 42",
    link: "https://github.com/mmasstou/cub3d",
    tech: ["C", "Makefile", "Minilibx", "algorithms"],
  },
  {
    id: "007",
    banner: "irc.jpg",
    header: "FT_IRC 42",
    link: "https://github.com/The-Intruder/Internet-Relay-Chat-Server-aka-ft_irc",
    tech: ["C", "C++", "Makefile", "algorithms", "TCP/IP", "LimeChat"],
  },
  {
    id: "008",
    banner: "inception.png",
    header: "INCEPTION 42",
    link: "https://github.com/AbdellahBellakrim/inception_42",
    tech: [
      "Docker",
      "Bash",
      "DockerCompose",
      "Nginx",
      "MariaDb",
      "WordPress",
      "Redis",
      "Adminer",
      "Cadvisor",
    ],
  },
  {
    id: "009",
    banner: "pong.jpeg",
    header: "FT_TRANSCENDENCE 42",
    link: "https://github.com/soufiane-amt/ft_transcendance",
    tech: [
      "TS",
      "Reactjs",
      "Nextjs",
      "Css",
      "Tailwindcss",
      "Prisma",
      "Nestjs",
      "PostgreSQL",
    ],
  },
];
