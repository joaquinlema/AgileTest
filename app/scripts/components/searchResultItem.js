import React from 'react';

const searchResultItem = ({item}) => {

    const {name, picture} = item;
    return (
        <div className='searchItem'>
            <a href='#'>
                <img src={picture} width='124px' height='163px'/>
            </a>
            <div className='searchItemText'>
                <a href='#'>
                    {name}
                </a>
            </div>
        </div>
    );
}

export default searchResultItem;
