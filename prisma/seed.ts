import { hash } from "@node-rs/argon2";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

const users = [
    {
       username: "admin",
       email: "admin@admin.com" ,
    },
    {
        username: "user",
        email: "formation@mickaelandira.fr",
    }
]

const tickets = [
    {
    title: "Ticket 1",
    content: "This is the first ticket from db.",
    status: "DONE" as const,
    deadline: new Date().toISOString().split("T")[0],
    bounty: 399,
    },
    {
    title: "Ticket 2",
    content: "This is the second ticket from db.",
    status: "OPEN" as const,
    deadline: new Date().toISOString().split("T")[0],
    bounty: 399,
    },
    {
    title: "Ticket 3",
    content: "This is the third ticket from db.",
    status: "IN_PROGRESS" as const,
    deadline: new Date().toISOString().split("T")[0],
    bounty: 399,
    },
];

const seed = async () => {
    const t0 = performance.now();

    await prisma.ticket.deleteMany();
    await prisma.user.deleteMany();

    const passwordHash = await hash("secret")
    
    const dbUsers = await prisma.user.createManyAndReturn({
        data: users.map((user) => ({
            ...user,
            passwordHash,
        }))
    })
    await prisma.ticket.createMany({
        data: tickets.map((ticket) => ({
            ...ticket,
            userId: dbUsers[0].id, //always atached to the first user ?
        })),
    });

    const t1 = performance.now();
    
    console.log(`DB Seed: Finished (${t1 - t0})`)
};

seed();