export default function Stack() {
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
