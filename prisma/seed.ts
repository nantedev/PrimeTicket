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
    title: "Add real-time email validation ",
    content: "As a user, I want to be notified immediately if the email address I'm entering is invalid, so I can correct the error before submitting the form.",
    status: "DONE" as const,
    deadline: new Date().toISOString().split("T")[0],
    bounty: 550000,
    },
    {
    title: "Optimize product listing",
    content: "The product listing page takes over 3 seconds to load with 1000+ products, causing poor user experience and high bounce rate.",
    status: "OPEN" as const,
    deadline: new Date().toISOString().split("T")[0],
    bounty: 750000,
    },
    {
    title: "Fix shopping cart display",
    content: "On Safari mobile (iOS 15+), cart items are not displaying correctly. Text overflows the container and quantity buttons are misaligned",
    status: "IN_PROGRESS" as const,
    deadline: new Date().toISOString().split("T")[0],
    bounty: 450000,
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