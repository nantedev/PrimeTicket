import { Heading } from "@/components/heading";
import { Spinner } from "@/components/spinner";
import { TicketList } from "@/features/ticket/components/ticket-list";
import { Suspense } from "react";



const TicketsPage =  () => {
  
  return (
    <div className="flex-1 flex flex-col gap-y-10">
      <Heading title="TicketsPage" description="All your tickets. Zero hassle."/>      
        <Suspense fallback={<Spinner />}>
          <TicketList />
        </Suspense>
    </div>
  )
}



export default TicketsPage;