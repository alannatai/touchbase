import { connect } from 'react-redux';
import NewMessageBarComponent from './NewMessageBar';
import { addMessage } from '../../actions/chatActions';

const mapDispatchToProps = (dispatch) => ({
  dispatch: (base, message, author) => {
    dispatch(addMessage(base, message, author));
  },
});

export const NewMessageBar = connect(
  () => ({}),
  mapDispatchToProps
)(NewMessageBarComponent);
