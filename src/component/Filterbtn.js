import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../action'

class Filterbtn extends Component {
    render() {
        return (
            <button
                onClick={this.props.onClick}
                disabled={this.props.active}
                style={{
                    marginLeft: '4px',
                }}
            >
                {this.props.children}
            </button>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        active: ownProps.filter === state.visibilityFilter
    };
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Filterbtn);