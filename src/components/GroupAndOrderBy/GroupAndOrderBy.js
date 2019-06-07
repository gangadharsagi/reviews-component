import * as React from 'react';
import { GroupByContainer } from '../../containers/GroupByContainer';
import { OrderByContainer } from '../../containers/OrderByContainer';

/**
 * A description explaining what we use this component for
 *
 * @param {*} props - a descriptions of what props is
 * @returns {*} a React Stateless Functional Component
 */
export const GroupAndOrderBy = props => {
  return (
    <form autoComplete="off">
      <GroupByContainer />
      <OrderByContainer />
    </form>
)};
