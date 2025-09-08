import { getTickets } from "../queries/get-tickets";
import { TicketItem } from "./ticket-item";
import { ParsedSearchParams } from "../search-params";
import { Placeholder } from "@/components/placeholder";
import { TicketSearchInput } from "./ticket-search-input";
import { TicketSortSelect } from "./ticket-sort-select";
import { TicketPagination } from "./ticket-pagination";

type TicketListProps = {
  userId?: string;
  searchParams: ParsedSearchParams;
};

const TicketList = async ({ userId, searchParams }: TicketListProps) => {
  const tickets = await getTickets(userId, searchParams);

  return (
    <div className="flex-1 flex flex-col items-center animate-fade-from-top gap-y-5">
      <div className="w-full max-w-[420px] flex gap-x-3">
        <TicketSearchInput placeholder="search tickets" />
        <TicketSortSelect
          options={[
            { sortKey: "createdAt", sortValue: "desc", label: "Newest" },
            { sortKey: "createdAt", sortValue: "asc", label: "Oldest" },
            { sortKey: "bounty", sortValue: "desc", label: "Bounty" },
            { sortKey: "title", sortValue: "asc", label: "A -> Z" },
            { sortKey: "title", sortValue: "desc", label: "Z -> A" },
          ]}
        />
      </div>
      {tickets.length ? (
        tickets.map((ticket) => <TicketItem key={ticket.id} ticket={ticket} />)
      ) : (
        <Placeholder label="Sorry, no tickets found" />
      )}
      <div className="w-full max-w-[420px]">
        <TicketPagination />
      </div>
    </div>
  );
};

export { TicketList };
