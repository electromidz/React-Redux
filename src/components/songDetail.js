import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
if( ! song ) return <h5>Please select one song!</h5>;
return (
    <div>
        just for test dont work Blgo :(
        <h3>Details for:</h3>
        <p>Title: {song.title}</p>
        <p>Duration: {song.duration}</p>
    </div>
);
};

const mapStateToProps = (state) => {
    return { song :state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail);