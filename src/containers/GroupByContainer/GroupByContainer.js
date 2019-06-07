import { connect } from 'react-redux';
import { groupReviews } from '../../actions';
import { GroupBy } from '../../components/GroupBy';

export const mapStateToProps = (state) => ({
  group: state.group,
});

export const mapDispatchToProps = (dispatch) => ({
  handleChange: (event) => {
    dispatch(groupReviews(event.target.value.toLowerCase()))
  }
});

export const GroupByContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroupBy);
