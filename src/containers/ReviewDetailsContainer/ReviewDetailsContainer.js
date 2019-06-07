import { connect } from 'react-redux';
import { ReviewDetails } from '../../components/ReviewDetails';
import { selectGroupedCardsSelector } from '../../selectors/selectGroupedCardsSelector';

export const mapStateToProps = (state) => ({
  cards: selectGroupedCardsSelector(state),
});

export const mapDispatchToProps = (dispatch) => ({
});

export const ReviewDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReviewDetails);
