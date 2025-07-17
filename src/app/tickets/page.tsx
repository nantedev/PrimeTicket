import { Heading } from "@/components/heading";
import { Spinner } from "@/components/spinner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TicketCreateForm } from "@/features/ticket/components/ticket-create-form";
import { TicketList } from "@/features/ticket/components/ticket-list";
import { Suspense } from "react";

const TicketsPage =  () => {
  
  return (
    <div className="flex-1 flex flex-col gap-y-10">
      <Heading title="Tickets" description="All your tickets. Zero hassle."/>      
        
        <Card className="w-full max-w-[420px] self-center">
          <CardHeader>
            <CardTitle>
              Create Ticket
            </CardTitle>
            <CardDescription>
            A new ticket will be created
            </CardDescription>
          </CardHeader>
          <CardContent>
            < TicketCreateForm />
          </CardContent>
        </Card>


        
        <Suspense fallback={<Spinner />}>
          <TicketList />
        </Suspense>
    </div>
  )
}



export default TicketsPage;