import React, { Component, PropTypes } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

import style from './style.css';


const styles = {
    customWidth: {
        width: 256,
    }
};

class CreateQuestion extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div className={style.wrapper}>
                <span className={style.labelSpan}>Create a New Question</span>
                <DropDownMenu
                    value={this.props.questionType}
                    onChange={this.props.onChangeQuestion}
                    style={styles.customWidth}
                    autoWidth={false}
                    >
                    {
                        this.props.questionTypes.map((value, key) => <MenuItem key={key} value={key} primaryText={value} />)
                    }
                </DropDownMenu>
                <RaisedButton label="Create" primary={true} />
            </div>
        );
    }
}

CreateQuestion.propTypes = {
    onChangeQuestion: PropTypes.func.isRequired,
    questionType: PropTypes.number.isRequired,
    questionTypes: PropTypes.array.isRequired,
};

export default CreateQuestion;