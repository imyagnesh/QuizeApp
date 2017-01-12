import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import TrueFalse from './TrueFalse';
import DragBlanks from './DragBlanks';
import DragChoices from './DragChoices';
import DragImage from './DragImage';
import DragMatch from './DragMatch';
import DragOrders from './DragOrders';
import DragReplace from './DragReplace';
import ImageMap from './ImageMap';
import MultipleChoice from './MultipleChoice';
import Numeric from './Numeric';
import PassageClick from './PassageClick';
import ShortAnswers from './ShortAnswers';
import Utilities from './Utilities';

class QTBody extends Component {
    render() {
        return (
            <div>
                {(() => {
                    switch (this.props.questionTypeId) {
                        case 0:
                            return <TrueFalse />
                        case 1:
                            return <MultipleChoice />
                        case 2:
                            return <DragChoices />
                        case 3:
                            return <DragMatch />
                        case 4:
                            return <DragBlanks />
                        case 5:
                            return <DragOrders />
                        case 6:
                            return <ShortAnswers />
                        case 7:
                            return <ImageMap />
                        case 8:
                            return <PassageClick />
                        case 9:
                            return <DragReplace />
                        case 10:
                            return <DragImage />
                        case 11:
                            return <Numeric />
                        case 12:
                            return <Utilities />
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