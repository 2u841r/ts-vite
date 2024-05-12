import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./components/Layout";
import Testts from "./components/Testts";

interface ServerData{
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

type StartState = number;  
interface EndState {
  value: number
}

function App() {
  const [data, setData] = useState<ServerData[]>([]);
  const [start, setStart] = useState<StartState>(5);
  const [end, setEnd] = useState<EndState>({value: 8});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnd({ value: Number(e.target.value) });
    // if (typeof end === 'number') {
    //   setEnd(Number(e.target.value));
    // } else {
    //   setEnd({ value: Number(e.target.value) })}

  };

  const handleSubmit = () => {
    fetch(`https://jsonplaceholder.typicode.com/photos?id_gte=${start}&id_lte=${end.value}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Layout>
        <Testts text="hellow" age={3} fx={handleSubmit} erre={data}  />
        <h2>Welcome</h2>
        <div>
          <label htmlFor="start">Start:</label>
          <input
            type="number"
            id="start"
            value={start}
            onChange={(e) => setStart(Number(e.target.value))}
          />
        </div>
        <div>
          <label htmlFor="end">End:</label>
          <input
            type="number"
            id="end"
            value={typeof end === 'number' ? end : end.value}
            onChange={handleInputChange}
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
        <div style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
          {data.map((item) => (
            <div key={item.id}>
              <img src={item.thumbnailUrl} alt={item.title} />
              <p>
                <strong> {item.id}</strong> {item.title.substr(0, 20)}
              </p>
            </div>
          ))}
        </div>
      </Layout>
    </>
  );
}

export default App;
