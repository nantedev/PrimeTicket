import { initialTickets } from "@/src/data";
import { ticketPath } from "@/src/paths";
import Link from "next/link";


const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-10">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">TicketsPage</h2>
        <p className="text-sm text-muted-foreground">All your tickets. Zero hassle.</p>
      </div>


      <div className="flex-1 flex flex-col items-center gap-y-5">
        {initialTickets.map((ticket)=> 
        <div key={ticket.id} className="w-full max-w-[420px] bg-gray-700 p-4 rounded">
          <h3 className="text-lg font-semibold truncate">{ticket.title}</h3>
          <p className="text-sm truncate">{ticket.content}</p>
          <Link href={ticketPath(ticket.id)} className="text-sm underline">View</Link>
        </div> 
        )}
      </div>
    </div>
  )
}

export default TicketsPage;