import { Heading } from "@/components/heading";
import { TicketItem } from "@/features/ticket/components/ticket-item";
import { getTickets } from "@/features/ticket/queries/get-tickets";



const TicketsPage = async () => {

  const tickets = await getTickets();



  return (
    <div className="flex-1 flex flex-col gap-y-10">
      <Heading title="TicketsPage" description="All your tickets. Zero hassle."/>      
      <div className="flex-1 flex flex-col items-center animate-fade-from-top gap-y-5">
        {tickets.map((ticket)=> 
          <TicketItem key={ticket.id} ticket={ticket}/>
    

      )
    }
        </div>
    </div>
  )
}



export default TicketsPage;