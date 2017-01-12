import React, {Component, PropTypes} from 'react';

import style from './style.css';

class TextEditor extends Component {
    render() {
        return (
            <div>
              <TextField
                    className={style.textEditorStyle}
                    hintText={this.props.fullWidth}
                    fullWidth={this.props.fullWidth} />  
            </div>
        );
    }
}

TextEditor.propTypes = {
    hintText: PropTypes.string.isRequired,
    fullWidth: PropTypes.bool,
};

export default TextEditor;