import React, { Component } from 'react';
import data from './restaurants.json';


const ResContext = React.createContext();

class ResProvider extends Component {
    state={
        res: [],
    }

    //load restaurants list when open
    componentDidMount() {   
        this.setRes();
    }

    //go through json file and load each restaurant to list
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

    //compare name and return ascending list
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

    //apply compare method to restaurants list
    sortResAscending = () => {
        let tempRes = data.restaurants.sort(this.compareRes)
        console.log(tempRes);
        this.setState ( () => {
            return {res:tempRes}
        })
    }

    //reverse ascenging list
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
