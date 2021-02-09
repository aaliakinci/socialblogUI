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
			class="modal fade"
			id="exampleModalLong"
			tabindex="-1"
			role="dialog"
			aria-labelledby="exampleModalLongTitle"
			aria-hidden="true"
			style={{ top: '100px' }}
		>
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-header">
						<h5 class="modal-title" id="exampleModalLongTitle">
							{title ? title : 'Title alanı boş bırakılamaz !'}
						</h5>
						<button type="button" class="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div class="modal-body">
					{
						 image!==undefined && <img src={handleImagePreview()} className="img-fluid" id="previewImg" style={{width:'100%',height:'150px'}}/>
					}
					<div className="modal-body" id="previewContent"></div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-success" data-dismiss="modal">
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PreviewArticle;
