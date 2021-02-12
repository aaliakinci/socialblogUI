import React from 'react';
import './styles.css';
import LoginForm from '../../Components/toolbox/Forms/LoginForm';
import { Link } from 'react-router-dom'
function index() {
	return (
		<section className="blog-posts">
			<div className="container">
				<div className="row">
					<div className="col-12  my-4">
						<p className="lead text-center w-25 borderColor mx-auto py-2 font-weight-bold">
							{' '}
							Giriş{' '}
						</p>
					</div>
					<div className="col-12 col-md-4 col-lg-6 d-flex justify-content-center mx-auto">
						<LoginForm />
					</div>
					<div className="col-12 my-3">
						<p className="lead text-center" style={{ fontSize: '12px' }}>
							Üye değilseniz hemen üye olmak için <Link to="/register">tıklayınız</Link>{' '}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default index;
