import { prisma } from "@/lib/prisma";

export const getComments = async (ticketId: string) => {
    return await prisma.comment.findMany({
        where: {
            ticketId: ticketId
        },
        include: {
            user: {
                select: {
                    username: true,
                },
            },
        },
        orderBy: {
            createdAt: "desc"
        }
    });
};