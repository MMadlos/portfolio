export default function Footer() {
  return (
    <footer>
      <div className="p-4 flex justify-between items-center  bg-[#333333] text-[#FAFAFA] ">
        <h1 className="text-xl  tracking-tight font-medium   ">
          <a href="#">Michael Madlos</a>
        </h1>

        <div className="flex gap-12 ">
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
    </footer>
  );
}
