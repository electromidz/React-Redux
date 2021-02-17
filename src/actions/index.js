import jasonPlaceHolder from '../apis/jsonPlaceHolder';



export const fetchPosts = () => async (dispatch) => {
        const response =  await jasonPlaceHolder.get('/posts');
        dispatch({
            type: 'FETCH_POSTS',
            payload: response
        });
};