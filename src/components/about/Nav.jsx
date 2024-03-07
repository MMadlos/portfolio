export default function Nav() {
  return (
    <nav className="flex flex-row gap-8 justify-between sm:justify-normal sm:items-center">
      <a href="#" className="group">
        <div className="bg-black h-full py-2 text-sm font-fira text-[#FAFAFA] sm:text-[#999] font-semibold group-hover:text-[#FAFAFA]">
          <span>Linkedin</span>
          <i className="fa-solid fa-arrow-right -rotate-45 ml-2" />
        </div>
        <div className="h-[2px] w-full bg-gradient-to-r from-[#3604FF] via-[#FF4D86] to-[#FDB437] rounded-full opacity-0 group-hover:opacity-100"></div>
      </a>
      <a href="#" className="group">
        <div className="bg-black h-full py-2 text-sm font-fira text-[#FAFAFA] sm:text-[#999] font-semibold group-hover:text-[#FAFAFA]">
          <span>Github</span>
          <i className="fa-solid fa-arrow-right -rotate-45 ml-2" />
        </div>
        <div className="h-[2px] w-full bg-gradient-to-r from-[#3604FF] via-[#FF4D86] to-[#FDB437] rounded-full opacity-0 group-hover:opacity-100"></div>
      </a>
    </nav>
  );
}
