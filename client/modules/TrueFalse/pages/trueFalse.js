import React from 'react';
import Statment from './../components/Statment/index';
import Answer from './../components/Answer/index';
import Settings from './../components/Settings/index';
import CreateQuestion from './../components/CreateQuestion/index';
import Feedback from './../components/Feedback/index';
import RaisedButton from 'material-ui/RaisedButton';

import baseStyle from './../trueFalse.css';

//Single-responsibility Principle//
// extends React.compoenet - Interface segregation principle//
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: true,
        };
        this.OnClickToggle = this.OnClickToggle.bind(this);
    }
    OnClickToggle(prop) {
        this.setState({
            toggle: prop,
        });
        console.log('Answer');
    }
    render() {
        return (
            <div className={baseStyle.container}>
                <Statment />
                <div>
                    <RaisedButton className={baseStyle.marginRight10} label="Answers" onClick={_ => this.OnClickToggle(true)} primary />
                    <RaisedButton className={baseStyle.marginRight10} label="Feedback" onClick={_ => this.OnClickToggle(false)} />
                </div>
                {this.state.toggle &&
                    <div id="AnswerDiv">
                        <Answer />
                        <Settings />
                    </div>}
                {!this.state.toggle &&
                    <div id="FeedbackDiv">
                        <Feedback text="true" inputText="Insert Correct Feedback" />
                        <Feedback text="false" inputText="Insert inCorrect Feedback" />
                    </div>}
                <CreateQuestion />
            </div>
        );
    }
}