import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';

import baseStyle from './../../trueFalse.css';

const Statment = props => {
    return (
        <div className={baseStyle.wrapper}>
            <span>Statment</span>
            <div className={baseStyle.contentWrapper}>
                <TextField
                    hintText="Type Statement"
                    fullWidth />
            </div>
        </div>
    );
};

Statment.propTypes = {

};

export default Statment;