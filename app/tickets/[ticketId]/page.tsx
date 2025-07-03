type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>
};

const TicketPage = async ({params}: TicketPageProps ) => {
  const { ticketId } = await params;

  return <h2>This is your Ticket N°{ticketId} </h2>
}

export default TicketPage;