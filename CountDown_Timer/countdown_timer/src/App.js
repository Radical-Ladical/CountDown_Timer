
import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <h1>The Best Timer</h1>

        <div class="countdown-container">
            <div class="days-c">
              <p clas ="big-text" id="hours">
                <span>days</span>
              </p>
            </div>

            <div class="hours-c">
              <p clas ="big-text" id="hours">
                <span>days</span>
              </p>
            </div>

            <div class="mins-c">
              <p clas ="big-text" id="mins">
                <span>days</span>
              </p>
            </div>
            <div class="seconds-c">
              <p clas ="big-text" id="seconds">
                <span>days</span>
              </p>
            </div>
        </div>
      </body>
    </div>
  );
}

export default App;
