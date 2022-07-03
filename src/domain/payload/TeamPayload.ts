export type CreateTeamInput = {
  name: string,
  patrimony: string
}

export type CreateTeamOutput = CreateTeamInput & {
  id: string
}

// export type UpdatePlayer = Partial<CreateTeamInput>