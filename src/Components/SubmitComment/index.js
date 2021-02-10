import {useContext,useEffect,useState} from 'react';
import './submitComment.css'
import CookieContext from '../../Contexts/CookieContext/cookieContext';
import axios from 'axios'
function SubmitComment({article}) {
	const [user_id, setUser_id] = useState();
	const [description, setDescription] = useState("")
	const [auth,setAuth] = useState("");
	const {userFromCookie,userAuth} = useContext(CookieContext);
	const [error, setError] = useState("")
	useEffect(() => {
		const {_id} = userFromCookie('user');
		const token = userAuth('user');
		setAuth(token);
		setUser_id(_id);
	}, [userFromCookie])
 
	 const handleSubmit = async(e) => {
		e.preventDefault();
		const url = 'http://localhost:4000/comments/create'
		 const config = {
			 header:{'Authorization':auth}
		 }
		 if(user_id!==undefined && description.trim()!=="" && article!==undefined )
		 {
			const response = await axios.post(url,{user_id,description,article_id:article._id},config)
			if(response.data._id!==undefined)
			window.location.reload();
			setError('Bir hata oluştu !')
		 }
		 setError('Lütfen bir yorum giriniz !')

	 }
	 console.log(error);
    return (
        <div className="sidebar-item submit-comment">
            <div className="sidebar-heading">
                <h2>
                    Yorum
                </h2>
            </div>
            <div className="content">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-12">
                          <textarea  name="description" id="message" placeholder="Type your comment" value={description} className="form-control textArea" onChange={(e)=>setDescription(e.target.value)}></textarea>
                        </div>
												<div className="col-12">
												{
									error && <span className="text-danger">{error}</span>
								}
												</div>
                        <div className="col-sm-12">
                            <fieldset>
                                <button type="submit" id="form-submit" className="main-button btn-block " >Submit</button>
                            </fieldset>
                        </div>
                    </div>
                </form>
								
            </div>
        </div>
    )
}
export default SubmitComment