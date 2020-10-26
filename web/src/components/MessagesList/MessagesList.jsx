import React from 'react';
import PropTypes from 'prop-types';
import Message from '../Message/Message';

function MessagesList({ messages, base, pathname }) {
  return (
    <div>
      <ul>
        {messages.map((message) =>
          pathname.includes(`/user/bases/${message.base.uuid}`) ? (
            <Message key={message.id} {...message} />
          ) : null
        )}
      </ul>
    </div>
  );
}

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default MessagesList;
