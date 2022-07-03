export type CreatePlayerInput = {
  name: string,
  position: string,
  salary: number
}

export type CreatePlayerOutput = CreatePlayerInput & {
  id: string
}

export type UpdatePlayer = Partial<CreatePlayerInput>