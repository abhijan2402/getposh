import image from './image.png';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <h1>hi</h1> */}
      <div className='MainApp'>
        <div className='InnerMainDiv1'>
          <div className='Innerh1'>
            <h1>GetPosh</h1>
          </div>
          <div className='InnerP'>
            <p>Fashion is a form of self-expression with a specific context, such as time, place and purpose. GetPosh is such a innovative shop that promotes the higher brands for branded People.</p>
          </div>
          <div className='Innerbtn'>
            <button className='ShopBtn'>Visit Shop</button>
          </div>
        </div>
        <div className='InnerMainDiv2'>
          <img src={image} className='img_to_view' />
        </div>
      </div>
    </div>
  );
}

export default App;
