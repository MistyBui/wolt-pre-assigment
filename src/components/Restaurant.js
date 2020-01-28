import React, { Component } from 'react';
import styled from 'styled-components';

export default class Restaurant extends Component {
    render() {
        const {image, description, name, online, city} = this.props.restaurant;

        return (
            <ResCard className='col-9 mx-auto col-md-7 col-lg-4 my-3' >
                <div className='card' style={{height: 340}}>
                    {/* card image */}
                    <div className='img-container'>
                        <img src={image} alt='resPic' className='card-img-top' style={{height: 200}}/>
                        
                    </div>
                    {/* card footer */}
                    <div className='card-footer'>
                        <div className='top'>
                            <h5 style={{fontStyle:'italic', fontWeight:'bold'}}>{name}</h5>
                            <h6 >{description}</h6>
                        </div>
                        <div className='left'>
                            <p style={{
                                color: online ? '#14cc14' :  'gray',
                                fontWeight: online ? 'bold' : 'none'}}>Online
                            </p>
                        </div> 
                        <div className='right'>
                            <p>{city}</p>
                       </div>
                    </div>          
                </div>
            </ResCard>
        )
    }    
}
const ResCard = styled.div`
    .card {
        border-color: transparent;
        transition: all 0.5s linear;
    }
    .card-footer {
        background: transparent;
        border-top: transparent;
        transition: all 0.5s linear;
        
    }
    &:hover {
        .card {
            border: 0.04rem solid rgba(0,0,0,0.2);
            box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
        }
        
    }
    .img-container { 
        position: relative;
        overflow: hidden;
        transition: transform .25s, visibility .25s ease-in;
    }

    .img-container:hover .card-img-top {
        transform: scale(1.3);
    }
    

    .left {
        width: 45%;
        float: left;
    }

    .right {
        width: 55%;
        float: left;
    }
    
`

