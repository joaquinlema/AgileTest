import React from 'react';
import PropTypes from 'prop-types';
import SearchResultItem from './searchResultItem';

const searchResults = ({results}) => {

    return (
        <div id='searchResultsContainer' className="searchResultsContainer">
            <div className='searchTitle'>Displaying {results.slice(0,4).length} of {results.length} results <a href='#'>See All Results</a></div>
            <hr></hr>
            <div className="searchResults">
                {results.slice(0,4).map((item, index) => (
                    <SearchResultItem key={index} item={item} />
                ))}
            </div>
        </div>
    );
}

searchResults.propTypes = {
    results : PropTypes.array.isRequired,
}

export default searchResults;
