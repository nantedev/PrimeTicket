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

const comments = [
    {
        content: "This is a comment from DB",
    },
    {
        content: "This is another comment from DB",
    },
    {
        content: "This is a third comment from DB",
    },
];

const tickets = [
    {
        title: "Add real-time email validation",
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
    {
        title: "Implement dark mode toggle",
        content: "Users need a dark/light mode toggle in the navigation bar that persists their preference across sessions and applies to all pages.",
        status: "OPEN" as const,
        deadline: new Date().toISOString().split("T")[0],
        bounty: 650000,
    },
    {
        title: "Fix memory leak in image upload",
        content: "Image preview component causes browser slowdown when users upload multiple files. Need to properly clean up blob URLs and optimize memory usage.",
        status: "OPEN" as const,
        deadline: new Date().toISOString().split("T")[0],
        bounty: 400000,
    },
    {
        title: "Add infinite scroll to news feed",
        content: "Replace pagination with infinite scroll that loads 10 items at a time. Should handle loading states and errors gracefully.",
        status: "IN_PROGRESS" as const,
        deadline: new Date().toISOString().split("T")[0],
        bounty: 800000,
    },
    {
        title: "Integrate Stripe payment system",
        content: "Set up complete payment flow with webhook handling for confirmations, refunds, and failed payments. Must handle all edge cases securely.",
        status: "OPEN" as const,
        deadline: new Date().toISOString().split("T")[0],
        bounty: 1200000,
    },
    {
        title: "Fix CORS issues in production",
        content: "File upload endpoints are failing in production due to CORS misconfiguration. Works perfectly in development but breaks in production environment.",
        status: "OPEN" as const,
        deadline: new Date().toISOString().split("T")[0],
        bounty: 300000,
    },
    {
        title: "Add JWT token refresh logic",
        content: "Implement automatic token refresh to prevent users from being logged out during active sessions. Should handle edge cases and network errors.",
        status: "DONE" as const,
        deadline: new Date().toISOString().split("T")[0],
        bounty: 500000,
    },
    {
        title: "Optimize database queries",
        content: "Dashboard queries are taking 5+ seconds to load. Need to add proper indexing and optimize JOIN operations for user analytics data.",
        status: "IN_PROGRESS" as const,
        deadline: new Date().toISOString().split("T")[0],
        bounty: 900000,
    },
    {
        title: "Create responsive mobile navigation",
        content: "Current navigation menu breaks on screens smaller than 768px. Need a hamburger menu with smooth animations and proper touch interactions.",
        status: "OPEN" as const,
        deadline: new Date().toISOString().split("T")[0],
        bounty: 450000,
    },
    {
        title: "Implement search autocomplete",
        content: "Add real-time search suggestions with debouncing, keyboard navigation support, and highlighting of matching terms in results.",
        status: "OPEN" as const,
        deadline: new Date().toISOString().split("T")[0],
        bounty: 700000,
    },
    {
        title: "Fix notification system bugs",
        content: "Push notifications are not working on Firefox and some mobile browsers. Also need to handle permission denied gracefully.",
        status: "IN_PROGRESS" as const,
        deadline: new Date().toISOString().split("T")[0],
        bounty: 600000,
    },
    {
        title: "Add social media login",
        content: "Integrate OAuth login with Google, Facebook, and GitHub. Should handle account linking and profile data synchronization securely.",
        status: "OPEN" as const,
        deadline: new Date().toISOString().split("T")[0],
        bounty: 850000,
    },
    {
        title: "Implement Redis caching layer",
        content: "Add Redis caching for API responses and user sessions to improve performance. Include proper cache invalidation and TTL management.",
        status: "DONE" as const,
        deadline: new Date().toISOString().split("T")[0],
        bounty: 950000,
    },
    {
        title: "Fix timezone handling issues",
        content: "Date/time displays are incorrect for users in different timezones. Need consistent UTC handling and proper locale formatting.",
        status: "OPEN" as const,
        deadline: new Date().toISOString().split("T")[0],
        bounty: 400000,
    },
    {
        title: "Add drag and drop file upload",
        content: "Replace current file input with drag-and-drop interface. Should support multiple files, progress indicators, and file type validation.",
        status: "IN_PROGRESS" as const,
        deadline: new Date().toISOString().split("T")[0],
        bounty: 650000,
    },
    {
        title: "Optimize bundle size with code splitting",
        content: "Current JavaScript bundle is 2MB causing slow initial load. Implement lazy loading and code splitting to reduce to under 500KB.",
        status: "OPEN" as const,
        deadline: new Date().toISOString().split("T")[0],
        bounty: 750000,
    },
    {
        title: "Create comprehensive unit tests",
        content: "Write unit tests for authentication module covering login, registration, password reset, and edge cases. Target 90%+ coverage.",
        status: "OPEN" as const,
        deadline: new Date().toISOString().split("T")[0],
        bounty: 550000,
    },
    {
        title: "Fix WebSocket connection drops",
        content: "Real-time chat disconnects after 30 minutes of inactivity. Need to implement proper reconnection logic and heartbeat mechanism.",
        status: "IN_PROGRESS" as const,
        deadline: new Date().toISOString().split("T")[0],
        bounty: 700000,
    }
];

const seed = async () => {
    const t0 = performance.now();
    await prisma.comment.deleteMany();
    await prisma.ticket.deleteMany();
    await prisma.user.deleteMany();

    const passwordHash = await hash("secret")
    
    const dbUsers = await prisma.user.createManyAndReturn({
        data: users.map((user) => ({
            ...user,
            passwordHash,
        }))
    })

    const dbTickets = await prisma.ticket.createManyAndReturn({
        data: tickets.map((ticket) => ({
            ...ticket,
            userId: dbUsers[0].id, //always atached to the first user ?
        })),
    });

    await prisma.comment.createMany({
        data: comments.map((comment) => ({
            ...comment,
            userId: dbUsers[0].id,
            ticketId: dbTickets[1].id, 
        }))
    })

    const t1 = performance.now();
    
    console.log(`DB Seed: Finished (${t1 - t0})`)
};

seed();