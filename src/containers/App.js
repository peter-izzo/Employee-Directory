import React, { Component } from 'react';
import CardList from '../components/CardList';
// import { employees } from '../employees';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from'../components/ErrorBoundary';

import API from '../API'


class App extends Component {
    //allows searchbox to talk with cardlist and filter
    //employees based on what is typed
    state = {
            employees: [],
            searchfield: ''
        }

    componentDidMount() {
        console.log("Check");
        API.search()
        .then((res) => {
            console.log(res);
            // const arr = []
            // arr.push({
            //     employees: res.data.results.map((e, i) => ({
            //     title: e.name.title,
            //     firstName: e.name.first,
            //     lastName: e.name.last,
            //     email: e.email,
            //     phone: e.phone,
            //     picture: e.picture.medium,
            //     key: i,
            //     })),
            // });
            this.setState({...this.state, employees:res.data.results })
        })
        .catch((err) => console.log(err));
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {

        // const filtered = () => {        
        //     console.log(this.state.employees);
        // }
        const filtered = this.state.employees.filter(employee => {
            console.log("LOGGING EMPLOYEE FROM SEARCH", employee);
            if (this.state.employees.length) {
                console.log(employee.name.last);
                return employee.name.last.toLowerCase().includes(this.state.searchfield.toLowerCase());
            }
            else {
                return [];
            }

        })


        return (
            <div className="tc">
            <h1>ACME Employee Directory</h1>
            <SearchBox onSearchChange={this.onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    <CardList employees={filtered}/>
                </ErrorBoundary>
            </Scroll>
            </div>
        );
    }
}
export default App;
