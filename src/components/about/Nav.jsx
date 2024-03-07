import Link from "../Link/Link";

export default function Nav() {
  return (
    <nav className="flex flex-row gap-8 justify-between sm:justify-normal sm:items-center">
      <Link text="LinkedIn" />
      <Link text="Github" />
    </nav>
  );
}
