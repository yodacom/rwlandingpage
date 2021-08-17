import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserExampleCreateArgs>({
  userExample: {
    one: { email: 'String7862762' },
    two: { email: 'String6540289' },
  },
})

export type StandardScenario = typeof standard
