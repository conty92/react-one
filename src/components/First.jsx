import "../styles/First.css";
import { DiReact } from 'react-icons/di';
import { FiMenu } from 'react-icons/fi';

const First = () => {
    return ( 
        <header>
            <div className="logo">
        <DiReact size={60} color='green'/>
        </div>
        <div className="menu">
        <FiMenu size={50} color='green'/>
        </div>
        </header>
     );
}
 
export default First;