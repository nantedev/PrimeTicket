"use client";

import { initialTickets } from "@/src/data";
import { Heading } from "@/src/components/heading";
import { TicketItem } from "@/src/features/ticket/components/ticket-item";
import { useEffect, useState } from "react";
import { Ticket } from "@/src/features/types";
import { getTickets } from "@/src/features/ticket/queries/get-tickets";



const TicketsPage = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    const fetchTickets = async () => {
      const result = await getTickets();

      setTickets(result);
    }
    
    fetchTickets();
  },[])

  return (
    <div className="flex-1 flex flex-col gap-y-10">
      <Heading title="TicketsPage" description="All your tickets. Zero hassle."/>      
      <div className="flex-1 flex flex-col items-center animate-fade-from-top gap-y-5">
        {tickets.map((ticket)=> 
          <TicketItem key={ticket.id} ticket={ticket}/>
        )}
      </div>
    </div>
  )
}

export default TicketsPage;