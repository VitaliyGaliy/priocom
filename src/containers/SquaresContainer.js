import { connect } from 'react-redux'
import { actions } from '../modules/actions'
import SquaresList from '../components/SquaresList'

const mapActionCreators = {
  ...actions,
}

const mapStateToProps = (state) => ({
    items: state.square.items,
    isEdit: state.square.isEdit,
    editedItem: state.square.editedItem,
  })

export default connect(mapStateToProps, mapActionCreators)(SquaresList)
