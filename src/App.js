import './App.css';
import {useState} from "react";

function App() {
  const [author,setAuthor ] = useState('');
  const [text,setText ] = useState('');
  return (
  <div class="background">

    <div class="khk">KHK</div>


    <div class="taust">
      <div class="mullike"> <p>Tai pohlad ja jõhvikad, kui see asi neile kohale ei jõua! </p>
        <div class="aeg">2/14/2022</div>
        <div class="autor">Jane Smith</div>

      </div>
    </div>

    <div class="uus_sonum">

      <div class="parandus">
        <div class="guest_box">

          <form>
            <input type="text"  name="message" placeholder="Username..." />
          </form>

        </div>
        <div class="uus_tekst">

          <form>
           <input type="text"  name="message" placeholder="Your message here..." />
          </form>

        </div>


      <button>Saada</button>
    </div>
  </div>
  </div>
  );
}

export default App;
