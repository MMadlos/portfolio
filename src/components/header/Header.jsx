export default function Header() {
  return (
    <header className="w-full">
      <div className="p-4 flex justify-between items-center  bg-[#FAFAFA]/70 ">
        <h1 className="text-xl tracking-tighter font-semibold text-[#334155]  ">
          Michael Madlos
        </h1>

        <div className="flex  gap-4 text-stone-700 text-sm">
          <a
            href="#"
            className="flex items-center gap-2 uppercase font-bold hover:text-stone-400"
          >
            Linkedin
          </a>
          <a
            href="#"
            className="flex items-center gap-2 uppercase  font-bold hover:text-stone-400"
          >
            Github
          </a>
        </div>
      </div>
    </header>
  );
}
