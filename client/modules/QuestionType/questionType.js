import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import CreateQuestion from './components/CreateQuestion';
import Header from './components/Header';

const questionTypes = [
    'True False',
    'Multiple Choice',
    'Drag to Choices',
    'Drag to Match',
    'Drag to Blanks',
    'Drag to Orders',
    'Short Answers',
    'Image Map',
    'Passage Click',
    'Drag Replace',
    'Drag to image',
    'Numeric',
    'Utilities',
]


class QuestionType extends Component {
    constructor(props) {
        super(props);
        this.state = { questionTypeValue: props.questionTypeId, qustionTypeString: questionTypes[props.questionTypeId] };
        this.onChangeQuestion = this.onChangeQuestion.bind(this);
    }

    onChangeQuestion(event, index, value) {
        this.setState({ questionTypeValue: value, qustionTypeString: questionTypes[value] });
        browserHistory.push(`/questionType/${value}`);
    }

    render() {
        return (
            <div>
                <Header questionType={this.state.qustionTypeString} />
                {this.props.children}
                <CreateQuestion questionType={this.state.questionTypeValue} questionTypes={questionTypes} onChangeQuestion={this.onChangeQuestion} />
            </div>
        );
    }
}

QuestionType.propTypes = {
    questionTypeId: PropTypes.number.isRequired,
    children: PropTypes.object,
};


function mapStateToProps(state, ownProps) {
    return {
        questionTypeId: parseInt(ownProps.params.value || 0),
    };
}

export default connect(mapStateToProps)(QuestionType);