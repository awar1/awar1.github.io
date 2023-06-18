import Modal from 'react-bootstrap/Modal'
import { useState } from 'react'

export default function Card(props){
    const [shown, setShown] = useState(false)

    return(
        <div className="card">
            <h1>{props.id}. {props.name}</h1>
            <div className="card--info">
                <img onClick={()=>setShown(true)} src={props.image} />
                <button onClick={()=>setShown(true)}
                className='btn btn-warning'>Pokaż więcej</button>
            </div>
            
            <Modal show={shown}  className='modal-bg'
            onHide={()=>setShown(false)}>
                <Modal.Header className='modal-header'>
                    {props.name}
                    <img className='modal-img' 
                    src={props.image} />
                    </Modal.Header>
                <Modal.Footer>{props.description}</Modal.Footer>
            </Modal>
        </div>
    )
}