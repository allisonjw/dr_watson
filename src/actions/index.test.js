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

    it.skip('should have a type of "ADD_MESSAGE"', () => {
        const mockUser = true
        const mockMsg = "Hi there, my name is Dr. Watson.";
        const mockMessages2 = [{}, {}]
        const mockMessages = 
          {type: 'ADD_MESSAGE',
          messages: [...mockMessages2, { isUser: mockUser }, {message: mockMsg}, {message: mockMsg, isUser: mockUser}]}
        
        const expectedAction = {
          type: 'ADD_MESSAGE',
          messages: mockMessages
        }
    
    const result = actions.addMessage(mockMessages, mockMsg, mockUser);
    console.log(result)
    expect(result).toEqual(expectedAction);
    });
    
    it.skip('should have a type of REMOVE_MESSAGES', () => {
        const mockMessages = [];
        const expectedAction = {
            type: 'REMOVE_MESSAGES',
            messages: mockMessages
        };

    const result = actions.removeMessages();
    console.log(result)
    expect(result).toEqual(expectedAction);    
    });
});    