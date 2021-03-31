
import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <h1>The Best Timer</h1>

        <div class="countdown-container">
            <div class="countdown-el days-c">
              <p class ="big-text" id="days">0</p>
              <span>days</span>
            </div>

            <div class="countdown-el hours-c">
              <p class ="big-text" id="hours">0</p>
              <span>hours</span>
            </div>

            <div class="countdown-el mins-c">
              <p class ="big-text" id="mins">0</p>
              <span>mins</span>
            </div>
            <div class="countdown-el seconds-c">
              <p class ="big-text" id="seconds">0</p>
              <span>seconds</span>
            </div>
        </div>
      </body>
    </div>
  );
}

export default App;
