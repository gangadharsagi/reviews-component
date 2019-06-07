import * as React from 'react';
import moment from 'moment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { LabelValueCell } from '../LabelValueCell';
import logo from '../../assets/grey.jpeg';
import './review-details.css';


/**
 * A description explaining what we use this component for
 *
 * @param {*} props - a descriptions of what props is
 * @returns {*} a React Stateless Functional Component
 */
export const ReviewDetails = ({ cards }) => {
    return <React.Fragment>
        {
            cards && cards.map(item =>
                <Card className='card'>
                    <CardContent>
                        <div className='cardContainer'>
                            <img
                              className='logo'
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
                        <label className='title'>{item.title}</label>
                        <p className='grey'>
                            {item.content}
                        </p>
                    </CardContent>
                </Card>
            )
        }
    </React.Fragment>
};
