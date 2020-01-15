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

});    