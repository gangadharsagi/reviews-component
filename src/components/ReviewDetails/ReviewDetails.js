import * as React from 'react';
import moment from 'moment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { LabelValueCell } from '../LabelValueCell';
import { getProductImageHelper } from '../../helpers/getProductImageHelper';
import './review-details.css';
import { getProductTitleHelper } from '../../helpers/getProductTitleHelper';

const useStyles = makeStyles(theme => ({
    icon: {
        fontSize: 16,
    },
    card: {
        minWidth: 275,
        maxWidth: 600,
        padding: 10,
        marginBottom: 10,
    },
    cardContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 10,
        width: '80%',
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    grey: {
        color: 'grey',
    },
    logo: {
        width: 40,
        height: 40,
    },
}));


/**
 * This Component is used to display the cards with rating and review details
 * from the api response
 *
 * @param {Array} cards - rating object data coming from the response
 * @returns {*} a React Stateless Functional Component
 */
export const ReviewDetails = ({ cards }) => {
    const classes = useStyles();
    return <React.Fragment>
        {
            cards ?
              cards.map(item =>
                <Card
                  key={get(item, 'reviewId', '')}
                  className={classes.card}>
                    <CardContent>
                        <div className={classes.cardContainer}>
                            <img
                              className={classes.logo}
                              alt='logo'
                              src={getProductImageHelper(get(item, 'productImg', ''))}
                            />
                            <LabelValueCell
                              label='DATE'
                              value={moment(get(item, 'reviewCreated', ''))
                                .format("DD.MM.YYYY")}
                            />
                            <LabelValueCell
                              label='STARS'
                              rating
                              stars={get(item, 'stars', 0)}
                            />
                            <LabelValueCell
                              label={get(item, 'childAsin', '')}
                              value={getProductTitleHelper(item)}
                            />
                        </div>
                        <label className={classes.title}>{get(item, 'title', '')}</label>
                        <p className='grey'>
                            {get(item, 'content', '')}
                        </p>
                    </CardContent>
                </Card>
            ) :
              null
        }
    </React.Fragment>
};

ReviewDetails.propTypes = {
    cards: PropTypes.array,
};

ReviewDetails.defaultProps = {
    cards: [],
};
