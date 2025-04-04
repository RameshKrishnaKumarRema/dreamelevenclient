import { useState, useEffect } from "react";
import viteLogo from "/vite.svg";
import axios from "axios";
import { Header } from "./Header";
import ContestantTile from "./ContestantTile";
import Footer from "./Footer";

function App() {
  const [contestants, setContestants] = useState([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  const fecthAPI = async () => {
    const response = await axios.get("https://dream11server-7ar3.vercel.app/");
    setContestants(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fecthAPI();
  }, []);

  return (
    <>
      <div class="container py-3">
        <Header lastUpdatedDate={currentDate.toLocaleDateString()} />
        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
          {contestants.map((contestant) => (
            <ContestantTile
              contactName={contestant.contestantname}
              contactImage={contestant.photoname}
              amountSpent={contestant.amountspent}
              amountWon={contestant.amountwon}
              profit={contestant.profit.replace(/[^0-9\.-]+/g, "")}
              position={contestant.position}
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
