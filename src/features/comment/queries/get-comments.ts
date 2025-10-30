"use server";

import { getAuth } from "@/features/auth/queries/get-auth";
import { isOwner } from "@/features/auth/utils/is-owner";
import { prisma } from "@/lib/prisma";

export const getComments = async (ticketId: string, offset?: number, cursor?: string) => {
    const {user} = await getAuth();
    const where = { 
        ticketId, 
        id: {
            lt: cursor,
        }
    };
    const skip = offset ?? 0;
    const take = 2;

    const [comments, count] = await prisma.$transaction([
        prisma.comment.findMany({
            where,
            skip,
            take,
            include: {
                user: {
                select: {
                    username: true,
                },
            },
        },
        orderBy: {
            id: "desc"
        }
    }),
        prisma.comment.count({ where }),
    ]);

    return {
        list: comments.map((comment) => ({
            ...comment,
            isOwner: isOwner(user, comment)
        })),
        metadata: { 
            count, 
            hasNextPage: skip + take < count,
            cursor: comments.at(-1)?.id,
        },  
    };
};