import React from 'react';
import { connect } from 'react-redux';
import { fetchSitter } from '../../actions/sitter_actions';
import SitterShow from './sitter_show';

const msp = (state, ownProps) => {
    return {
        sitter: state.entities.sitters[ownProps.match.params.id],
    };
};

const mdp = dispatch => {
    return {
        fetchSitter: id => dispatch(fetchSitter(id))
    };
};

export default connect(msp, mdp)(SitterShow)
