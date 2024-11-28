import { Route, Routes } from 'react-router-dom'
import NotFoundPage from '../pages/NotFoundPage'

import Layout from '../layout/Layout'

import HomePage from '../layout/HomePage'
import CharactersPage from '../pages/CharactersPage'
import CharacterDetailsPage from '../pages/CharacterDetailsPage'
import BattleArenaPage from '../pages/BattleArenaPage'

function Router() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/characters" element={<CharactersPage />} />
        <Route path="/explore" element={<CharactersPage />} />
        <Route path="/battle" element={<BattleArenaPage />} />
        <Route
          path="/characters/:characterId"
          element={<CharacterDetailsPage />}
        />
      </Route>
    </Routes>
  )
}

export default Router
