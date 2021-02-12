import { useEffect, useContext, useState } from 'react'
import CommentContext from '../../Contexts/Comments/commentContext'
import Comment from '../Comment'
import './comments.css'

export default function Comments({ article_id }) {
	const [comments, setComments] = useState()
	const { getCommentsByArticleId } = useContext(CommentContext);
	useEffect(() => {
		const fetchComments = async () => {
			const comments = await getCommentsByArticleId(article_id);
			setComments(comments.data);
		}
		fetchComments();
	}, [getCommentsByArticleId, article_id])
	return (
		<div className="sidebar-item comments">
			<div className="sidebar-heading">
				{
					comments?.length > 0 ? <h2>{comments.length} Yorumlar</h2> : <h2>Yorumlar</h2>
				}
			</div>
			<div className="content">
				<ul>
					{
						comments && comments.map(comment => <Comment key={comment._id} comment={comment} />)
					}
				</ul>
			</div>
		</div>
	)
}