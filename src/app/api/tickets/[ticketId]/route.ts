import { getTicket } from "@/features/ticket/queries/get-ticket";
import { NextResponse } from "next/server";

export async function GET(
    _request: Request,
    { params }: { params: { ticketId: string } }
) {
    const { ticketId } = params;
    const ticket = await getTicket(ticketId);
    return NextResponse.json(ticket);
}