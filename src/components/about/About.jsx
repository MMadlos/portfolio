import Avatar from "../../assets/avatar.png";
import Nav from "./Nav";

export default function About() {
  return (
    <section className="w-dvw pb-[4px] bg-gradient-to-r from-[#3604FF] via-[#FF4D86] to-[#FDB437] sm:h-full sm:pb-0 sm:pr-[4px] sm:bg-gradient-to-b sm:max-w-[550px] flex">
      <div className="flex flex-col gap-20 bg-black p-6 pb-20 grow sm:gap-4 ">
        <Nav />

        <div>
          <h1 className="font-fira text-[#999999] text-sm font-medium">
            Michael Madlos
          </h1>
          <div
            id="header-container"
            className="text-6xl  text-[#FAFAFA] font-geist flex flex-row flex-wrap gap-x-3  font-extrabold items-center max-w-[360px] tracking-tight leading-12"
          >
            <div className="">I'm</div>
            <div>a</div>
            <div className="relative w-[100px] h-[40px] inline-block bg-gradient-to-r from-[#3604FF] via-[#FF4D86] to-[#FDB437] rounded-full">
              <img
                src={Avatar}
                alt=""
                className="object-cover h-[70px] w-full object-top absolute bottom-0 -scale-x-100 sm:scale-x-100"
              />
            </div>
            <div className="bg-gradient-to-r from-[#3604FF] via-[#FF4D86] to-[#FDB437] text-transparent bg-clip-text inline-block text-nowrap ">
              front-end
            </div>

            <div>developer</div>
          </div>
        </div>
        <Stack />

        {/* <div className="flex flex-col gap-4 sm:flex-row sm:hidden">
          <button className="font-fira text-[#FAFAFA] font-semibold p-[2px] w-full bg-gradient-to-r from-[#3604FF] via-[#FF4D86] to-[#FDB437] rounded-lg h-fit">
            <span className="bg-black block py-4 text-sm rounded-lg sm:py-3">
              LinkedIn
            </span>
          </button>
          <button className="font-fira font-semibold text-[#FAFAFA] rounded-lg text-sm py-4 w-full bg-[#222222] grow-0  h-fit sm:py-3">
            Github
          </button>
        </div> */}
      </div>
    </section>
  );
}

function Stack() {
  const stackContent = [
    { name: "Javascript", src: "src/assets/logos/logo_js.png" },
    { name: "React", src: "src/assets/logos/logo_react.png" },
    { name: "HTML", src: "src/assets/logos/logo_html.png" },
    { name: "CSS", src: "src/assets/logos/logo_css.png" },
    { name: "React Router", src: "src/assets/logos/logo_react_router.png" },
    { name: "Git", src: "src/assets/logos/logo_git.png" },
    { name: "Github", src: "src/assets/logos/logo_github.png" },
    { name: "Vite", src: "src/assets/logos/logo_vite.png" },
    { name: "Webpack", src: "src/assets/logos/logo_webpack.png" },
    { name: "Vitest", src: "src/assets/logos/logo_vitest.png" },
    { name: "Jest", src: "src/assets/logos/logo_jest.png" },
    { name: "React Testing Library", src: "src/assets/logos/logo_RTL.png" },
    { name: "Figma", src: "src/assets/logos/logo_figma.png" },
  ];

  return (
    <div className="flex flex-row gap-2 flex-wrap">
      {stackContent.map((tag, index) => {
        const { name, src } = tag;

        return <Tag key={index} text={name} srcLogo={src} />;
      })}
    </div>
  );
}

function Tag({ text = "", srcLogo }) {
  return (
    <div className="bg-[#292929] w-fit rounded-full px-4 py-2 flex flex-row gap-2 justify-center items-center">
      <img
        src={srcLogo}
        alt=""
        className="size-4 aspect-square object-contain"
      />
      <p className="text-[#CCC] font-medium text-sm font-geist tracking-wide">
        {text}
      </p>
    </div>
  );
}
