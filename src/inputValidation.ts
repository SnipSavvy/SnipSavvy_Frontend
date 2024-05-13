import * as zod from 'zod'

export const addSnippetBody = zod.object({
    tags: zod.string().array(),
    title: zod.string(),
    description: zod.string().max(50),
    code: zod.string()
})
export const addWorkspaceBody = zod.object({
    description: zod.string(),
    name: zod.string()
})
export const addCollectionBody = zod.object({
    id: zod.string(),
    name: zod.string(),
    description: zod.string()
})

