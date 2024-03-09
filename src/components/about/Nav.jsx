import Link from "../Link/Link";

export default function Nav() {
  return (
    <nav className="flex flex-row gap-8 justify-between sm:justify-normal sm:items-center">
      <Link text="LinkedIn" href="https://es.linkedin.com/in/michaelmadlos" />
      <Link text="Github" href="https://github.com/MMadlos" />
    </nav>
  );
}
