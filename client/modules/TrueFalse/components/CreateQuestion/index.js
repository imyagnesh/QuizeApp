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
        this.state = { value: 1 };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event, index, value) => this.setState({ value });

    render() {
        return (
            <div className={style.wrapper}>
                <span className={style.labelSpan}>Create a New Quation</span>
                <DropDownMenu
                    value={this.state.value}
                    onChange={this.handleChange}
                    style={styles.customWidth}
                    autoWidth={false}
                    >
                    <MenuItem value={1} primaryText="Quation Type" />
                </DropDownMenu>
                <RaisedButton label="Create" primary={true} />
            </div>
        );
    }
}

CreateQuestion.propTypes = {

};

export default CreateQuestion;