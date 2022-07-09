import { ExpressAdapter } from "./adapters";
import { RouterMarket } from "./api";
import { MarketRepoInMemory } from "./repositories/InMemory/MarketRepository";

const marketRepo = new MarketRepoInMemory()
const httpServer = new ExpressAdapter()
const routerMarket = new RouterMarket(httpServer, marketRepo)

routerMarket.init()

httpServer.listen(3333, () => {
  console.log('Express run: http://localhost:3333')
})