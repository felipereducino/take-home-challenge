import { useQuery } from '@tanstack/react-query'
import { CharacterDetails, Characters } from '../services/characters'
import { Character } from '../services/interfaces'

interface UseCharactersResult {
  characters: Character[] | undefined
  isCharactersLoading: boolean
  error: unknown
  getCharacterDetails: (characterId: string) => {
    characterDetail: Character | undefined
    isCharacterDetailLoading: boolean
    detailError: unknown
  }
}

function useCharacters(): UseCharactersResult {
  const {
    data: characters,
    isLoading: isCharactersLoading,
    error,
  } = useQuery<Character[], unknown>({
    queryKey: ['characters'],
    queryFn: () => Characters(),
  })

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
    isCharactersLoading,
    error,
    getCharacterDetails,
  }
}

export default useCharacters
