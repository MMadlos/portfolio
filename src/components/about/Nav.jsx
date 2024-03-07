export default function Nav() {
  return (
    <nav className="flex flex-row gap-4 justify-between sm:justify-normal ">
      <button className="p-[2px] bg-gradient-to-r from-[#3604FF] via-[#FF4D86] to-[#FDB437] rounded-lg group">
        <span className="bg-black block py-3 text-sm rounded-lg px-6 font-fira text-[#FAFAFA] font-semibold group-hover:bg-gradient-to-r from-[#3604FF] via-[#FF4D86] to-[#FDB437]">
          LinkedIn
          <i className="fa-solid fa-arrow-right -rotate-45 ml-2" />
        </span>
      </button>
      <button className="font-fira font-semibold text-[#FAFAFA] rounded-lg text-sm py-3 bg-[#222222] px-6 hover:bg-[#333]">
        Github
        <i className="fa-solid fa-arrow-right -rotate-45 ml-2" />
      </button>
    </nav>
  );
}
