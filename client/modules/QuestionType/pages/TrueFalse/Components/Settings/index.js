import React, { Component, PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import baseStyle from './../../trueFalse.css';
import style from './style.css';

const styles = {
    customWidth: {
        width: 256,
        padding: 0,
    },
};

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = { value: 1 };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event, index, value) => this.setState({ value });

    render() {
        return (
            <div className={baseStyle.wrapper} style={{ backgroundColor: 'red' }}>
                <span className={style.labelSpan} >Settings</span>
                <div className={baseStyle.contentWrapper}>
                    <div className={style.innerDiv}>
                        <span className={style.labelSpan} >Difficulty</span>
                        <TextField
                            hintText="1-10"
                            />
                    </div>
                    <div className={style.innerDiv}>
                        <span className={style.labelSpan} >Blooms</span>
                        <DropDownMenu
                            value={this.state.value}
                            onChange={this.handleChange}
                            style={styles.customWidth}
                            autoWidth={false}
                            labelStyle={{ padding: 0 }}
                            underlineStyle={{ margin: 0 }}
                            >
                            <MenuItem value={1} primaryText="Remembering" />
                        </DropDownMenu>
                    </div>
                    <div className={style.innerDiv}>
                        <span className={style.labelSpan} >Quation Role:</span>
                        <DropDownMenu
                            value={this.state.value}
                            onChange={this.handleChange}
                            style={styles.customWidth}
                            autoWidth={false}
                            labelStyle={{ padding: 0 }}
                            underlineStyle={{ margin: 0 }}
                            >
                            <MenuItem value={1} primaryText="Normal" />
                        </DropDownMenu>
                    </div>
                    <div className={style.innerDiv}>
                        <span className={style.labelSpan} >Page Reference:</span>
                        <TextField
                            hintText="###"
                            />
                    </div>
                    <div className={style.innerDiv}>
                        <span className={style.labelSpan} >eBook Reference:</span>
                        <DropDownMenu
                            value={this.state.value}
                            onChange={this.handleChange}
                            style={styles.customWidth}
                            autoWidth={false}
                            labelStyle={{ padding: 0 }}
                            underlineStyle={{ margin: 0 }}
                            >
                            <MenuItem value={1} primaryText="None" />
                        </DropDownMenu>
                    </div>
                </div>
            </div>
        );
    }
}

Settings.propTypes = {

};

export default Settings;