import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';

import baseStyle from './../../trueFalse.css';

//Open-closed Principle//
const Feedback = ({text, inputText}) => {
    return (
        <div className={baseStyle.wrapper}>
            <span>{text}</span>
            <div className={baseStyle.contentWrapper}>
                <TextField
                    hintText={inputText}
                    fullWidth
                    />
            </div>
        </div>
    );
};

Feedback.propTypes = {
    text: PropTypes.string.isRequired,
    inputText: PropTypes.string.isRequired,
};

export default Feedback;