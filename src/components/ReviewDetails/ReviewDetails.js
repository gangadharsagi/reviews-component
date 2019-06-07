import * as React from 'react';
import moment from 'moment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core';
import { LabelValueCell } from '../LabelValueCell';
import logo from '../../assets/grey.jpeg';
import './review-details.css';

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
            cards && cards.map(item =>
                <Card className={classes.card}>
                    <CardContent>
                        <div className={classes.cardContainer}>
                            <img
                              className={classes.logo}
                              alt='logo'
                              src={logo}
                            />
                            <LabelValueCell
                              label='DATE'
                              value={moment(item.reviewCreated)
                                .format("DD.MM.YYYY")}
                            />
                            <LabelValueCell
                              label='STARS'
                              value='value'
                              rating
                              stars={item.stars}
                            />
                            <LabelValueCell
                              label={item.childAsin}
                              value={'value'}
                            />
                        </div>
                        <label className={classes.title}>{item.title}</label>
                        <p className='grey'>
                            {item.content}
                        </p>
                    </CardContent>
                </Card>
            )
        }
    </React.Fragment>
};
