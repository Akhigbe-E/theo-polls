import * as trpc from "@trpc/server";
import { z } from "zod";
import { prisma } from "../../db/client";

export const questionRouter = trpc.router().query("getAll", {
  async resolve() {
    return prisma.pollQuestion.findMany();
  },
});
