import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import TrueFalse from './TrueFalse';

class QTBody extends Component {
    render() {
        return (
            <div>
                {(() => {
                    switch (this.props.questionTypeId) {
                        case 0:
                            return <TrueFalse />
                        default:
                            return null;
                    }
                })()}
            </div>
        );
    }
}

QTBody.propTypes = {

};

function mapStateToProps(state, ownProps) {
    return {
        questionTypeId: parseInt(ownProps.params.value),
    };
}

export default connect(mapStateToProps)(QTBody);