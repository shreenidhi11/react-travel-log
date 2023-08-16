import Card from "./components/Card";
import Navbar from "./components/Navbar";
import letchworth from './assets/letchworth.jpeg';
import niagara from './assets/niagara-falls-desktop.png';
import mountfuji from './assets/SG010_6.png';
import ontario from './assets/ontario_beach_charlotte_62620_1.png';
import watkins from './assets/watkins-glen-state-park-in-ne3aca26-800x800.jpeg';

const App = () => {
  const extData = [
    {

      id: 1,
      country: "JAPAN",
      description:
        "Island, the largest island in the country. It is an active volcano that last erupted in 1707-1708 and is considered one of the country's Three Holy Mountains along with Mount Tate and Mount Haku",
      coverImg: mountfuji,
      // coverImg: "../images/SG010_6.png",
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
      coverImg: letchworth,
      // coverImg: "../images/letchworth.jpeg",
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
      // coverImg: "../images/niagara-falls-desktop.png",
      coverImg: niagara,
      duration: {
        fromdate: 1,
        frommon: "Oct",
        todate: 18,
        tomon: "Nov",
        year: 2021,
      },
      location: "Niagara Falls",
    },
    {
      id: 4,
      country: "USA",
      description:
        "Known for its natural beauty, Watkins Glen State Park features a series of waterfalls and gorges that are sure to amaze anyone. An almost two mile hike will take you past 19 waterfalls and up over 800 stone steps.There are a number of small trails leading off of the Gorge Trail, giving way to a number of other outdoor activities close by the main trail. There are tent and trailer camp sites, swimming pools, picnic areas and guided tours of the local topography",
      // coverImg: "../images/niagara-falls-desktop.png",
      coverImg: watkins,
      duration: {
        fromdate: 19,
        frommon: "July",
        todate: 20,
        tomon: "July",
        year: 2023,
      },
      location: "Watkins Glen",
    },

    {
      id: 4,
      country: "USA",
      description:
        "Ontario Beach Park is located on the shore of Lake Ontario in the northernmost section of the City of Rochester near the Irondequoit border.",
      // coverImg: "../images/niagara-falls-desktop.png",
      coverImg: ontario,
      duration: {
        fromdate: 20,
        frommon: "Aug",
        todate: 21,
        tomon: "Aug",
        year: 2022,
      },
      location: "Ontario Beach Park",
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
