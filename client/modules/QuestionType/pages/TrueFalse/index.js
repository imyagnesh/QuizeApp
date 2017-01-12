import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class TrueFalse extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="trueFalse">
                {this.props.questionTypeId}
            </div>
        );
    }
}

TrueFalse.propTypes = {
    questionTypeId: PropTypes.number.isRequired,
};


function mapStateToProps(state, ownProps) {
    return {
        questionTypeId: parseInt(ownProps.params.value),
    };
}

export default connect(mapStateToProps)(TrueFalse);