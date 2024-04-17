export default function Header() {
  return (
    <header className="w-full">
      <div className="p-4 flex justify-between items-center  bg-[#333] text-[#FAFAFA] ">
        <h1 className="text-xl  tracking-tight font-medium   ">
          Michael Madlos
        </h1>

        <div className="flex gap-12 ">
          <a
            href="https://www.linkedin.com/in/michaelmadlos/"
            className="flex items-center gap-2 font-medium hover:opacity-50"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/MMadlos"
            className="flex items-center gap-2 font-medium hover:opacity-50"
          >
            Github
          </a>
        </div>
      </div>
    </header>
  );
}
