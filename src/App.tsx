// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
import Card from "./components/Card";
import Navbar from "./components/Navbar";

const App = () => {
  const extData = [
    {

      
      id: 1,
      country: "JAPAN",
      description:
        "Island, the largest island in the country. It is an active volcano that last erupted in 1707-1708 and is considered one of the country's Three Holy Mountains along with Mount Tate and Mount Haku",
      coverImg: "SG010_6.png",
      duration: {
        fromdate: 12,
        frommon: "Jun",
        todate: 28,
        tomon: "Jun",
        year: 2021,
      },
      location: "Mount Fuji",
    },
    {
      id: 2,
      country: "USA",
      description:
        "Letchworth State Park is a beautiful state park located in western New York, USA. Known as the Grand Canyon of the East, Letchworth State Park is home to spectacular natural beauty, including a deep gorge carved by the Genesee River, three major waterfalls, and numerous hiking trails",
      coverImg: "letchworth.jpeg",
      duration: {
        fromdate: 27,
        frommon: "May",
        todate: 8,
        tomon: "Jun",
        year: 2021,
      },
      location: "Letchworth State Park",
    },
    {
      id: 3,
      country: "USA",
      description:
        "Niagara Falls is a group of three waterfalls located on the Niagara River, which straddles the border between the United States and Canada. The three waterfalls are the Horseshoe Falls, the American Falls, and the Bridal Veil Falls",
      coverImg: "niagara-falls-desktop.png",
      duration: {
        fromdate: 1,
        frommon: "Oct",
        todate: 18,
        tomon: "Nov",
        year: 2021,
      },
      location: "Niagara Falls",
    },
  ];

  const displayData = extData.map((item) => {
    return (
      <Card
        coverImg={item.coverImg}
        country={item.country}
        location={item.location}
        fromdate={item.duration.fromdate}
        frommon={item.duration.frommon}
        todate={item.duration.todate}
        tomon={item.duration.tomon}
        year={item.duration.year}
        desc={item.description}
      />
    );
  });

  return (
    <div>
      <Navbar />
      {displayData}
    </div>
  );
};

export default App;
