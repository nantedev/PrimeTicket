import { initialTickets } from "@/db/data";
import Link from "next/link";

const TicketsPage = () => {
  return (
    <div>
      <h2 className="underline">All the ticket here:</h2>
      {initialTickets.map((ticket)=> 
      <div key={ticket.id}>
        <h2 className="text-lg">{ticket.title}</h2>
        <Link href={`/tickets/${ticket.id}`} className="text-sm underline">View</Link>
      </div> 
      )}
    </div>
  )
}

export default TicketsPage;