export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 ">
      <div className="py-2 px-4 sm:p-4 flex gap-8 items-center  bg-gradient-to-br from-[#6EE7B7]/50 to-[#A7F1D4]/50 backdrop-blur mx-auto justify-between ">
        <h1 className="hidden sm:block text-2xl tracking-tighter font-medium pl-2 text-black ">
          Michael Madlos
        </h1>

        <h1 className="sm:hidden text-2xl tracking-tighter font-extrabold text-black ">
          MM
        </h1>

        <div className="flex gap-4 sm:gap-10">
          <a
            href="https://www.linkedin.com/in/michaelmadlos/"
            className="flex items-center font-semibold text-sm sm:text-base sm:font-medium sm:px-4 sm:py-2 hover:text-emerald-500"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/MMadlos"
            className="flex items-center font-semibold text-sm sm:text-base sm:font-medium sm:px-4 sm:py-2 hover:text-emerald-500"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}
