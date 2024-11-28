export interface MarvelApiResponse {
  code: number
  status: string
  copyright: string
  attributionText: string
  attributionHTML: string
  etag: string
  data: MarvelApiDataContainer
}

export interface MarvelApiDataContainer {
  offset: number
  limit: number
  total: number
  count: number
  results: Character[]
}

export interface Character {
  id: number
  name: string
  description: string
  modified: string
  thumbnail: Thumbnail
  resourceURI: string
  comics: ComicsList
  series: SeriesList
  stories: StoriesList
  events: EventsList
  urls: Url[]
}

export interface Thumbnail {
  path: string
  extension: string
}

export interface ComicsList {
  available: number
  collectionURI: string
  items: ComicSummary[]
  returned: number
}

export interface ComicSummary {
  resourceURI: string
  name: string
}

export interface SeriesList {
  available: number
  collectionURI: string
  items: SeriesSummary[]
  returned: number
}

export interface SeriesSummary {
  resourceURI: string
  name: string
}

export interface StoriesList {
  available: number
  collectionURI: string
  items: StorySummary[]
  returned: number
}

export interface StorySummary {
  resourceURI: string
  name: string
  type: string
}

export interface EventsList {
  available: number
  collectionURI: string
  items: EventSummary[]
  returned: number
}

export interface EventSummary {
  resourceURI: string
  name: string
}

export interface Url {
  type: string
  url: string
}
