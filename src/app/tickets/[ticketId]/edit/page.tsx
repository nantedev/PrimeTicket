import { Breadcrumbs } from "@/components/breadcrumbs";
import { CardCompact } from "@/components/card-compact";
import { getAuth } from "@/features/auth/queries/get-auth";
import { isOwner } from "@/features/auth/utils/is-owner";
import { TicketUpsertForm } from "@/features/ticket/components/ticket-upsert-form";
import { getTicket } from "@/features/ticket/queries/get-ticket";
import { homePath, ticketPath } from "@/paths";
import { Separator } from "@radix-ui/react-separator";
import { notFound } from "next/navigation";

type TicketEditPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};

const TicketEditPage = async ({ params }: TicketEditPageProps) => {
  const { user } = await getAuth();
  const { ticketId } = await params;
  const ticket = await getTicket(ticketId);

  const isTicketFound = !!ticket;
  const isTicketOwner = isOwner(user, ticket);

  if (!isTicketFound || !isTicketOwner) {
    notFound();
  }

  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Breadcrumbs
        breadcrumbs={[
          { title: "Tickets", href: homePath() },
          { title: ticket.title, href: ticketPath(ticket.id) },
          { title: "Edit" },
        ]}
      />
      <Separator />
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <CardCompact
          className="w-full max-w-[420px] animate-fade-from-top"
          title="Edit Ticket"
          description="Make changes to your ticket below."
          content={<TicketUpsertForm ticket={ticket} />}
        />
      </div>
    </div>
  );
};
export default TicketEditPage;
