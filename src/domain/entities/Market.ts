import { randomUUID as uuid } from "crypto";
import { Player } from "./Player"

export class Market {
  private players: Player[] = []
  readonly id: string
  constructor(
    readonly name: string,
    id?: string
  ) { 
    this.id = id || uuid()
  }

  addPlayer(player: Player) {
    this.players.push(player)
  }

  sellPlayer(id: string) {
    const player = this.players.find(p => p.id === id)
    if (!player) throw new Error('Nenhum jogador encontrado.')
    this.players = this.players.filter(p => p.id !== id)
    return player
  }

  getPlayerById(id: string) {
    const player = this.players.find(p => p.id === id)
    if (!player) throw new Error('Nenhum jogador encontrado.')
    return player
  }

  public get getPlayers(): Player[] {
    return this.players
  }

  toJSON(){
    return {
      id: this.id,
      name: this.name
    }
  }
}
