import React from "react";

function LastFiveMatches(props) {
  console.log("Thisis from", props.fivematches);
  const numbers = props.fivematches[0].split(",");
  return (
    <ul class="list-unstyled d-flex justify-content-between w-50 py-2 mx-auto no-border ">
      {numbers.map((number, idx) => {
        let cellStyle;
        if (number == 0) {
          number = "NP";
        }

        if (number == 1) {
          cellStyle = { backgroundColor: "#AAFF00" };
        } else if (number == 2) {
          cellStyle = { backgroundColor: "#9FE2BF" };
        } else if (number == 3) {
          cellStyle = { backgroundColor: "#AFE1AF" };
        } else if (number == "NP") {
          cellStyle = { backgroundColor: "#f5bc7b" };
        } else {
          cellStyle = { backgroundColor: "#f7f6f5" };
        }
        return (
          <li class="px-2" style={cellStyle} key={idx}>
            {number}
          </li> // Create an <li> for each number
        );
      })}
    </ul>
  );
}

export default LastFiveMatches;
