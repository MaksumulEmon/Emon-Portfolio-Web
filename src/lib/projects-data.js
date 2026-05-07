import pro1 from "../assets/pro1.png"
import pro2 from "../assets/pro2.png"
import pro3 from "../assets/pro3.png"
import pro4 from "../assets/pro4.png"

export const projects = [
  {
    id: "tiles-gallery",
    title: "Tiles-Gallery",
    desc: "A modern Next.js Tiles Gallery web application featuring dynamic image grids, smooth transitions, and high-performance rendering.",
    tags: ["Next.js", "Tailwind CSS"],
    image: pro1,
    live: "https://tiles-gallery-three.vercel.app/",
    github: "https://github.com/MaksumulEmon/Tiles-Gallery",
    gradient: "from-violet-500/20 to-blue-500/20",
    stack: ["Next.js", "React", "TailwindCSS", "Framer Motion", "Lucide React"],
    challenges: [
      "Implementing a responsive Masonry-style grid that maintains performance with high-resolution images.",
      "Synchronizing animations across multiple components using Framer Motion's Layout API.",
      "Optimizing image loading times using Next.js Image component and priority flags."
    ],
    improvements: [
      "Integrate a CMS (like Sanity or Contentful) for easier content management.",
      "Add support for video tiles and interactive 3D elements.",
      "Implement advanced filtering and search capabilities."
    ]
  },
  {
    id: "keen-keeper",
    title: "Keen-Keeper",
    desc: "KeenKeeper is a modern and intuitive friend tracking application that helps users monitor, manage, and stay connected with their friends' activities in real time.",
    tags: ["React.js", "Tailwind CSS", "API"],
    image: pro2,
    live: "https://b13-a07-keen-keeper.vercel.app/",
    github: "https://github.com/MaksumulEmon/Keen-Keeper",
    gradient: "from-blue-500/20 to-emerald-500/20",
    stack: ["React.js", "Tailwind CSS", "DaisyUI", "REST API", "Context API"],
    challenges: [
      "Managing complex state for real-time activity tracking and user categorization.",
      "Designing a clean and intuitive UX for managing large lists of contacts.",
      "Handling API rate limits and implementing efficient data fetching patterns."
    ],
    improvements: [
      "Add real-time notifications using WebSockets or Firebase.",
      "Implement a mobile-first native app version using React Native.",
      "Incorporate analytics to track user interaction patterns."
    ]
  },
  {
    id: "digitools-platform",
    title: "DigiTools-Platform",
    desc: "A responsive and feature-rich web platform that allows users to browse and buy subscriptions for various digital tools and software.",
    tags: ["React.js", "Tailwind CSS", "ES6+"],
    image: pro3,
    live: "https://digitools-a06.vercel.app/",
    github: "https://github.com/MaksumulEmon/digitools-platform",
    gradient: "from-orange-500/20 to-red-500/20",
    stack: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "Local Storage"],
    challenges: [
      "Creating a secure and reliable checkout flow simulation without a backend.",
      "Implementing a dynamic filtering system for diverse tool categories.",
      "Ensuring consistent design across various screen sizes using Tailwind's responsive utilities."
    ],
    improvements: [
      "Implement a robust backend with Node.js and MongoDB for user accounts.",
      "Integrate Stripe for real payment processing.",
      "Add a user review and rating system for the digital tools."
    ]
  },
  {
    id: "github-issue-tracker",
    title: "Github-Issue-Tracker",
    desc: "A lightweight GitHub-style issue tracker designed to organize tasks, report bugs, and streamline team collaboration.",
    tags: ["React.js", "Tailwind CSS", "ES6+"],
    image: pro4,
    live: "https://github-issue-tracker-a05.netlify.app/",
    github: "https://github.com/MaksumulEmon/Github-Issue-Tracker",
    gradient: "from-orange-500/20 to-red-500/20",
    stack: ["React.js", "Tailwind CSS", "JavaScript (ES6+)", "Local Storage"],
    challenges: [
      "Mimicking the GitHub UI/UX accurately using only custom CSS and Tailwind.",
      "Implementing efficient state management for issue tracking and status updates.",
      "Building a responsive sidebar and navigation system for seamless mobile use."
    ],
    improvements: [
      "Connect to the official GitHub API to fetch real repository issues.",
      "Add markdown support for issue descriptions and comments.",
      "Implement drag-and-drop functionality for task status changes (Kanban style)."
    ]
  }
];
