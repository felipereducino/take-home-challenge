import { Route, Routes } from 'react-router-dom'
import NotFoundPage from '../pages/NotFoundPage'

import Layout from '../layout/Layout'

import HomePage from '../layout/HomePage'
import CharacterList from '../components/template/CharactersList'

function Router() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/explore" element={<CharacterList />} />
      </Route>
    </Routes>
  )
}

export default Router
