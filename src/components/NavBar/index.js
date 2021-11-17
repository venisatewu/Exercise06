import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
           
            <button className="navbar-toggler" 
                type="button" data-toggle="collapse" 
                data-target="#navbarNavAltMarkup" 
                aria-controls="navbarNavAltMarkup" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span 
                    className="navbar-toggler-icon" 
                />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <Link className="active nav-link" to="/">
                        Dashboard
                    </Link>
                    <Link className="active nav-link" to="/ListUsers">
                        List Users
                    </Link>
                </div>
            </div>
        </nav>


    )
}


