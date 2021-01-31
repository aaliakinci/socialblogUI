import React from 'react';
import Sidebar from '../../Components/Sidebar';
import BlogDetail from '../../Components/Card';
import Comments from '../../Components/Comments/index'
import SubmitComment from '../../Components/SubmitComment/index'
const BlogPage = () => {
	return (
		<>
			<section className="blog-posts" style={{ paddingTop: '150px' }}>
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<BlogDetail />
							<Comments />
							<SubmitComment />
						</div>
						<div className="col-lg-4">
							<Sidebar />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BlogPage;
