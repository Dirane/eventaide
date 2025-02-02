
import './App.css';

function App() {
  return (
    <div className='container'>
      <h1>Create Event</h1>

      <form>
        <div className='form-group'>
      <label htmlFor='organisername'>Organiser Name:</label>
      <input type="text"/>
      <label htmlFor='eventtitle'>Event title:</label>
      <input type="text"/>
      <label htmlFor='eventtype'>Event type:</label>
      <input type="text"/>
      <label htmlFor='location'>Location:</label>
      <input type="text"/>
      <label htmlFor='eventdate'>Event date:</label>
      <input type="date" />
      <label htmlFor='cost'>Cost:</label>
      <input type="text" />
      <label htmlFor='description'>Description:</label>
      <textarea name='description' id='description' cols={49} rows={10}></textarea>
      <button type='submit'>Submit</button>
      </div>
    </form>


    </div>
    
  );
}

export default App;
