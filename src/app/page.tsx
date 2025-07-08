import Link from "next/link";
import { ticketsPath } from "@/paths";
import { Heading } from "@/components/heading";

const HomePage = () => {
  return (
  <div className="flex-1 flex flex-col gap-y-10">
    
    <Heading title="HomePage" description="Your starting point. Every time."/>

    <div className="flex-1 flex flex-col items-center">
      <Link href={ticketsPath()} className="underline">Go there</Link>
    </div>
  </div>
  )
}

export default HomePage;