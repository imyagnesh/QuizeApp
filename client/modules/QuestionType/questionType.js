import React, {Component, PropTypes} from 'react';
import CreateQuestion from './components/CreateQuestion';
import Header from './components/Header';

const questionTypes = [
    'True False',
    'Multiple Choice',
    'Drag the Choices',
    'Drag to Match',
    'Drag t0 Blanks',
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
        this.state = { questionTypeValue: 0, qustionTypeString: '' };
        this.onChangeQuestion = this.onChangeQuestion.bind(this);
    }

    onChangeQuestion(event, index, value){
        this.setState({ questionTypeValue: value, qustionTypeString: questionTypes[value] });
    }
    
    render() {
        return (
            <div>
                <Header questionType={this.state.qustionTypeString} />
                <CreateQuestion questionType={this.state.questionTypeValue} questionTypes={questionTypes} onChangeQuestion={this.onChangeQuestion} />
            </div>
        );
    }
}

QuestionType.propTypes = {

};

export default QuestionType;