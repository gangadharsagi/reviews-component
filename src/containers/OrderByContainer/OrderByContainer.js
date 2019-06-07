import { connect } from 'react-redux';
import { orderReviews } from '../../actions';
import { OrderBy } from '../../components/OrderBy';

export const mapStateToProps = (state) => ({
  order: state.order,
});

export const mapDispatchToProps = (dispatch) => ({
  handleChange: (event) => {
    dispatch(orderReviews(event.target.value))
  }
});

export const OrderByContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderBy);
