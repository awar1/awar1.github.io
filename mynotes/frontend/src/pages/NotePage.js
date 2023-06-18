import React, {useState, useEffect} from 'react'
import { ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'
import { Link,useParams,useNavigate } from 'react-router-dom'

const NotePage = (props) => {
    let navigate = useNavigate()
    let params = useParams()
    let noteId = params.id

    let [note, setNote] = useState(null)
    useEffect(() => {
        getNote()
    }, [noteId])

    let getNote = async ()=> {
      if (noteId === 'new') return
      let response = await fetch(`/api/notes/${noteId}`)
      let data = await response.json()
      setNote(data)
    }

    let updateNote = async ()=> {
      if (noteId === 'new') return
      fetch(`/api/notes/${noteId}/`,{
        method: "PUT",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(note)
      })
    }

    let createNote = async ()=> {
      fetch(`/api/notes/`,{
        method: "POST",
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(note)
      })
    }

    let deleteNote = async ()=> {
      fetch(`/api/notes/${noteId}/`,{
        method:'DELETE',
        headers:{
          'Content-Type': 'application/json'
        }
      })
      navigate('/')
    }

    let handleSubmit = ()=> {
      console.log(note === null)
      if(note === null){
        navigate('/')
      }
      else if(noteId !== 'new' && !note.body){
        deleteNote()
      } else if(noteId !== 'new'){
        updateNote()
      } else if(noteId === 'new' && note.body !== null){
        createNote()
      }
      navigate('/')
    }

    let handleChange = (value)=> {
      setNote(note => ({...note,body:value}))
    }

  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
            <ArrowLeft onClick={handleSubmit} />
        </h3>
        {noteId === 'new'
        ? <button onClick={handleSubmit}>Done</button>
        : <button onClick={deleteNote}>Delete</button>
        }
      </div>
      <textarea onChange={(e) => {handleChange(e.target.value)}} value={note?.body}></textarea>
    </div>
  )
}

export default NotePage
