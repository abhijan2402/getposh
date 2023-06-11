import image from './image.png';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <h1>hi</h1> */}
      <div className='MainApp'>
        <div className='InnerMainDiv1'>
          <div className='Innerh1'>
            <h1>ShppName</h1>
          </div>
          <div className='InnerP'>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>
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
