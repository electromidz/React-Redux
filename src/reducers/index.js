import { combineReducers } from 'redux'; 

const songsReducer = () => {
    return [
        {id: 1, title: "Zim Zim", duration: "4:05"},
        {id: 2, title: "Behet Ghol Midam", duration: "2:30"},
        {id: 3, title: "Bigharar", duration: "3:05"},
        {id: 4, title: "Gole Yakh", duration: "4:00"}
    ];
};


const selectedSongReducer = (selectedSong = null ,action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    };
    return selectedSong;
};

export default combineReducers({
    songs : songsReducer,
    selectedSong : selectedSongReducer
});