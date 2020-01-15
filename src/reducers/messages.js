export const messages = (state=[], action) => {
    switch (action.type) {
      case 'ADD_MESSAGE':
        return action.messages
      case 'REMOVE_MESSAGES':
        return []
      default:
        return state;
    }
};