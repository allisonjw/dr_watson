export const createUser = user => ({
  type: 'CREATE_USER',
  user
});

export const removeUser = () => ({
  type: 'REMOVE_USER'
});

export const hasErrored = errorMsg => ({
  type: 'HAS_ERRORED',
  errorMsg
});

export const addMessage = (messages, message, isUser) => ({
  type: 'ADD_MESSAGE',
  messages: [...messages, { message, isUser }]
});

export const removeMessage = () => ({
  type: 'REMOVE_MESSAGE' 
});