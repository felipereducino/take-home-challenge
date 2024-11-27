// Root Response Interface
export interface MarvelApiResponse {
  code: number
  status: string
  copyright: string
  attributionText: string
  attributionHTML: string
  etag: string
  data: MarvelApiDataContainer
}

// Data Container Interface
export interface MarvelApiDataContainer {
  offset: number
  limit: number
  total: number
  count: number
  results: Character[]
}

// Character Interface
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

// Thumbnail Interface
export interface Thumbnail {
  path: string
  extension: string
}

// Comics List Interface
export interface ComicsList {
  available: number
  collectionURI: string
  items: ComicSummary[]
  returned: number
}

// Comic Summary Interface
export interface ComicSummary {
  resourceURI: string
  name: string
}

// Series List Interface
export interface SeriesList {
  available: number
  collectionURI: string
  items: SeriesSummary[]
  returned: number
}

// Series Summary Interface
export interface SeriesSummary {
  resourceURI: string
  name: string
}

// Stories List Interface
export interface StoriesList {
  available: number
  collectionURI: string
  items: StorySummary[]
  returned: number
}

// Story Summary Interface
export interface StorySummary {
  resourceURI: string
  name: string
  type: string
}

// Events List Interface
export interface EventsList {
  available: number
  collectionURI: string
  items: EventSummary[]
  returned: number
}

// Event Summary Interface
export interface EventSummary {
  resourceURI: string
  name: string
}

// URL Interface
export interface Url {
  type: string
  url: string
}
