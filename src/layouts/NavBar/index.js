import React from 'react'
import logo from '../../assets/images/logo.png'
import fci from '../../assets/images/fci.png'
import akc from '../../assets/images/akc.png'
import akd from '../../assets/images/akd.png'
import kc from '../../assets/images/kc.png'
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <div>
               <div className="wrap">
			<div className="container-fluid">
				<div className="row">
					<div className="col-md-8 d-flex align-items-center">
						<p className="mb-0 phone pl-md-2">
							<a href="#" className="mr-2"><span className="fa fa-phone mr-1"></span> +00 1234 567</a> 
							<a href="#"><span className="fa fa-paper-plane mr-1"></span> youremail@email.com</a>
						</p>
					</div>
					<div className="col-md-4 d-flex justify-content-md-end">
						<div className="w-100 py-2 patner-imgaes d-flex justify-content-between align-items-center">
                        <img src={akc} />
                        <img src={akd} />
                        <img src={kc} />
                        <img src={fci} />
		                 </div>
					</div>
				</div>
			</div>
		</div>
		<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div className="container-fluid">
	    	<Link className="navbar-brand" to="/"><span className="flaticon-pawprint-1 mr-2"></span><img src={logo}/></Link>
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="fa fa-bars"></span> 
	      </button>
	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav ml-auto">
	        	<li className="nav-item"><Link to="#" className="nav-link">About Us</Link></li>
	        	<li className="nav-item"><Link to="#" className="nav-link">KCP Database</Link></li>
	        	<li className="nav-item active"><Link to="#" className="nav-link">Kennels Directory</Link></li>
	        	<li className="nav-item"><Link to="#" className="nav-link">Members Directory</Link></li>
	        	<li className="nav-item"><Link to="#" className="nav-link">Records of Recent Matings</Link></li>
	          <li className="nav-item"><Link to="#" className="nav-link">Events</Link></li>
	          <li className="nav-item"><Link to="#" className="nav-link">Show Results</Link></li>
	       
	        </ul>
	      </div>
	    </div>
	  </nav>
        </div>
    )
}

export default NavBar
