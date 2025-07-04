import Link from "next/link";
import { ticketsPath } from "../paths";

const HomePage = () => {
  return (
  <div className="flex-1 flex flex-col gap-y-10">
    <div>
      <h2 className="text-3xl font-bold tracking-tight">HomePage</h2>
      <p className="text-sm text-muted-foreground">Your starting point. Every time.</p>
    </div>
    <div className="flex-1 flex flex-col items-center">
      <Link href={ticketsPath()} className="underline">Go there</Link>
    </div>
  </div>
  )
}

export default HomePage;