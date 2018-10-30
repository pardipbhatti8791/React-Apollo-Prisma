import { Prisma } from 'prisma-binding'
import { fragmentReplacements } from "./resolvers/index";

const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql',
    endpoint: 'http://gphost:4466/default/default',
    secret: 'gagandeep@@9187',
    fragmentReplacements
})

export { prisma as default }