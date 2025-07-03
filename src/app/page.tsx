import Link from "next/link";
import { ticketsPath } from "../paths";

const HomePage = () => {
  return (
  <div>
    <h2 className="text-lg">Hello there</h2>
    <Link href={ticketsPath()} className="underline">Go there</Link>
  </div>
  )
}

export default HomePage;