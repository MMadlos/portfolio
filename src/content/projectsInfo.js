import IMGTest from "../assets/avatar_test.jpg";
import OshopIMG from "../assets/oshop.jpg";
import CronosIMG from "../assets/cronos.jpg";
import PokememoryIMG from "../assets/pokememory.jpg";

export const projectsInfo = [
  {
    id: 1,
    name: "Oshop",
    description:
      "Online shop simulator. SPA developed with React that includes tests with React Testing Library, routers with React Router and products from the Fake API Store.",
    src: OshopIMG,
    alt: "Image of the project",
    hrefWeb: "https://online-shop-brown-two.vercel.app/",
    hrefGithub: "https://github.com/MMadlos/online-shop",
  },
  {
    id: 2,
    name: "Cronos",
    description:
      "App to quickly check the most suitable date for an event for all (or most) participants. This project came to my mind when planning a bachelor party. We were a group of 6 discussing the best possible date for the event on WhatsApp and it soon became chaotic. So, I though, why not to do an app that makes this process easier.",
    src: CronosIMG,
    alt: "Image of the project",
    hrefWeb: "https://cronos-app.vercel.app/",
    hrefGithub: "https://github.com/MMadlos/cronos-app",
  },
  {
    id: 3,
    name: "Battleship game",
    description:
      "Classic game developed with JavaScript. This project was made to practice programming logic, how to use some patterns such as the factory method and how to test with Jest.",
    src: IMGTest,
    alt: "Image of the project",
    hrefWeb: "#",
    hrefGithub: "https://github.com/MMadlos/battleship-game",
  },
  {
    id: 4,
    name: "Memory card game",
    description:
      "Another classic game developed with JavaScript. I’ve used the PokeApi for the images, 3 levels of difficulty and a score board with its current points and the maximum points achieved.",
    src: PokememoryIMG,
    alt: "Image of the project",
    hrefWeb: "https://memory-card-game-delta-one.vercel.app/",
    hrefGithub: "https://github.com/MMadlos/memory-card-game",
  },
];
