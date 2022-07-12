import { ExpressAdapter } from "./adapters";
import { RouterMarket, RouterTeam } from "./api";
import { TeamRepositoryInMemory } from "./repositories";
import { MarketRepoInMemory } from "./repositories/InMemory/MarketRepository";

const marketRepo = new MarketRepoInMemory()
const teamRepo = new TeamRepositoryInMemory()

const httpServer = new ExpressAdapter()

const routerMarket = new RouterMarket(httpServer, marketRepo)
const routerTeam = new RouterTeam(httpServer, teamRepo, marketRepo)

routerMarket.init()
routerTeam.init()

httpServer.listen(3333, () => {
  console.log('Express run: http://localhost:3333')
})