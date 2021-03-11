import './App.css';
import Collapse from './components/collapse/Collapse';

const text = `Давно отверженный блуждал
В пустыне мира без приюта:
Вослед за веком век бежал,
Как за минутою минута,
Однообразной чередой.
Ничтожной властвуя землей,
Он сеял зло без наслажденья,
Нигде искусству своему\nОн не встречал сопротивленья —
И зло наскучило ему`

function App() {
  return (
    <div className="App">
        <Collapse text={text}/>
    </div>
  );
}

export default App;
