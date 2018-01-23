import React from 'react'
import PropTypes from 'prop-types'

const Square = ({ title, id, color, handleEditSquare }) => {

  return (
    <div className='Square'
         style={{backgroundColor:color}}
         onClick={() => handleEditSquare({ title, id, color })}>
      <p>{`title: ${title}`}</p>
    </div>
  )
}

export default Square

Square.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  color: PropTypes.string,
  handleEditSquare: PropTypes.func,
};
