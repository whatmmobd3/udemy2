import { combineReducers } from 'redux'

const songsReducer = () => {
    return [
        { title: 'No asd', duration: '4:05' },
        { title: '123 asd', duration: '5:05' },
        { title: '333 asd', duration: '2:05' },
        { title: 'dfgdfg asd', duration: '3:00' },
    ]
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})