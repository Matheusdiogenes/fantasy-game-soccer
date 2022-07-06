export type CreatePlayerInput = {
  name: string,
  position: string,
  salary: number
}

export type CreatePlayerOutput = CreatePlayerInput & {
  id: string,
  idTeam: string,
}

export type UpdatePlayer = Partial<CreatePlayerInput>