import { randomUUID as uuid } from "crypto";
import { Player } from "./Player"

export class Team {
  readonly id: string
  private players: Player[]
  constructor(
    readonly name: string,
    public patrimony: number,
    id?: string,
    players?: Player[]
  ) {
    this.players = players || []
    this.id = id || uuid()
  }

  addPlayerToTeam(player: Player) {
    this.patrimony -= player.getSalary
    this.players.push(player)
  }

  sellPlayer(id: string) {
    const player = this.getPlayer(id)
    this.patrimony += player.getSalary
    this.players = this.players.filter(p => p.id !== id)
  }

  getPlayer(id: string): Player {
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
      name: this.name,
      patrimony: this.patrimony,
    }
  }
}
