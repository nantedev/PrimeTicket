import { getTickets } from "../queries/get-tickets";
import { TicketItem } from "./ticket-item";

const TicketList = async () => {
   
    const tickets = await getTickets();

    return (
        <div className="flex-1 flex flex-col items-center animate-fade-from-top gap-y-5">
            {tickets.map((ticket)=> (
                <TicketItem key={ticket.id} ticket={ticket}/>
                ))}
        </div>
)
}
        
export { TicketList };