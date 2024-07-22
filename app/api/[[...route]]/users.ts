import { Hono } from "hono";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth"

// This is sample route that follow the priactice of creating type-safe
// RPC for Nextjs (Front-end) and Hono(Back-end)
// For more imformation read at https://hono.dev/docs/guides/rpc

const app = new Hono()
    // This is public route
    .get("/", async (c) => {
        return c.json({
            data: {
                message: "Hello Nextjs + Hono"
            }
        });
    })
    // This route is protected by Clerk Hono middleware
    .get("/protected", clerkMiddleware(), async (c) => {
        const auth = getAuth(c);
        // If user is not authenticated
        if (!auth?.userId) {
            return c.json({
                error: "Unauthorize user"
            }, 401);
        }

        return c.json({
            data: {
                userId: auth.userId
            }
        });
    });

export default app;