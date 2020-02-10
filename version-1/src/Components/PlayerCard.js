import React from 'react'
import PropTypes from 'prop-types'

function PlayerCard({ name, health }) {
  return (
    <div>
      <div>
        <span>{name}</span>
      </div>
      <div>
        <span>{health}</span>
      </div>
    </div>
  )
}

PlayerCard.propTypes = {
  name: PropTypes.string.isRequired,
  health: PropTypes.number.isRequired,
}

export default PlayerCard

