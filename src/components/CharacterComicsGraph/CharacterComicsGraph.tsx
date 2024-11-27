import React from 'react'
import { ResponsiveCirclePacking } from '@nivo/circle-packing'
import { Character } from '../../services/interfaces'

interface CharacterComicsGraphProps {
  characters: Character[]
}

const CharacterComicsGraph: React.FC<CharacterComicsGraphProps> = ({
  characters,
}) => {
  const data = {
    name: 'Characters',
    children: characters.map((character) => ({
      name: character.name,
      value: character.comics.available,
    })),
  }

  return (
    <div className="h-96 w-full bg-[#121212]">
      <ResponsiveCirclePacking
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        id="name"
        value="value"
        colors={{ scheme: 'nivo' }}
        childColor={{
          from: 'color',
          modifiers: [['brighter', 0.4]],
        }}
        padding={4}
        enableLabels={true}
        labelsFilter={(node) => node.node.depth === 1}
        labelsSkipRadius={10}
        labelTextColor={{
          from: 'color',
          modifiers: [['darker', 3]],
        }}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.5]],
        }}
        animate={true}
        motionConfig="gentle"
        tooltip={({ id, value, color }) => (
          <div
            style={{
              padding: 12,
              color,
              background: '#222222',
            }}
          >
            <strong>{id}</strong>: {value} comics
          </div>
        )}
      />
    </div>
  )
}

export default CharacterComicsGraph
