import React, { useEffect, useMemo,  useReducer } from 'react';
import styles from '../mainPage/mainPage.module.css';
import PropTypes from 'prop-types'; 
import reducer, { INITIAL_STATE } from '../assets/reduxReducer/reducer';
import {GET_FEED, SET_FEED_TIMER, SET_FEED_INDEX} from '../assets/reduxStore/actionTypes';


function FeedComponent (props) {

    const feedStartId = "946821889648979968";

    const feedLimit = props.feedLimit || 3;
    const feedURL = props.feedURL || "http://api.massrelevance.com/MassRelDemo/kindle.json";
    const updateInterval = props.updateInterval || 10000;

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

    
    async function gottenFeed (url) { 
        fetch(
            url,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                mode: 'no-cors'
            }
        )
        .then(responce=> responce.json())
        .then(result=>{
            console.log(result);
            dispatch({ type: GET_FEED, payload: result})
        })
        .catch(err=>console.log(err));
    }


    useEffect(()=>{
        gottenFeed(feedURL);
    },[feedURL]);

    useEffect(()=>{
        const interval = setInterval(
            () => dispatch({ type: SET_FEED_TIMER, payload: Date.now()}),
            updateInterval
        );
        return () => {
            clearInterval(interval);
          };
    }, [updateInterval]);

    useEffect(()=>{
        if(state.FeedIndex+1 < state.SocialPosts.length){
            dispatch({ type: SET_FEED_INDEX, payload: state.FeedIndex+1})
        }else{
            dispatch({ type: SET_FEED_INDEX, payload: 0})
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [state.FeedTimer]);

    const LatestFeed = useMemo(()=>{
        return state.SocialPosts.slice(state.FeedIndex, state.FeedIndex+feedLimit);
    },[state.FeedIndex,  state.SocialPosts, feedLimit]);

    
    const SinglePost = (postSource, index) => {
        return (
            <div key={index} className={styles.postContainer}>
                <div className={styles.postTextContainer}>
                    <p className={styles.postText}>{postSource.text}</p>
                    <p className={styles.postAuthor}>-{postSource.user?.name}</p>
                </div>
                <p className={styles.postDate}>{postSource.created_at}</p>
            </div>
        );
    }
    
    return (
        <div className={styles.FeedSection}>
            {LatestFeed.map((post, index)=>SinglePost(post, index))}
        </div>
    )
}

FeedComponent.propTypes = {
    feedLimit: PropTypes.number,
    feedURL: PropTypes.string,
    updateInterval: PropTypes.number
}

export default FeedComponent;