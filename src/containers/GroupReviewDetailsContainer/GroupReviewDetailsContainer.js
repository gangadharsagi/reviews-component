import { connect } from 'react-redux';
import { GroupReviewDetails } from '../../components/GroupReviewDetails';
import { selectGroupedCardsSelector } from '../../selectors/selectGroupedCardsSelector';
import { getCardHeadingsSelector } from '../../selectors/getCardHeadingsSelector';
import { groupBySelector } from '../../selectors/groupBySelector';

export const mapStateToProps = (state) => ({
 groupedCards: selectGroupedCardsSelector(state),
 cardLabel: getCardHeadingsSelector(state),
 group: groupBySelector(state),
});

export const mapDispatchToProps = (dispatch) => ({
});

export const GroupReviewDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GroupReviewDetails);
