import { Heading } from "@/components/heading";
import { Suspense } from "react";
import { Spinner } from "@/components/spinner";
import { TicketList } from "@/features/ticket/components/ticket-list";
import { SearchParams } from "@/features/ticket/search-params";

type HomePageProps = {
  searchParams: SearchParams;
};

const HomePage = async ({ searchParams }: HomePageProps) => {
  return (
    <div className="flex-1 flex flex-col gap-y-10">
      <Heading
        title="All tickets"
        description="Tickets by everyone at one place"
      />

      <Suspense fallback={<Spinner />}>
        <TicketList searchParams={await searchParams} />
      </Suspense>
    </div>
  );
};

export default HomePage;
