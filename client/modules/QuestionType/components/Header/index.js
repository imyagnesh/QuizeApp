import React, { Component, PropTypes } from 'react';
import FlatButton from 'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import style from './style.css';

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
            <div className={style.wrapper}>
                <span>{this.props.questionType}</span>
                <div className={style.nav}>
                    <FlatButton label="Duplicate" primary />
                    <FlatButton label="Preview" primary />
                    <DropDownMenu value={this.state.value} onChange={this.handleChange} style={{ height: 36 }} underlineStyle={{ display: 'none' }} labelStyle={{ lineHeight: '36px' }} iconStyle={{ top: '6px' }}>
                        <MenuItem value={0} primaryText="More" />
                    </DropDownMenu>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    questionType: PropTypes.string.isRequired,
};

export default Header;