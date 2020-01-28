import React, { Component } from 'react';
import data from '../restaurants.json';
import Restaurant from './Restaurant';
import {ResConsumer} from '../context';
import { DropdownButton, Dropdown} from 'react-bootstrap';


export default class RestaurantList extends Component {
    state={
        res: data.restaurants
    }
    render() {
        return (
            <React.Fragment>
                <div className='py-5'>
                    <div className='container'>
                        <h1>Restaurant list</h1>
                        <ResConsumer>
                            {value => (
                                <DropdownButton id="dropdown-item-button" title="Sort">
                                <Dropdown.Item 
                                    as="button"
                                    onClick = { () => {value.sortResAscending()}}
                                >Ascending</Dropdown.Item>
                                <Dropdown.Item 
                                    as="button"
                                    onClick = { () => {value.sortResDescending()}}
                                >Descending</Dropdown.Item>
                              </DropdownButton>
                            )}
                        </ResConsumer>
                        <div className='row'>
                            <ResConsumer>
                                {value =>  {
                                    return value.res.map( (res,id) => {
                                        return <Restaurant key={id} restaurant={res} />
                                    })
                                }}
                            </ResConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
