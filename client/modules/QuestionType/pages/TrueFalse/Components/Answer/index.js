import React, { PropTypes } from 'react';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

import baseStyle from './../../trueFalse.css';
import style from './style.css';

const RBStyles = {
    radioButton: {
        marginBottom: 16,
    },
};

const Answer = props => {
    return (
        <div className={baseStyle.wrapper}>
            <span className={style.labelSpan}>Answer</span>
            <div className={baseStyle.contentWrapper}>
                <span className={style.labelSpan}>This Statemnt is:</span>
                <RadioButtonGroup name="answer">
                    <RadioButton
                        value="true"
                        label="True"
                        style={RBStyles.radioButton}
                        />
                    <RadioButton
                        value="false"
                        label="False"
                        style={RBStyles.radioButton}
                        />
                </RadioButtonGroup>
            </div>
        </div>
    );
};

Answer.propTypes = {

};

export default Answer;