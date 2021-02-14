//Action creator

export const selectedSong = (song) => {
    return{
        type: SONG_SELECTED,
        payload:song,
    };
};