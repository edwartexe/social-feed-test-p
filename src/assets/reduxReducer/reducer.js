import {GET_FEED, SET_FEED_TIMER, SET_FEED_INDEX} from '../reduxStore/actionTypes';
import defaultFeed from '../kindle.json';

export const INITIAL_STATE = {
    SocialPosts: defaultFeed,
    FeedTimer: 0,
    FeedIndex: 0
}

const reducer = (state, action) => {
    switch (action.type){
        case GET_FEED:
            return {...state, SocialPosts: action.payload}
        case SET_FEED_TIMER:
            return {...state, FeedTimer: action.payload}
        case SET_FEED_INDEX:
            return {...state, FeedIndex: action.payload}
        default:
            return state;
    }
}

export default reducer;