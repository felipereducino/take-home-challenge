import { useQuery } from '@tanstack/react-query'
import {
  CharacterDetails,
  Characters,
  CharactersResponse,
} from '../services/characters'
import { Character } from '../services/interfaces'

interface UseCharactersResult {
  characters: Character[] | undefined
  total: number
  isCharactersLoading: boolean
  error: unknown
  getCharacterDetails: (characterId: string) => {
    characterDetail: Character | undefined
    isCharacterDetailLoading: boolean
    detailError: unknown
  }
}

function useCharacters(
  filter: string,
  orderBy: string,
  page: number
): UseCharactersResult {
  const {
    data,
    isLoading: isCharactersLoading,
    error,
  } = useQuery<CharactersResponse, unknown>({
    queryKey: ['characters', filter, orderBy, page],
    queryFn: () => Characters(filter, orderBy, page),
    staleTime: 5000,
  })

  const characters = data?.results
  const total = data?.total ?? 0

  const getCharacterDetails = (characterId: string) => {
    const {
      data: characterDetail,
      isLoading: isCharacterDetailLoading,
      error: detailError,
    } = useQuery<Character, unknown>({
      queryKey: ['characterDetail', characterId],
      queryFn: () => CharacterDetails(characterId),
      enabled: !!characterId,
    })
    return { characterDetail, isCharacterDetailLoading, detailError }
  }

  return {
    characters,
    total,
    isCharactersLoading,
    error,
    getCharacterDetails,
  }
}

export default useCharacters
