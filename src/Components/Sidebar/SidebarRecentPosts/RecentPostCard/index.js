import '../recentPosts.css'
import Moment from 'react-moment';
import { Link } from 'react-router-dom'
function RecentPostCard({ title, description, content, createAt, id }) {

    return (
        <Link to={`/article/${id}`}>
            <h5>{title}</h5>
            <p>{description}</p>
            <p>{content}</p>
            <span>
                <Moment format="YYYY/MM/DD">
                    {createAt}
                </Moment>
            </span>
        </Link>
    )
}
export default RecentPostCard