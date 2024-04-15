export default function Header() {
  return (
    <header className="w-full">
      <div className="p-4 flex justify-between items-center  bg-[#FAFAFA] ">
        <h1 className="text-xl  tracking-tight font-medium text-stone-900  ">
          Michael Madlos
        </h1>

        <div className="flex gap-12 text-stone-900 ">
          <a
            href="https://www.linkedin.com/in/michaelmadlos/"
            className="flex items-center gap-2 font-medium hover:text-stone-400"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/MMadlos"
            className="flex items-center gap-2 font-medium hover:text-stone-400"
          >
            Github
          </a>
        </div>
      </div>
    </header>
  );
}
