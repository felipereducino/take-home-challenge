import { api, privateKey, publicKey } from '../configs/api'
import { generateMarvelAuth } from '../utils/generateMarvelAuth'
import { Character, MarvelApiResponse } from './interfaces'

const { ts, hash } = generateMarvelAuth(publicKey, privateKey)

const ITEMS_PER_REQUEST = 10

export const Characters = async (): Promise<Character[]> => {
  try {
    const response = await api.get<MarvelApiResponse>(
      `/characters?limit=${ITEMS_PER_REQUEST}&ts=${ts}&apikey=${publicKey}&hash=${hash}`
    )
    return response.data.data.results
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
