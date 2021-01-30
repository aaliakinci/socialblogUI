import React from 'react';
import Sidebar from '../../Components/Sidebar';
import BlogDetail from '../../Components/Card';
const BlogPage = () => {
	return (
		<>
			<section className="blog-posts">
				<div className="row">
					<div className="col-lg-8">
						<BlogDetail />
					</div>
					<div className="col-lg-4">
						<Sidebar />
					</div>
				</div>
			</section>
		</>
	);
};

export default BlogPage;
