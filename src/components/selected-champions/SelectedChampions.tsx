import React from 'react'
import ChampionIcon from '../champion-icon'
import StatusBlock from '../status-block'
import './SelectedChampions.scss'

export interface SelectedChampionsProps {
  selectedIds: string[]
  onClick: Function
  onClear: Function
}

const chunkSize = 4

const SelectedChampions: React.FC<SelectedChampionsProps> = ({ selectedIds, onClick, onClear }) => {
  const splitToChunks = (array: string[], chunkSize: number): string[][] => {
    const result: string[][] = []
    let chunk: string[] = []
    array.forEach((item, index) => {
      if (index % chunkSize === 0 && index !== 0) {
        result.push([...chunk])
        chunk = []
      }
      chunk.push(item)
    })
    if (chunk.length > 0) {
      result.push(chunk)
    }
    return result
  }

  const chunks = splitToChunks(selectedIds, chunkSize)
  return (
    <div className="selected-champions">
      {chunks.map((chunk, index) => (
        <ul key={`chunk-${index}`}>
          {chunk.map(id => (
            <li key={`selected-${id}`}>
              <ChampionIcon
                className="selected-champions-icon"
                id={id}
                selected={false}
                onClick={onClick}
              />
            </li>
          ))}
        </ul>
      ))}
      {selectedIds.length > 0 && (
        <>
          <p className="selected-champions-text">
            {`${selectedIds.length} of 9`} &nbsp;
            <button className="selected-champions-button" onClick={() => onClear()}>
              Clear
            </button>
          </p>
        </>
      )}
      {/* {selectedIds.length > 0 && (
        <button className="selected-champions-button" onClick={() => onClear()}>
          Clear
        </button>
      )} */}
      {selectedIds.length > 0 && <StatusBlock selectedIds={selectedIds} />}
    </div>
  )
}

export default SelectedChampions
