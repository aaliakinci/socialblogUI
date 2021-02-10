import React from 'react';
import EditorForm from '../toolbox/EditorForm';
function TextEditor() {
	return (
		<section className="blog-posts">
			<div className="container">
				<div className="row">
					<div className="col-12 text-black">
						<EditorForm/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default TextEditor;
