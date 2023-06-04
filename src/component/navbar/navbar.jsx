import Api_hook from "../customHoock/Api_Hook";
import Wave from "../waves/wave";
import ListNav from "../navbar/list_nav";

const Navbar = () => {
    const { data, error, Loading } = Api_hook('https://3mrr2g2b.github.io/MyJason/json.json');
    
    return (
        <>
        <ListNav/>
        <Wave/>
        </>
    );
};

export default Navbar;
