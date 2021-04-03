import React from 'react';
import CardList from './CardList';

const SearchBox = ({ searchfield, onSearchChange }) => {
    return (
        <div className ="pa2">
            <input
            className='pa3 ba b--light-blue bg-lightest-blue'
            type="search"
            placeholder="Search Employee"
            onChange={onSearchChange}
            />
        </div>
    );
}


export default SearchBox;
