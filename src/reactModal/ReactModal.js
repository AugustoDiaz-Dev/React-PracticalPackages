import React, {useState} from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root');
const ReactModal = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
        <button onClick={() => setModalIsOpen(true)}>Open modal</button>
        
    <Modal 
    isOpen={modalIsOpen} 
    onRequestClose={() => setModalIsOpen(false)}
    // shouldCloseOnOverlayClick={false}
    style={{
        overlay: {
            backgroundColor: 'orange'
        },
        content: {
            color: 'green'
        }
    }}
    >
        <h2>Modal title</h2>
        <p>This is the body</p>
        <button onClick={() => setModalIsOpen(false)}>Close modal</button>
    </Modal>
    </div>
  )
}

export default ReactModal;