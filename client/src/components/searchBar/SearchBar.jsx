
import { useState } from 'react';
import './searchBar.scss'

function SearchBar() {
    const [query, setQuery] = useState({
        type : "Buy",
        location : "",
        minPrice : 0,
        maxPrice : 10000000,
    })
    
    const types = ["Buy", "Rent"]

    const switchType = (val) => {
        
        setQuery((prev) => {
            return{...prev, type : val,}
        })
    }

    return <>
        <div className="searchBar">

            <div className="types">
                {types.map((type) => (
                    <button
                        key={type}
                        onClick={() => switchType(type)}
                        className={query.type === type ? "active" : ""}
                    >
                        {type}
                    </button>
                ))}
            </div>
            <form action="">
                <input type="text" name='location' placeholder='City Location' />
                <input
                    type="number"
                    name="minPrice"
                    min={0}
                    max={10000000}
                    placeholder="Min Price"
                />
                <input
                    type="number"
                    name="maxPrice"
                    min={0}
                    max={10000000}
                    placeholder="Max Price"
                />
                <button>
                    <img src="/search.png" alt="" />
                </button>
            </form>
        </div>

    </>
}

export default SearchBar;