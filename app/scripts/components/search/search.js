import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SearchResults from './searchResults';

const search = ({ showingSearch, showSearchContainer }) => {

    const [searchInput, setSearchInput] = useState('');
    const [error, setError] = useState('');
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const setSearchValue = (searchValue) => { (searchValue.length > 2) ? setSearchInput(searchValue) : setSearchInput('') }

    /**
     * Calls upon search change
     * @memberof Menu
     * @param e [Object] - the event from a text change handler
     */
    const onSearch = (input) => {
        setSearchValue(input.target.value);
    }

    useEffect(() => {
        (searchInput == '')
        ?
            setItems([])
        :
        fetch("http://localhost:3035/?search=" + searchInput)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, [searchInput]);

    return (
        <Fragment>
            <div className={(showingSearch ? "showing " : "") + "search-container"}>
                <input type="text" onChange={(input) => onSearch(input)} />
                <a href="#" onClick={() => showSearchContainer()}>
                    <i className="material-icons close" onClick={() => setSearchValue('')}>close</i>
                </a>
                {
                items.length > 0 && <SearchResults results={items}/>
                }
            </div>

        </Fragment>
    )
}

search.propTypes = {
    showingSearch: PropTypes.bool.isRequired,
    showSearchContainer: PropTypes.func.isRequired,
}

module.exports = search;
