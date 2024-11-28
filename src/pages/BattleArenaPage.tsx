import React, { useState, useEffect, useContext } from 'react'
import { Character } from '../services/interfaces'
import { motion, AnimatePresence } from 'framer-motion'
import useCharacters from '../hooks/useCharacter'
import Loader from '../components/Loader/Loader'
import { FilterContext } from '../context/FilterContext'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import Button from '../components/Button/button'

function BattleArenaPage() {
  const { filter, orderBy, page } = useContext(FilterContext)
  const {
    characters = [],
    isCharactersLoading,
    error,
  } = useCharacters(filter, orderBy, page)

  const [availableCharacters, setAvailableCharacters] = useState<Character[]>(
    []
  )
  const [battleCharacters, setBattleCharacters] = useState<Character[]>([])
  const [winner, setWinner] = useState<Character | null>(null)
  const [showClash, setShowClash] = useState(false)

  const initializedRef = React.useRef(false)

  useEffect(() => {
    if (!initializedRef.current && characters.length > 0) {
      setAvailableCharacters(characters)
      initializedRef.current = true
    }
  }, [characters])

  useEffect(() => {
    if (battleCharacters.length === 2) {
      setShowClash(true)
      const clashTimer = setTimeout(() => {
        setShowClash(false)
        const [char1, char2] = battleCharacters
        const determinedWinner =
          char1.comics.available >= char2.comics.available ? char1 : char2
        setWinner(determinedWinner)
      }, 2000)

      return () => clearTimeout(clashTimer)
    }
  }, [battleCharacters])

  const resetBattle = () => {
    setAvailableCharacters([...availableCharacters, ...battleCharacters])
    setBattleCharacters([])
    setWinner(null)
  }

  const onDragEnd = (result: any) => {
    const { source, destination } = result

    if (!destination) {
      return
    }

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return
    }

    if (
      source.droppableId === 'available' &&
      destination.droppableId === 'battle'
    ) {
      if (battleCharacters.length >= 2) {
        alert('You can only have 2 characters in the battle arena')
        return
      }
      const movedCharacter = availableCharacters[source.index]
      const newAvailableCharacters = Array.from(availableCharacters)
      newAvailableCharacters.splice(source.index, 1)
      const newBattleCharacters = Array.from(battleCharacters)
      newBattleCharacters.splice(destination.index, 0, movedCharacter)
      setAvailableCharacters(newAvailableCharacters)
      setBattleCharacters(newBattleCharacters)
    } else if (
      source.droppableId === 'battle' &&
      destination.droppableId === 'available'
    ) {
      const movedCharacter = battleCharacters[source.index]
      const newBattleCharacters = Array.from(battleCharacters)
      newBattleCharacters.splice(source.index, 1)
      const newAvailableCharacters = Array.from(availableCharacters)
      newAvailableCharacters.splice(destination.index, 0, movedCharacter)
      setBattleCharacters(newBattleCharacters)
      setAvailableCharacters(newAvailableCharacters)
    } else if (source.droppableId === destination.droppableId) {
      if (source.droppableId === 'available') {
        const newAvailableCharacters = Array.from(availableCharacters)
        const [movedCharacter] = newAvailableCharacters.splice(source.index, 1)
        newAvailableCharacters.splice(destination.index, 0, movedCharacter)
        setAvailableCharacters(newAvailableCharacters)
      } else {
        const newBattleCharacters = Array.from(battleCharacters)
        const [movedCharacter] = newBattleCharacters.splice(source.index, 1)
        newBattleCharacters.splice(destination.index, 0, movedCharacter)
        setBattleCharacters(newBattleCharacters)
      }
    }
  }

  if (isCharactersLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader size={150} color="red" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-red-500 text-lg">
          An error occurred: {(error as Error).message}
        </div>
      </div>
    )
  }

  return (
    <div className="p-4 bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-red-600 mb-8">
        Marvel Battle Arena
      </h1>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="flex flex-col gap-8">
          <div className="w-full">
            <h2 className="text-2xl font-semibold text-white mb-4 text-center">
              Available Characters
            </h2>
            <Droppable droppableId="available" direction="horizontal">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="overflow-x-auto"
                >
                  <ul
                    className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-4"
                    style={{ minWidth: '800px' }}
                  >
                    {availableCharacters.map((character, index) => (
                      <Draggable
                        key={character.id}
                        draggableId={character.id.toString()}
                        index={index}
                      >
                        {(provided) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="bg-black/80 rounded-lg shadow-lg overflow-hidden cursor-pointer"
                          >
                            <motion.div
                              className="flex flex-col items-center"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <img
                                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                                alt={character.name}
                                className="w-full h-32 object-cover rounded-t-lg"
                              />
                              <p className="text-white text-center p-2 text-sm">
                                {character.name}
                              </p>
                            </motion.div>
                          </li>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </ul>
                </div>
              )}
            </Droppable>
          </div>

          <div className="w-full">
            <h2 className="text-2xl font-semibold text-white mb-4 text-center">
              Battle Arena
            </h2>
            <Droppable droppableId="battle" direction="horizontal">
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="flex items-center justify-center gap-4 min-h-[200px] border-2 border-dashed border-red-600 rounded-lg p-4"
                >
                  {battleCharacters.map((character, index) => (
                    <Draggable
                      key={character.id}
                      draggableId={character.id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-yellow-500/80 rounded-lg shadow-lg overflow-hidden"
                        >
                          <motion.div
                            className="flex flex-col items-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <img
                              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                              alt={character.name}
                              className="w-32 h-32 object-cover rounded-t-lg"
                            />
                            <p className="text-black text-center p-2 text-sm">
                              {character.name}
                            </p>
                          </motion.div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {battleCharacters.length < 2 && (
                    <p className="text-red-600 italic">
                      Drag characters here (Max 2)
                    </p>
                  )}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        </div>
      </DragDropContext>

      <AnimatePresence>
        {showClash && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="text-white text-6xl font-bold"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.5 }}
            >
              Clash!
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {winner && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="flex flex-col items-center relative bg-gradient-to-r from-red-800 via-red-600 to-red-400 rounded-lg shadow-xl text-center p-8 max-w-md mx-auto"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className="absolute top-4 right-4 text-white text-2xl font-bold focus:outline-none"
                onClick={resetBattle}
              >
                &times;
              </button>
              <h2 className="text-4xl font-extrabold text-white">
                🎉 Winner! 🎉
              </h2>
              <p className="text-2xl text-white mt-2">
                {winner.name} claims victory!
              </p>
              <motion.img
                src={`${winner.thumbnail.path}.${winner.thumbnail.extension}`}
                alt={winner.name}
                className="w-48 h-48 mx-auto mt-6 rounded-full border-8 border-white shadow-md"
                initial={{ rotate: -180 }}
                animate={{ rotate: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              />
              <Button
                size="lg"
                variant="secondary"
                className="mt-8"
                onClick={resetBattle}
              >
                Battle Again
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default BattleArenaPage
