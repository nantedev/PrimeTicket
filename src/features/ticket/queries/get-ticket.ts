import { prisma } from "@/lib/prisma"


export const getTicket = async (id: string) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
        return await prisma.ticket.findUnique({
            where: {
                id,
            },
            include: {
                user: {
                    select: {
                        username: true,
                    }
                }
            }
        })
}