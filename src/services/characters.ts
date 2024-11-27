import { api, privateKey, publicKey } from '../configs/api'
import { generateMarvelAuth } from '../utils/generateMarvelAuth'
import { Character, MarvelApiResponse } from './interfaces'

const { ts, hash } = generateMarvelAuth(publicKey, privateKey)

export const ITEMS_PER_REQUEST = 20

export interface CharactersResponse {
  results: Character[]
  total: number
}

export const Characters = async (
  filter: string,
  orderBy: string,
  page: number
): Promise<CharactersResponse> => {
  try {
    const nameStartsWith = filter ? `&nameStartsWith=${filter}` : ''
    const orderByParam = orderBy ? `&orderBy=${orderBy}` : ''
    const offset = (page - 1) * ITEMS_PER_REQUEST
    const offsetParam = `&offset=${offset}`
    const response = await api.get<MarvelApiResponse>(
      `/characters?limit=${ITEMS_PER_REQUEST}${nameStartsWith}${orderByParam}${offsetParam}&ts=${ts}&apikey=${publicKey}&hash=${hash}`
    )
    return {
      results: response.data.data.results,
      total: response.data.data.total,
    }
  } catch (error) {
    throw error
  }
}

export const CharacterDetails = async (
  characterId: string
): Promise<Character> => {
  try {
    const response = await api.get<MarvelApiResponse>(
      `/characters/${characterId}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
    )
    return response.data.data.results[0]
  } catch (error) {
    throw error
  }
}
