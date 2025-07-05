import { initialTickets } from "@/src/data";
import { ticketPath } from "@/src/paths";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
} from "@/src/components/ui/card"
import { LucideCircleCheck, LucideFileText, LucidePencil } from "lucide-react";
import { Heading } from "@/src/components/heading";




const TICKET_ICONS = {  
  OPEN: <LucideFileText />,
  DONE: <LucidePencil/>,
  IN_PROGRESS: <LucideCircleCheck/>,
}




const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-10">

      <Heading title="TicketsPage" description="All your tickets. Zero hassle."/>
      
      <div className="flex-1 flex flex-col items-center animate-fade-from-top gap-y-5">
        {initialTickets.map((ticket)=> 
        <Card 
        key={ticket.id} 
        className="w-full max-w-[420px]"
        >
        
          <CardHeader>
            <CardTitle className="flex gap-x-2">
              <span>{TICKET_ICONS[ticket.status]}</span>
              <span className="flex flex-col justify-center truncate">{ticket.title}</span>
            </CardTitle>
          </CardHeader>
          
          <CardContent>
            <span>{ticket.content}</span>
          </CardContent>

          <CardFooter>
            <Link href={ticketPath(ticket.id)} className="text-sm underline">View</Link>
          </CardFooter>

        </Card> 
        )}
      </div>
    </div>
  )
}

export default TicketsPage;