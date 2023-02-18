import './Contacts.css'
import toast from 'react-hot-toast';

import {AiOutlineMail, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

function Contacts() {

  return (
    <div id="contacts" className='page'>
      <h2 className='page-header'>Contacts</h2>
      <div className='card-container'>
        <a id= 'email-card' className='card' onClick={(event) => copyClipboard()}><AiOutlineMail className='icon'/></a>
        <a href='https://github.com/kris-bond' className='card'><AiFillGithub className='icon'/></a>
        <a href='https://www.linkedin.com/in/kristofer-bond-95b790a9/' className='card'><AiFillLinkedin className='icon'/></a>
      </div>
    </div>
  )
}

//href='mailto:kris4bond@gmail.com'

function copyClipboard() {

  /* Copy the text inside the text field */
  navigator.clipboard.writeText('kris4bond@gmail.com');

  /* Alert the copied text */
  toast('copied to clipboard', {
    icon: '📋',
  });
}

export default Contacts