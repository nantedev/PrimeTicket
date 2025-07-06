import { ticketPath } from "@/src/paths";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardContent,
} from "@/src/components/ui/card"
import { TICKET_ICONS } from "../../constants";
import { Ticket } from "../../types";

type TicketItemProps = {
    ticket: Ticket,
}

const TicketItem = ({ticket}: TicketItemProps) => {
    return (
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
ù
          <CardFooter>
            <Link href={ticketPath(ticket.id)} className="text-sm underline">View</Link>
          </CardFooter>

    </Card> 
    )
}

export { TicketItem }