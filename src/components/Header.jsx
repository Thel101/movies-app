import { NavLink } from 'react-router-dom'

export default function Header() {
    return (
        <div className="header-container">
            <div className="header">
                <h1>Movies Hub</h1>
                <h2 style={{ marginTop: '1.5em', marginLeft: '0.5em' }}>Discover the best movies of all time</h2>

            </div>
            <nav className="navigation">
                <NavLink to="/" className="nav-link">Movies</NavLink>
                <NavLink to="/tvshows" className="nav-link">TV Shows</NavLink>

            </nav>

        </div>
    )
}