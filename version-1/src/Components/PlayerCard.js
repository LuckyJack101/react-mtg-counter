import React from 'react'
import PropTypes from 'prop-types'

function PlayerCard(props) {
  return (
    <div>
      <div>
        <span>{props.name}</span>
      </div>
    </div>
  )
}

PlayerCard.propTypes = {
  name: PropTypes.string.isRequired,
  health: PropTypes.number.isRequired,
}

export default PlayerCard

