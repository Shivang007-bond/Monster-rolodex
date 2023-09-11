
import './SearchBox.css' ;

const SearchBox = ({onChangeHandler}) => {
        return(
            <input
            className="search-box"
            type="search"
            placeholder = 'Search Monsters'
            //event handle for filtering
            onChange={ onChangeHandler }
          />
        )
    }


export default SearchBox;