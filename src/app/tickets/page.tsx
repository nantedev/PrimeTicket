import { initialTickets } from "@/src/data";
import { Heading } from "@/src/components/heading";
import { TicketItem } from "@/src/features/ticket/components/ticket-item";



const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-10">

      <Heading title="TicketsPage" description="All your tickets. Zero hassle."/>
      
      <div className="flex-1 flex flex-col items-center animate-fade-from-top gap-y-5">
        {initialTickets.map((ticket)=> 
          <TicketItem key={ticket.id} ticket={ticket}/>
        )}
      </div>
    </div>
  )
}

export default TicketsPage;