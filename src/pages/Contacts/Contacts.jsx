import './Contacts.css'

function Contacts() {

  return (
    <div id="contacts" className='page'>
      <h2 className='page-header'>Contacts</h2>
      <form action='mailto:kris4bond@gmail.com' method='post' encType='text/plain'>
        <label>Name:</label>
        <input type="text" name="name"></input>

        <label>Email:</label>
        <input type="text" name="mail"></input>

        <label>Message:</label>
        <input type="text" name="msg"></input>

        <input type="submit" value="Send"></input>
      </form>
    </div>
  )
}

export default Contacts