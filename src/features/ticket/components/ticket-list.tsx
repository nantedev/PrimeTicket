import { SearchInput } from "@/components/search-input";
import { getTickets } from "../queries/get-tickets";
import { TicketItem } from "./ticket-item";
import { ParsedSearchParams } from "../search-params";
import { Placeholder } from "@/components/placeholder";
import { SortSelect } from "@/components/sort-select";

type TicketListProps = {
  userId?: string;
  searchParams: ParsedSearchParams;
};

const TicketList = async ({ userId, searchParams }: TicketListProps) => {
  const tickets = await getTickets(userId, searchParams);

  return (
    <div className="flex-1 flex flex-col items-center animate-fade-from-top gap-y-5">
      <div className="w-full max-w-[420px] flex gap-x-3">
        <SearchInput placeholder="search tickets" />
        <SortSelect
          options={[
            { sortKey: "createdAt", sortValue: "desc", label: "Newest" },
            { sortKey: "createdAt", sortValue: "asc", label: "Oldest" },
            { sortKey: "bounty", sortValue: "desc", label: "Bounty" },
          ]}
        />
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
