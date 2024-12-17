import "./App.css";
import { useState } from "react";

type todo = {
  id: number;
  content: string;
  complate: boolean
};

const App = () => {
  const [quest, setQuest] = useState<todo[]>([]);
  const [input, setInput] = useState<string>('');

  const add = () => {
    console.log(input.trim())
    if(input.trim()){
      setQuest([...quest, {id: Date.now(), content: input, complate: false}]);
      setInput('');
    }
  }

  const deleteQuest = (id: number) => {
    setQuest(quest.filter((q) => q.id !== id));
  }

  const complate = (id: number) => {
    setQuest(quest.map((q) => q.id === id ? {...q, complate: !q.complate} : q))
  }

  return (
    <main>
      <div className="title">
        <h1>To-Do-List React js + TypeScript</h1>
        <div>
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="masukan tugas anda...."/>
          <button onClick={add}>Submit</button>
        </div>
      </div>

      <div className="content">
        <ul>
          {quest.map((data) => (
            <li  key={data.id}>
              <h3 style={{ textDecoration: data.complate ? 'line-through' : 'none', color: data.complate ? 'tomato' : 'black' }}>{data.content}</h3>
              <div>
                <input type="checkbox" checked={data.complate} onChange={() => complate(data.id)}/>
                <button onClick={() => deleteQuest(data.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default App;
