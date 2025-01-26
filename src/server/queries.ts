import 'server-only';
import { db } from './db';
import { auth } from '@clerk/nextjs/server';

export async function getMyImages() {
    const { userId } = await auth(); // Await the auth() function by ChatGPT

    if (!userId) throw new Error("Unauthorized");

    const images = await db.query.images.findMany({
        where: (model, { eq }) => eq(model.userId, userId),
        orderBy: (model, { desc }) => desc(model.id),
    });
    return images;
};
