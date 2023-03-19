import search from '../../../assets/icons/search.svg';
import "../Search_nav/SearchNav.css";
import { useState} from "react";

const SearchNav: React.FC = () => {
const [showSearchInput, setshowSearchInput]  = useState<boolean>(false);  

const setshowSearchInputFunc = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setshowSearchInput(!showSearchInput)
} 
    return (
        <form id="button-box">
            <input type="text" placeholder={`Search for restaurant cuisine, chef`} className={showSearchInput ?'show-search' : 'not-show-search'}/>
            <button type="submit"><img src={search} alt="search" id="button-icon" onClick={setshowSearchInputFunc} /></button>
        </form> 
    )
}


export default SearchNav