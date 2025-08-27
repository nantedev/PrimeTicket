import { SearchInput } from "@/components/search-input";
import { getTickets } from "../queries/get-tickets";
import { TicketItem } from "./ticket-item";
import { SearchParams } from "../search-params";
import { Placeholder } from "@/components/placeholder";

type TicketListProps = {
  userId?: string;
  searchParams: SearchParams;
};

const TicketList = async ({ userId, searchParams }: TicketListProps) => {
  const tickets = await getTickets(userId, searchParams);

  return (
    <div className="flex-1 flex flex-col items-center animate-fade-from-top gap-y-5">
      <div className="w-full max-w-[420px]">
        <SearchInput placeholder="search tickets" />
      </div>
      {tickets.length ? (
        tickets.map((ticket) => <TicketItem key={ticket.id} ticket={ticket} />)
      ) : (
        <Placeholder label="Sorry, no tickets found" />
      )}
    </div>
  );
};

export { TicketList };
