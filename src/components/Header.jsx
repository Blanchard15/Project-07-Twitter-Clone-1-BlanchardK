import Pagetitle from "./Pagetitle";
import Toptwitte from "./Toptweete";


function Header (){
    return(
        <div className="header">
            <h2 className="page-title ">Home</h2>
            <Pagetitle />
            <Toptwitte />
        </div>
    )
}

export default Header;