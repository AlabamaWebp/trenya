import './App.css';
import items from './items';

function App() {


  return (
    <div className='wrapper'>
      {items.map((item) => {
        return (
          <div className='item'>
            <div>
              <h1>{item.name}</h1>
              <ul>
                {item.steps.map((step) => {
                  return <li className='step'>{step}</li>
                })}
              </ul>
            </div>

          </div>
        )
      })}
    </div>
  );
}

export default App;
