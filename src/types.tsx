export type StateType = {
  giff: GiffProps
  isLoading: boolean
  isError: boolean
}

export type GiffProps = {
  url: string
  title: string
  id: string
}
