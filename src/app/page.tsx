import Link from "next/link";

const HomePage = () => {
  return (
  <div>
    <h2 className="text-lg">Hello there</h2>
    <Link href="/tickets" className="underline">Go there</Link>
  </div>
  )
}

export default HomePage;