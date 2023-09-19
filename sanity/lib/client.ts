import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token: "sknfibgsNoZsp5dGBvGks0WwmQRI3BEuquK15V4nfWUNcJ6Vw4T3mhWsrInZ6HT5CpdmvqXh1Q3z671JAxR0M5HnDIKnmMx7oRUFqpBIhluIYW5WqhsfsKrG6ooKm5v8id1KiPwRE3jZOZW8BYr0K98oT2h5Plg1hFck3PxLF2Vi6FVGh09Z"
})
