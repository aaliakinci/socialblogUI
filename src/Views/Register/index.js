import React from 'react';
import RegisterForm from '../../Components/toolbox/Forms/RegisterForm';
import './styles.css';
function index() {
	return (
		<section className="blog-posts">
			<div className="container">
				<div className="row">
					<div className="col-12  my-4">
						<p className="lead text-center w-25 borderColor mx-auto py-2 font-weight-bold">
							{' '}
							Kayıt Ol{' '}
						</p>
					</div>
					<div className="col-12 col-md-4 col-lg-6 d-flex justify-content-center mx-auto">
						<RegisterForm />
					</div>
					<div className="col-12 my-3">
						<p className="lead text-center" style={{ fontSize: '12px' }}>
							Zaten üye misiniz ? Giriş yapmak için <a href="/login">tıklayınız</a>{' '}
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}

export default index;
