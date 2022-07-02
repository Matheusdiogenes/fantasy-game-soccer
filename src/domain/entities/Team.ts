import { Player } from "./Player"

export class Team {
  constructor(
    public name: string,
    public patrimony: number,
    private players: Player[] = []
  ) { }

  addPlayerToTeam(player: Player) {
    this.patrimony -= player.getSalary
    this.players.push(player)
  }

  sellPlayer(id: string) {
    if (this.amountPlayer() === 0) throw new Error('Nenhum jogador para vender/dispensar.')
    const player = this.getPlayer(id)
    this.patrimony += player.getSalary
    this.players = this.players.filter(p => p.id !== id)
  }

  getPlayer(id: string): Player {
    const player = this.players.find(p => p.id === id)
    if (!player) throw new Error('Nenhum jogador encontrado.')
    return player
  }

  amountPlayer() {
    return this.players.length
  }
}
