import { RoleType } from './role'
import { OriginType } from './origin'

export enum ChampionTier {
  One,
  Two,
  Three,
  Four,
  Five,
  Seven,
  __length,
}

export type Champion = {
  id: string
  image: string
  displayName: string
  origins: OriginType[]
  roles: RoleType[]
  tier: ChampionTier
}
