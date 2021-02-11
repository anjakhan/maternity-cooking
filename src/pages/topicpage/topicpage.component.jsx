import React from 'react';
import { connect } from 'react-redux';

import TopicPreview from '../../components/topic-preview/topic-preview.component';

import { selectTopic } from '../../redux/recipes/recipes.selectors';

const TopicPage = ({ topics }) => (
    <>
        <TopicPreview topic={topics.topic} />
    </>
);

const mapStateToProps = (state, ownProps) => ({
    topics: selectTopic(ownProps.match.params.topicId)(state)
});

export default connect(mapStateToProps)(TopicPage);