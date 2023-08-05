import * as UserActionCreators from './user';
import * as TodoActionCreators from './todo';
import * as PhotoActionCreators from './photo';


const ActionCreators = {
    ...UserActionCreators,
    ...TodoActionCreators,
    ...PhotoActionCreators
}

export default ActionCreators;
