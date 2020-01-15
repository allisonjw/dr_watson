import { messages } from './messages';

describe('messages', () => {
 it('should return the state if the type does not match', () => {
   const expected = [];
   const result  = messages(undefined, {});

   expect(result).toEqual(expected);
 });

 it('should return an empty array if "REMOVE_MESSAGES" matches', () => {
    const expected = [];
    const actionObj = {
        type: 'REMOVE_MESSAGES'
    }

    const result = messages(undefined, actionObj);
    expect(result).toEqual(expected);
 });

 it('should return messages if "ADD_MESSAGE" matches', () => {
    const mockUser = true
    const mockMsg = "Hi there, my name is Dr. Watson.";
    const mockMessages = [[], { isUser: mockUser }, { message: mockMsg }, { message: mockMsg, isUser: mockUser }]
    const expected = mockMessages;
    const actionObj = {
        type: 'ADD_MESSAGE',
        messages: mockMessages
    };

    const result = messages(undefined, actionObj);
    expect(result).toEqual(expected);
 });
});