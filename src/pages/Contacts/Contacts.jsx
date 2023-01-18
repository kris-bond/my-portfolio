import './Contacts.css'

import {AiOutlineMail, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

function Contacts() {

  return (
    <div id="contacts" className='page'>
      <h2 className='page-header'>Contacts</h2>
      <div className='card-container'>
        <a href='mailto:kris4bond@gmail.com' className='card'><AiOutlineMail className='icon'/></a>
        <a href='https://github.com/kris-bond' className='card'><AiFillGithub className='icon'/></a>
        <a href='https://www.linkedin.com/in/kristofer-bond-95b790a9/' className='card'><AiFillLinkedin className='icon'/></a>
      </div>
    </div>
  )
}

export default Contacts