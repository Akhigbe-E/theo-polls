import * as trpc from "@trpc/server";
import { z } from "zod";
import { prisma } from "../../db/client";

export const questionRouter = trpc
  .router()
  .query("getAll", {
    async resolve() {
      return prisma.pollQuestion.findMany();
    },
  })
  .mutation("create", {
    input: z.object({
      question: z.string().min(5, "Make a longer question").max(500, "Make a shorter question"),
    }),

    async resolve({ input }) {
      return await prisma.pollQuestion.create({
        data: {
          question: input.question,
        },
      });
    },
  });
