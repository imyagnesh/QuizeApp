import React, {PropTypes} from 'react';

import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import style from './style.css';

const Button = ({label, onClick}) => {
    return (
        <div>
            <RaisedButton className={style.buttonStyle} label={label} onClick={onClick} primary />
        </div>
    );
};

componentName.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    active: PropTypes.bool,
};

export default componentName;