import { Link } from 'react-router-dom'
import './main.scss'
const Header = () => {
    return (
        <>
            <div className="header">
                <Link className='header-link' to="/client">Clinet</Link>
                <Link className='header-link' to="/product">product</Link>
                <Link className='header-link' to="/support">support</Link>
                <Link className='header-link' to="/movie">movie</Link>
                <Link className='header-link' to="/">Home</Link>
            </div>
        </>
    )
}
export default Header