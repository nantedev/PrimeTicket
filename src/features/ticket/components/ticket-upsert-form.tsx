"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Ticket } from "@prisma/client";
import { upsertTicket } from "../actions/upsert-ticket";
import { SubmitButton } from "@/components/form/submit-button";
import { useActionState, useEffect } from "react";
import { FieldError } from "@/components/form/field-error";
import { EMPTY_ACTION_STATE } from "@/components/form/utils/to-action-state";
import { useActionFeedback } from "@/components/form/hooks/use-action-feedback";
import { toast } from "sonner";
import { Form } from "@/components/form/form";



type TicketUpsertFormProps = {
  ticket?: Ticket
};

const TicketUpsertForm = ({ ticket }: TicketUpsertFormProps) => {
  
      const [actionState, action]= useActionState(
        upsertTicket.bind(null, ticket?.id), 
        EMPTY_ACTION_STATE
      )

  

    return (      
            <Form action={action} actionState={actionState}>

                <Label htmlFor="title">Title</Label>
                <Input 
                id="title" 
                name="title" 
                type="text" 
                defaultValue={(actionState.payload?.get('title')) as string ?? ticket?.title} 
                />
                <FieldError actionState={actionState} name="title"/>

                <Label htmlFor="content">Content</Label>
                <Textarea 
                id="content" 
                name="content" 
                defaultValue={(actionState.payload?.get('content')) as string ?? ticket?.content} 
                />
                <FieldError actionState={actionState} name="content"/>
                
                < SubmitButton label={ticket ? "Edit" : "Create"}/>

            </Form>
    );
};

export { TicketUpsertForm };