"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Ticket } from "@prisma/client";
import { upsertTicket } from "../actions/upsert-ticket";
import { useTransition } from "react";
import { LucideLoader } from "lucide-react";

type TicketUpsertFormProps = {
  ticket?: Ticket
};



const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
    const [isPending, startTransition ] = useTransition()

    const upstertTicketAction = (formData: FormData) => {
      startTransition(async () => {
      await upsertTicket.bind(null, ticket?.id)(formData)
      })
    };

    return (      
            <form action={upstertTicketAction} className="flex flex-col gap-y-3">

                <Label htmlFor="title">Title</Label>
                <Input id="title" name="title" type="text" defaultValue={ticket?.title} />

                <Label htmlFor="content">Content</Label>
                <Textarea id="content" name="content" defaultValue={ticket?.content} />

                <Button disabled={isPending} type="submit">
                  {isPending && <LucideLoader className="mr-2 h-4 w-4 animate-spin" />}
                  { ticket ? "Edit" : "Create"}
                </Button> 
            </form>
    );
};

export { TicketUpsertForm };