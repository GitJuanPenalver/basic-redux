import {Deposit, Withdraw} from '../../store/amount/actions';
import {connect} from 'react-redux';
import { selectCurrentAmount } from '../../store/amount/reducer';

const mapStateToProps = (state) => {
    return {
        amount: selectCurrentAmount(state),
    }
}

const Counter = ({amount, Deposit, Withdraw}) => {

    return(
        <div>
            
            <h1>{amount}</h1>
            <button onClick={() => Deposit()}>Deposit 10</button>
            <button onClick={() => Withdraw()}>Withdraw 10</button>
        </div>
    );
};

export default connect(mapStateToProps,{Deposit, Withdraw})(Counter);
