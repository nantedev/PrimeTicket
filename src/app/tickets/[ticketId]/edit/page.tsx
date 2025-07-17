import { CardCompact } from "@/components/card-compact";
import { TicketUpdateForm } from "@/features/ticket/components/ticket-update-form";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { notFound } from "next/navigation";

type TicketEditPageProps = {
  params: {
    ticketId: string;
  };
};

const TicketEditPage = async({ params }: TicketEditPageProps ) => {
    const ticket = await getTicket(params.ticketId);
    if (!ticket) {
        notFound();
    }

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4">
        <CardCompact
            className="w-full max-w-[420px] animate-fade-from-top"
          title="Edit Ticket"
          description="Make changes to your ticket below."
          content={<TicketUpdateForm ticket={ticket} />}
        />
    </div>
  );
}
export default TicketEditPage;