import styles from './styles.module.css';
import { useContext,useState,useEffect } from 'react';
import PreviewArticle from '../../PreviewArticle';
import CookieContext from '../../../Contexts/CookieContext/cookieContext';
import axios from 'axios';
function EditorForm() {
	const {userFromCookie} = useContext(CookieContext)
	const [title, setTitle] = useState("");
	const [file,setFile] = useState();
	const [description,setDescription]=useState("");
	const [user_id, setUser_id] = useState()
	const [hashtags,setHashtags] = useState([]);
	const [content, setContent] = useState('<p></p>');
	const [location, setLocation] = useState({
		start: content.length,
		end: content.length,
	});
	const [errorEditor, setErrorEditor] = useState('');
	const [error,setError] = useState('');
	useEffect(() => {
		const {_id}=userFromCookie('user')
	  setUser_id(_id)
	}, [userFromCookie])
	const handleSubmit = async(e) => {
		e.preventDefault();
		const data = new FormData();
		data.append('title',title);
		data.append('contentImage',file);
		data.append('content',content);
		data.append('description',description);
		data.append('user_id',user_id)
		const url = `${process.env.REACT_APP_DEPLOY_URL}/articles/create`
		const config = {
			headers:{'content-type': 'multipart/form-data'}
		}
		const response = await axios.post(url,data,config);
		console.log(response); 
	}
	const handleChangeTextArea = (e) => {
		setContent(e.target.value);
	};
	const handleKey = (e) => {
		if (e.code === 'Enter' || e.code === 'NumpadEnter') {
			e.preventDefault();
			setContent(`${content}<p></p>`);
		}
	};
	const handleClick = (e, val) => {
		e.preventDefault();
		const subs = content.substring(location.start, location.end);
		const p = subs.substring(0, 2).trim();
		const isStyle = subs.substring(3, 4);
		const subsWithoutP = subs.substring(2, subs.length);
		console.log(p);
		switch (val) {
			case 'strong':
				setContent(`${content.substring(0,location.start)} <b>${subs}</b> ${content.substring(location.end,content.length)}`);
				break;
			case 'italic':
				setContent(`${content.substring(0,location.start)} <em>${subs}</em> ${content.substring(location.end,content.length)}`);
				break;
			case 'left':
				if (p !== '<p' || isStyle === 's') {
					setErrorEditor('Lütfen paragraf alanı seçiniz veya verdiğiniz hizalamayı temizleyiniz');
					return 0;
				}
				setContent(`${content.replace(subs, '')} ${p} style="text-align:left"${subsWithoutP}`);
				break;
			case 'center':
				if (p !== '<p' || isStyle === 's') {
					setErrorEditor('Lütfen paragraf alanı seçiniz veya verdiğiniz hizalamayı temizleyiniz');
					return 0;
				}
				setContent(`${content.replace(subs, '')} ${p} style="text-align:center"${subsWithoutP}`);
				break;
			case 'right':
				if (p !== '<p' || isStyle === 's') {
					setErrorEditor('Lütfen paragraf alanı seçiniz veya verdiğiniz hizalamayı temizleyiniz');
					return 0;
				}
				setContent(`${content.replace(subs, '')} ${p} style="text-align:right"${subsWithoutP}`);
				break;
			default:
				break;
		}
	};
	const handleSelect = (e) => {
		setLocation({ start: e.target.selectionStart, end: e.target.selectionEnd });
	};
  const handleFile = (e) => {
		setFile(e.target.files[0]);
	}
	return (
		<form onSubmit={handleSubmit}>
			<div className="form-group">
				<label className="label">
					{' '}
					Başlık<span className="text-danger">*</span>
				</label>
				<input className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)}/>
			</div>
			<div className="form-group">
				<label className="label">
					{' '}
					Açıklama<span className="text-danger">*</span>
				</label>
				<input className="form-control" value={description} onChange={(e)=>setDescription(e.target.value)}/>
			</div>
			<div className="form-group">
				<label htmlFor="headerPicture">
					{' '}
					Ana Resim Seçiniz<span className="text-danger">*</span>
				</label>
				<input type="file" className="form-control-file" id="headerPicture" onChange={handleFile}/>
			</div>
			<div className="button-group">
				<button className="btn btn-sm" title="Seçili Alanı Kalın Yapar">
					<i class="fa fa-bold" onClick={(e) => handleClick(e, 'strong')}></i>
				</button>
				<button
					className="btn btn-sm"
					title="Seçili Alanı İtalic Yapar"
					onClick={(e) => handleClick(e, 'italic')}
				>
					<i class="fa fa-italic"></i>
				</button>
				<button
					className="btn btn-sm"
					title="Seçili Paragrafı Sola Yaslar"
					onClick={(e) => handleClick(e, 'left')}
				>
					<i class="fa fa-align-left"></i>
				</button>
				<button
					className="btn btn-sm"
					title="Seçili Paragrafı Ortalar"
					onClick={(e) => handleClick(e, 'center')}
				>
					<i class="fa fa-align-center"></i>
				</button>
				<button
					className="btn btn-sm"
					title="Seçili Paragrafı Sağa Yaslar"
					onClick={(e) => handleClick(e, 'right')}
				>
					<i class="fa fa-align-right"></i>
				</button>
				{setErrorEditor && <span>{errorEditor}</span>}
			</div>
			<div className="form-group">
				<label className="label">
					İçerik<span className="text-danger">*</span>{' '}
				</label>
				<textarea
					id="textArea"
					className={`form-control ${styles.textArea}`}
					onChange={handleChangeTextArea}
					onKeyPress={handleKey}
					value={content}
					onSelect={(e) => handleSelect(e)}
				/>
			</div>
			<div className="form-group">
				<select className="form-control">
					<option>Hashtags</option>
				</select>
			</div>
			<div className="button-group d-flex justify-content-end">
				<button
					type="button"
					class="btn btn-info"
					data-toggle="modal"
					data-target="#exampleModalLong"
	 
				>
					Önizleme
				</button>
				<button type="submit" className="btn btn-success ml-3">
					Yayınla 
				</button>
			</div>
				<PreviewArticle
				title={title}
				content={content}
				image={file}
				/>
			<div>{content.length > 0 ? <p>{content}</p> : <p>0</p>}</div>
		</form>
	);
}

export default EditorForm;
