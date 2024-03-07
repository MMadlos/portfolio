import { stackLabels } from "../../content/stackLabels";

export default function Stack() {
  return (
    <div className="flex flex-row gap-2 flex-wrap">
      {stackLabels.map((tag, index) => {
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
