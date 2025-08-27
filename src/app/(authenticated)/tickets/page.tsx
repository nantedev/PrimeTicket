import { CardCompact } from "@/components/card-compact";
import { Heading } from "@/components/heading";
import { Spinner } from "@/components/spinner";
import { getAuth } from "@/features/auth/queries/get-auth";
import { TicketList } from "@/features/ticket/components/ticket-list";
import { TicketUpsertForm } from "@/features/ticket/components/ticket-upsert-form";
import { SearchParams } from "@/features/ticket/search-params";
import { Suspense } from "react";

type TicketsPageProps = {
  searchParams: Promise<SearchParams>;
};

const TicketsPage = async ({ searchParams }: TicketsPageProps) => {
  const { user } = await getAuth();
  return (
    <div className="flex-1 flex flex-col gap-y-10">
      <Heading
        title="My Tickets"
        description="All your tickets. Zero hassle."
      />

      <CardCompact
        className="w-full max-w-[420px] self-center"
        title="Create Ticket"
        description="A new ticket will be created"
        content={<TicketUpsertForm />}
      />

      <Suspense fallback={<Spinner />}>
        <TicketList userId={user?.id} searchParams={await searchParams} />
      </Suspense>
    </div>
  );
};

export default TicketsPage;
