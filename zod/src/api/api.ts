import z from "zod";
import { env } from "../utils/env";

const getUserSchema = z.object({
    limit: z.number(),
    offset: z.number()
})

type UsersFilters = z.infer<typeof getUserSchema>

export async function getUsers(filters: UsersFilters) {
    const result = getUserSchema.safeParse(filters)

    if (result) {
        return "Go ahead"
    }

    fetch('/api', {
        headers: {
            Authorization: `Bearer ${env.SECRET_KEY}`
        }
    })
}