import { useEffect } from 'react';

function PreviewArticle({ title, content, image }) {
	useEffect(() => {
		const area = document.getElementById('previewContent');

		area.innerHTML = content;
	}, [content]);

	const handleImagePreview = () => {
		const src = URL.createObjectURL(image);
		return src
	}
	return (
		<div
			className="modal fade"
			id="exampleModalLong"
			tabIndex="-1"
			role="dialog"
			aria-labelledby="exampleModalLongTitle"
			aria-hidden="true"
			style={{ top: '100px' }}
		>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLongTitle">
							{title ? title : 'Title alanı boş bırakılamaz !'}
						</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						{
							image !== undefined && <img src={handleImagePreview()} className="img-fluid" alt="" id="previewImg" style={{ width: '100%', height: '150px' }} />
						}
						<div className="modal-body" id="previewContent"></div>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-success" data-dismiss="modal">
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PreviewArticle;
