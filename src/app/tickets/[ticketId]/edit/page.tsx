import { CardCompact } from "@/components/card-compact";
import { TicketUpsertForm } from "@/features/ticket/components/ticket-upsert-form";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { notFound } from "next/navigation";

type TicketEditPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketEditPage = async ({ params }: TicketEditPageProps) => {
  const { ticketId } = await params;
  const ticket = await getTicket(ticketId);
    if (!ticket) {
        notFound();
    }

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4">
        <CardCompact
            className="w-full max-w-[420px] animate-fade-from-top"
          title="Edit Ticket"
          description="Make changes to your ticket below."
          content={<TicketUpsertForm ticket={ticket} />}
        />
    </div>
  );
}
export default TicketEditPage;