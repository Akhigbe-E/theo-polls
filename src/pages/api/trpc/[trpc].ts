import * as trpcNext from "@trpc/server/adapters/next";
import { appRouter } from "../../../server/router/index";

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});
