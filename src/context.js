import React, { Component } from 'react';
import data from './restaurants.json';


const ResContext = React.createContext();

class ResProvider extends Component {
    state={
        res: [],
    }

    componentDidMount() {   
        this.setRes();
    }

    setRes = () => {
        let tempRes = [];
        data.restaurants.forEach(res => {
            const singleRes = {...res};
            tempRes = [...tempRes,singleRes]
        })
        this.setState( () => {
            return {res:tempRes}
        })
    }

    compareRes = (a,b) => {
        const resA = a.name.toUpperCase();
        const resB = b.name.toUpperCase();

        let comparison = 0
        if (resA > resB) {
            comparison = 1;
        } else if (resA < resB) {
            comparison = -1;
        }
        return comparison;
    }

    sortResAscending = () => {
        let tempRes = data.restaurants.sort(this.compareRes)
        console.log(tempRes);
        this.setState ( () => {
            return {res:tempRes}
        })
    }

    sortResDescending = () => {
        let tempRes = data.restaurants.sort(this.compareRes).reverse()
        console.log(tempRes);
        this.setState ( () => {
            return {res:tempRes}
        })
    }
    
    
    render() {
        return (
            <ResContext.Provider value={{
                ...this.state,
                sortResAscending: this.sortResAscending,
                sortResDescending: this.sortResDescending,
            }}>
                {this.props.children}
            </ResContext.Provider>
        )
    }
};

const ResConsumer = ResContext.Consumer;

export {ResProvider, ResConsumer}; 
