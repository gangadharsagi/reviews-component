import * as React from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import { ReviewDetails } from '../ReviewDetails';
import { getCardHeadingHelper } from '../../helpers/getCardHeadingHelper';

/**
 * A description explaining what we use this component for
 *
 * @param {*} props - a descriptions of what props is
 * @returns {*} a React Stateless Functional Component
 */
export class GroupReviewDetails extends React.Component {
    render() {
        const { groupedCards, cardLabel, group } = this.props;
        return (
        <React.Fragment>
            {groupedCards.map((cards, index) => {
                return <React.Fragment>
                    <p>{getCardHeadingHelper(group, cardLabel, index)}</p>
                          <ReviewDetails
                            cards={cards}
                          />
                </React.Fragment>
            })
            }
          </React.Fragment>
        )
    }
}
