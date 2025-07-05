import { initialTickets } from "@/src/data";
import { ticketPath } from "@/src/paths";
import clsx from "clsx";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator";
import { LucideCircleCheck, LucideFileText, LucidePencil } from "lucide-react";




const TICKET_ICONS = {  
  OPEN: <LucideFileText />,
  DONE: <LucidePencil/>,
  IN_PROGRESS: <LucideCircleCheck/>,
}




const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-10">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">TicketsPage</h2>
        <p className="text-sm text-muted-foreground">All your tickets. Zero hassle.</p>
      </div>

     <Separator />

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