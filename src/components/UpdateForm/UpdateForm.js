export default function UpdateForm(props) {
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = await props.updateBookmark(props.bookmark, props.id, props.token)
            props.setBookmark(data)
            props.setShowUpdate(false)
        } catch (error) {
            console.error(error)
        }
    }

    const handleChange = (e) => {
        props.setBookmark({...props.bookmark, [e.target.name]: e.target.value })
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Update Blog Below</h2>
            <input placeholder='Title' type="text" name="title" value={props.bookmark.title} onChange={handleChange}/>
            <input placeholder='BODY' type="text" name="body" value={props.bookmark.body} onChange={handleChange}/>
            <input type="submit" value="Submit Update Data"/>
        </form>
    )


}