import * as actions from '../actions';

describe('actions', () => {
    it('should have a type of CREATE_USER', () => {
        const user = {};
        const expectedAction = {
            type: 'CREATE_USER',
            user
        };
    const result = actions.createUser(user);
    expect(result).toEqual(expectedAction);
    });

    it('should have a type of REMOVE_USER', () => {
        const user = {};
        const expectedAction = {
            type: 'REMOVE_USER',
        };

    const result = actions.removeUser(user);
    expect(result).toEqual(expectedAction);   
    });

    it('should have a type of HAS_ERRORED', () => {
        const errorMsg = '';
        const expectedAction = {
            type: 'HAS_ERRORED',
            errorMsg
        };

    const result = actions.hasErrored(errorMsg);
    expect(result).toEqual(expectedAction);    
    });

    it('should have a type of ADD_MESSAGE', () => {
      let mockMsg = "Hi there, my name is Dr. Watson."
      let mockIsUser = false;
      const mockMessages = [[], {}]
      let expected = {
        type: 'ADD_MESSAGE',
        messages: [...mockMessages, { 
          message: mockMsg,
          isUser: mockIsUser }]
      }

      const result = actions.addMessage(mockMessages, mockMsg, mockIsUser);
      expect(result).toEqual(expected);
    })
    
    it('should have a type of REMOVE_MESSAGES', () => {
        const messages = [];
        const expectedAction = {
            type: 'REMOVE_MESSAGES'
        };

    const result = actions.removeMessages(messages);
    expect(result).toEqual(expectedAction);    
    });
});    