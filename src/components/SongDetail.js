import React from 'react'
import { connect } from 'react-redux'

const App = ({ song }) => {

    if (!song) {
        return <div>Choose Songs</div>
    } else {
        return (
            <div>
                Title: {song.title}
                <br />
                Duration : {song.duration}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { song: state.selectedSong }
}


export default connect(mapStateToProps)(App)