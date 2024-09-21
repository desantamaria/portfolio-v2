export const navItems = [
  { name: "Home", link: "#" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full opacity-40",
    titleClassName: "justify-end",
    img: "/b1.jpg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently a fellow at Headstarter",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-7 bottom-10 md:w-96 w-60 rounded-lg",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/headstarter-acceptance.jpg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "AI Rate my Professor Assistant",
    des: "Implemented a web scraper that automatically extracts data from Rate my Professor and upsert to a Pinecone index, integrated with a RAG pipeline using OpenAI GPT-4o to get up-to-date answers to user queries",
    img: "/p1.png",
    iconLists: ["/next.svg", "/jv.png", "/openai.png", "pinecone.png"],
    link: "https://github.com/desantamaria/rmp-rag",
  },
  {
    id: 2,
    title: "AI Flashcard SaaS",
    des: "Collaborated with 3 Fellows to build a SaaS product that generates dynamic flashcards based on any topic using the Llama 3.1 LLM via the Groq API, integrated a paywall and custom pricing plans using the Stripe API",
    img: "/p2.png",
    iconLists: ["/next.svg", "/jv.png", "/openai.png", "/stripe.jpeg"],
    link: "https://github.com/iho21/ai-flashcards-stripe",
  },
  {
    id: 3,
    title: "Sentinel Chat",
    des: "End-to-end encryption for live peer-to-peer communication",
    img: "/p3.png",
    iconLists: ["/re.svg", "/jv.png", "/py.png", "/flask.png"],
    link: "https://github.com/Sentinel-Chat",
  },
  {
    id: 4,
    title: "Netbooks",
    des: "A Service to upload and purchase Book listings hosted on the cloud.",
    img: "/p4.png",
    iconLists: ["/re.svg", "/jv.png", "/aws.png", "/graphql.png"],
    link: "https://github.com/desantamaria/netbooks",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer Fellow",
    desc: "Built and deployed 5 AI projects in 5 weeks using React JS, Next.js, Firebase, Clerk, and Vercel, following agile methodologies with weekly sprints and incorporated CI/CD practices for iterative deployment",
    className: "md:col-span-2",
    thumbnail: "/exp3.png",
  },
  {
    id: 2,
    title: "Supervisor",
    desc: "Developed excellent communication skills through team member follow-up and presentations and mentored and trained new leads to improved the future of the workplace",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.png",
  },
  //   {
  //     id: 3,
  //     title: "Freelance App Dev Project",
  //     desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //     className: "md:col-span-2", // change to md:col-span-2
  //     thumbnail: "/exp1.svg",
  //   },
  //   {
  //     id: 4,
  //     title: "Lead Frontend Developer",
  //     desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //     className: "md:col-span-2",
  //     thumbnail: "/exp4.svg",
  //   },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/desantamaria",
  },
  //   {
  //     id: 2,
  //     img: "/twit.svg",
  //     link: "https://www.linkedin.com/in/desantama/",
  //   },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/desantama/",
  },
];
