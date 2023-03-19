import "./All_chefs.css"
import CardAllChef from "../Card_all_chef/Card_all_chef"
import { useSelector } from "react-redux"
import { IchefsValue, IRootState } from "../../interfaces"

const All_chefs:React.FC = () => {
const chefs = useSelector(
    (state:IRootState) => state.chefs.value
);
    const chef = chefs.map((chef:IchefsValue) => {
        return <CardAllChef 
        class= {chef.name}
        ChefName = {chef.name}  
        srcChef = {require(`../../assets/images/Chefs/${chef.portrait}.png`)}
        key = {chef.id}
        />  
})
    return ( 
        <div className="all-chef-page" >
            <div className="all-chef-page-container">
                {chef}
            </div>
        </div>
    ) 
}

export default All_chefs

