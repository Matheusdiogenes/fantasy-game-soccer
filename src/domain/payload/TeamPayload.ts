export type CreateTeamInput = {
  name: string,
  patrimony: number
}

export type CreateTeamOutput = CreateTeamInput & {
  id: string
}

// export type UpdatePlayer = Partial<CreateTeamInput>