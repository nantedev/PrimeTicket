import { initialTickets } from "@/src/data";
import { ticketPath } from "@/src/paths";
import Link from "next/link";

const TICKET_ICONS = {
  DONE: "X",
  OPEN: "O",
  IN_PROGRESS: ">"
};

const TicketsPage = () => {
  return (
    <div>
      <h2 className="underline">All the tickets ↓</h2>
      {initialTickets.map((ticket)=> 
      <div key={ticket.id}>
        <div>{TICKET_ICONS[ticket.status]}</div>
        <h2 className="text-lg">{ticket.title}</h2>
        <Link href={ticketPath(ticket.id)} className="text-sm underline">View</Link>
      </div> 
      )}
    </div>
  )
}

export default TicketsPage;