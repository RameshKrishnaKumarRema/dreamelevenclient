import { useState, useEffect } from "react";
import viteLogo from "/vite.svg";
import axios from "axios";
import { Header } from "./Header";
import ContestantTile from "./ContestantTile";
import Footer from "./Footer";
import Border from "./Border";
import PointsTable from "./PointsTable";

function App() {
  const [contestants, setContestants] = useState([]);
  const [pointsTable, setPointsTable] = useState([]);
  const [lastfiveMatchesResult, setlastfiveMatchesResult] = useState([]);

  const fecthAPI = async () => {
    const response = await axios.get("https://dream11server-7ar3.vercel.app/");
    setContestants(response.data.contestantTile);
    setPointsTable(response.data.pointsTable);
    setlastfiveMatchesResult(response.data.lastFiveMatches);
  };

  useEffect(() => {
    fecthAPI();
  }, []);

  return (
    <>
      <div class="container py-3">
        <Header />
        <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
          {contestants.map((contestant) => {
            const fivePosistions = lastfiveMatchesResult
              .filter((c) => c.contestantid === contestant.contestantid)
              .map((c) => c.lastfivepositions);

            return (
              <ContestantTile
                contactName={contestant.contestantname}
                contactImage={contestant.photoname}
                amountSpent={contestant.amountspent}
                amountWon={contestant.amountwon}
                profit={contestant.profit.replace(/[^0-9\.-]+/g, "")}
                position={contestant.position}
                lastFivePositions={fivePosistions}
              />
            );
          })}
        </div>
        <Border />
        <PointsTable pointDetails={pointsTable} />
        <Footer />
      </div>
    </>
  );
}

export default App;
