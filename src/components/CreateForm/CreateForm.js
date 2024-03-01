import {useState} from 'react'
import {useNavigate} from 'react-router-dom'


export default function CreateForm(props) {
    const [ formData, setFormData ] = useState({
        title: '',
        body: ''
    })
    const navigateTo = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = await props.createBookmark(formData, props.token)
            // cool thing to do once there is a showpage done
            navigateTo(`/bookmark/${data._id}`)
        } catch (error) {
            console.error(error)
        }
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value })
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Create A New BookmarkPost {props.user.name} </h2>
            <input placeholder='Title' type="text" name="title" value={formData.title} onChange={handleChange}/>
            <input placeholder='BODY' type="text" name="body" value={formData.body} onChange={handleChange}/>
            <input type="submit" value="Create Bookmark"/>
        </form>
    )


}