import * as React from 'react';
import {connect} from 'react-redux';
import {Store} from '../types';
import actions from '../store/actions/counter';
interface IProps {
    number: number,
    increment: any,
    decrement: any,
}

class Counter extends React.Component<IProps> {
    render(){
        let {number,increment, decrement} = this.props;
        return (
            <div>
               <p>{number}</p>
               <button
                onClick={increment}
               >+</button> 
                <button
                onClick={decrement}
               >-</button>
            </div>
        );
    }
}
let mapStateToProps = function(state:Store):Store{
    return state;
}
export default connect(
    mapStateToProps,
    actions
)(Counter)