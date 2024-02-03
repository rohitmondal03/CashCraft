import Link from "next/link";

import classNames from "classnames";


export default function Navbar() {
  return (
    <nav className={classNames({
      "flex flex-row items-center justify-between": true,
      "py-6 px-12": true,
      "border-b-2 border-gray-400": true,
    })}>
      <Link href={"/"} className="text-3xl font-bold">
        CashCraft
      </Link>
    </nav>
  )
}
