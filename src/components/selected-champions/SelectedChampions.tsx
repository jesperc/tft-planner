import React from 'react'
import ChampionIcon from '../champion-icon'
import StatusBlock from '../status-block'
import './SelectedChampions.scss'

export interface SelectedChampionsProps {
  selectedIds: string[]
  onClick: Function
  onClear: Function
}

const chunkSize = 100

const SelectedChampions: React.FC<SelectedChampionsProps> = ({ selectedIds, onClick, onClear }) => {
  return (
    <div className="selected-champions">
      <ul>
        {selectedIds.map(id => (
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
