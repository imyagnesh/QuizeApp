import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 0 };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, index, value) {
        this.setState({ value });
    }

    render() {
        return (
            <div>
                <span>{this.props.questionType}</span>
                <nav>
                    <FlatButton label="Duplicate" primary />
                    <FlatButton label="Preview" primary />
                    <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                        <MenuItem value={0} primaryText="More" />
                    </DropDownMenu>
                </nav>
            </div>
        );
    }
}

Header.propTypes = {
    questionType: PropTypes.string.isRequired,
};

export default Header;