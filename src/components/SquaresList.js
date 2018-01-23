import React from 'react'
import PropTypes from 'prop-types'
import Square from './Square'
import EditForm from './Form'

class SquaresList extends React.Component {
  handleEditSquare = (e) => {
    const { isEdit, editSquare } = this.props;
    if(!isEdit) {
      editSquare(e)
    }
    return
  }

  render () {
    const { items, isEdit, saveChanges } = this.props;
    return(
      <div className='mainContainer'>
        <div className='squaresContainer'>
          {
            items.map((i, key) => (
              <Square key={i.id} {...i} handleEditSquare={this.handleEditSquare}/>
            ))
          }
        </div>
        <div >
          {isEdit && <EditForm saveChanges={saveChanges}/>}
        </div>
      </div>
    )
  }
}

SquaresList.propTypes = {
  items: PropTypes.array,
  isEdit: PropTypes.bool,
  editSquare: PropTypes.func,
  saveChanges: PropTypes.func,
};

export default SquaresList;
