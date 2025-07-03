import { initialTickets } from "@/src/data";
import { ticketPath } from "@/src/paths";
import Link from "next/link";

const TicketsPage = () => {
  return (
    <div>
      <h2 className="underline">All the ticket here:</h2>
      {initialTickets.map((ticket)=> 
      <div key={ticket.id}>
        <h2 className="text-lg">{ticket.title}</h2>
        <Link href={ticketPath(ticket.id)} className="text-sm underline">View</Link>
      </div> 
      )}
    </div>
  )
}

export default TicketsPage;