import IMG_DASHBOARD from "../assets/projects/Dashboard.png";
import IMG_OSHOP from "../assets/projects/Oshop.png";
import IMG_BATTLESHIP from "../assets/projects/Battleship.png";

const DASHBOARD = {
  imgURL: IMG_DASHBOARD,
  header: "Interactive dashboard",
  subheader: "Latest",
  features: [
    "Interactive",
    "API data fetching",
    "Light / Dark mode",
    "Responsive",
    "Sort panel",
    "Items quantity selector",
    "Pagination",
  ],
  technologies: ["React", "Tailwind CSS", "Chart JS", "Vite"],
  description:
    "Dynamic dashboard developed with React and Tailwind CSS, fetching user data from an API and showcasing it through interactive charts powered by Chart.js. It includes features such as a dark/light mode, sorting options and a pagination panel.",
  links: {
    website: "https://dashboard-users-registration.vercel.app/",
    github: "https://github.com/MMadlos/dashboard-users-registration",
  },
};

const OSHOP = {
  imgURL: IMG_OSHOP,
  header: "Online shop simulator",
  subheader: "Featured",
  features: [
    "Single Page Aplication",
    "API data fetching",
    "Routing",
    "Responsive",
    "Recommended products",
    "Sort options",
    "Edit cart",
    "Cart summary",
  ],
  technologies: [
    "React",
    "Tailwind CSS",
    "React Router",
    "React Testing Library",
    "Vite",
    "Vitest",
  ],
  description:
    "Single Page Application (SPA) that uses an API to get a product list. It includes functionalities such as filtering, sorting, searching, adding products to the cart, editing the cart, and checkout.",
  links: {
    website: "https://online-shop-brown-two.vercel.app/",
    github: "https://github.com/MMadlos/online-shop",
  },
};

const BATTLESHIP = {
  imgURL: IMG_BATTLESHIP,
  header: "Battleship Game",
  subheader: "Game",
  features: [
    "Set pieces manually",
    "Set pieces randomly",
    "Pieces collision",
    "Failed / Missed shot conditions",
    "Computer attacking player",
    "Game Over conditions",
  ],
  technologies: ["HTML", "CSS", "JavaScript", "Webpack", "Jest"],
  description:
    "Classic game to sunk the enemy’s fleet by guessing their coordinates. Key features include a visually captivating game interface, intuitive ship placement mechanics, and dynamic gameplay.",
  links: {
    website: "https://battleship-game-psi.vercel.app/",
    github: "https://github.com/MMadlos/battleship-game",
  },
};

Object.freeze(DASHBOARD);
Object.freeze(OSHOP);
Object.freeze(BATTLESHIP);

export const PROJECTS_DATA = [DASHBOARD, OSHOP, BATTLESHIP];
