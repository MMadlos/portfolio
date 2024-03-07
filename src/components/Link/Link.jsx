export default function Link({ href = "#", text = "link text", light }) {
  return (
    <>
      {light ? (
        <a
          href={href}
          className="h-full py-2 px-4 text-xs font-fira text-[#FAFAFA] font-semibold bg-[#333] flex flex-row gap-2 items-center justify-center rounded sm:hover:opacity-50"
        >
          {text}
          <i className="fa-solid fa-arrow-right -rotate-45 " />
        </a>
      ) : (
        <a href={href} className="group">
          <div className="h-full py-2 text-sm font-fira text-[#FAFAFA] sm:text-[#999] font-semibold group-hover:text-[#FAFAFA]">
            <span>{text}</span>
            <i className="fa-solid fa-arrow-right -rotate-45 ml-2" />
          </div>
          <div className="h-[2px] w-full bg-gradient-to-r from-[#3604FF] via-[#FF4D86] to-[#FDB437] rounded-full opacity-0 group-hover:opacity-100"></div>
        </a>
      )}
    </>
  );
}
