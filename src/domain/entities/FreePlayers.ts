import { Player } from "./Player"

export class FreePlayers {
  private players: Player[] = []

  addPlayer(player: Player) {
    this.players.push(player)
  }

  sellPlayer(id: string) {
    const player = this.players.find(p => p.id === id)
    if (!player) throw new Error('Nenhum jogador encontrado.')
    this.players = this.players.filter(p => p.id !== id)
    return player
  }

  amountPlayer() {
    return this.players.length
  }

  getPlayerById(id: string) {
    const player = this.players.find(p => p.id === id)
    if (!player) throw new Error('Nenhum jogador encontrado.')
    return player
  }

  getPlayers() {
    if (!this.players) throw new Error('Nenhum jogador encontrado.')
    return this.players
  }
}
