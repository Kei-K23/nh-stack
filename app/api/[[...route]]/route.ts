import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import users from './users'

const app = new Hono().basePath('/api');

// Change other route here to get type-safe
// e.g const routes = app.route("/users", users)
// .route("/products", products);

const routes = app.route("/users", users);

export const GET = handle(app);
export const POST = handle(app);
export const PATCH = handle(app);
export const DELETE = handle(app);
export const PUT = handle(app);

// AppType will be use for client data fetching for type-safe
export type AppType = typeof routes;