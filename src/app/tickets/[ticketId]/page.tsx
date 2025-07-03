import { initialTickets } from "@/src/data";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>
};

const TicketPage = async ({params}: TicketPageProps ) => {
  const { ticketId } = await params;
  const ticket = initialTickets.find((ticket) => ticket.id === ticketId)
  return (
      <div>
        <h1 className="text-lg">{ticket?.title}</h1>
        <h2 className="text-bold">{ticket?.content}</h2>
        <p>Status: {ticket?.status}</p>
      </div>
  ) 
}

export default TicketPage;