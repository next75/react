import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="h-14 w-full sticky top-0 text-white bg-red-700 justify-between">
            <Link className="p-2" to="/">
                Home
            </Link>
            <Link className="p-2" to="/datapage">
                DataPage
            </Link>
            <Link to="/test">Test</Link>
        </div>
    );
};
export default Navbar;
