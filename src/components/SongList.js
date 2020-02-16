import React from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions/index'

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map(element => {
            return (
                <div className="item" key={element.title}>
                    <div className="content">
                        {element.title}
                    </div>
                    <div className="right floated content">
                        <button className="ui button primary" onClick={() => this.props.selectSong(element)}>
                            Select
                    </button>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { songs: state.songs }
}

export default connect(
    mapStateToProps,
    { selectSong }
)(SongList)