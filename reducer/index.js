import {combineReducers} from 'redux';
import quiz from './Quiz-reducer';
const reducer=combineReducers({
  quiz:quiz
}
)

export default reducer;
