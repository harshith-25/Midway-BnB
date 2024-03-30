import React from 'react'
import "./SearchResult.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';

function SearchResult({img, location, title, description, star, price, total}) {
  return (
    <div className='searchResult'>
        <img src= {img} alt={title} />
        <FavoriteBorderIcon className='searchResult__heart' />
        <div className="searchResult__infoBottom">
            <div className="searchResult__infoTop">
                <p>{location}</p>
                <h2>{title}</h2>
                <br />
                <p>____</p>
                <br />
                <br />
                <p>{description}</p>
            </div>
            <div className="searchResult__infoBottom">
                <div className="searchResult__stars">
                <StarIcon className="searchResult__star" />
                    <p>
                        <strong>{star}</strong>
                    </p>
                </div>
            </div>
            <div className="searchResults__price">
                <h2>{price}</h2>
                <p>{total}</p>
            </div>
        </div>
    </div>
  )
}

export default SearchResult