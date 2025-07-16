"use client"

import { ticketPath } from "@/paths";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import { TICKET_ICONS } from "@/features/constants";
import { LucideSquareArrowOutUpRight, LucideTrash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { Ticket } from "@prisma/client";
import { deleteTicket } from "../actions/delete-ticket";

type TicketItemProps = {
    ticket: Ticket;
    isDetail?: boolean;
}


const TicketItem = ({ticket, isDetail}: TicketItemProps) => {
    
  const detailButton = (
        <Button asChild variant="outline" size="icon">
        <Link href={ticketPath(ticket.id)} className="text-sm underline">
          <LucideSquareArrowOutUpRight className="h-4 w-4"/>
        </Link>
      </Button>
  )

 const handleDeleteTicket = async() => {
        await deleteTicket(ticket.id)
  }

  const deleteButton = (
    <Button variant="outline" size="icon" onClick={handleDeleteTicket}>
      <LucideTrash2 />
    </Button>
  )

    return (
    <div className={clsx("w-full flex gap-x-1", {
      "max-w-[420px]": !isDetail,
      "max-w-[580px]": isDetail, 
    })}>
      <Card key={ticket.id} className="w-full">
            <CardHeader>
              <CardTitle className="flex gap-x-2">
                <span>{TICKET_ICONS[ticket.status]}</span>
                <span className="flex flex-col justify-center truncate">{ticket.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <span className={clsx("whitespace-break-spaces",{
                  "line-clamp-3": !isDetail, 
              })}>{ticket.content}</span>   
            </CardContent>
      </Card>

        <div className="flex flex-col gap-y-1">
            {isDetail ? deleteButton : detailButton }
       </div> 



    </div>
    )
}

export { TicketItem }