import React from 'react';
import { selectedSong } from '../actions';
import SongList from '../components/songList';
import SongDetail from './songDetail';

export default () => {
    return (
        <div className="ui container grid">
            <div className="ui row">
                <div className="colum eight wide"> 
                    <SongList />
                </div>
                <div className="colume eight wide">
                    <SongDetail/>
                </div>
            </div>
        </div>
    );
};