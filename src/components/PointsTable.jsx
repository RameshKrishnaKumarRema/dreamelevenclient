import React from "react";
import { useState } from "react";

function PointsTable({ pointDetails }) {
  if (!pointDetails.length) {
    return <div>Loading...</div>;
  }

  const [headers, setHeaders] = useState(Object.keys(pointDetails[0]));

  return (
    <table className="table table-bordered">
      <thead>
        <tr class="text-center">
          {headers.map((header) => {
            if (header === "matchid") {
              header = "Sl No";
            } else if (header === "hometeam") {
              header = "Home";
            } else if (header === "awayteam") {
              header = "Away";
            } else if (header === "matchdate") {
              header = "Date";
            }
            return <th key={header}>{header}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {pointDetails.map((row, index) => {
          const rowHasValueOne = Object.values(row).includes(1);
          return (
            <tr key={index} class="text-center">
              {headers.map((header, colIndex) => {
                const cellValue = row[header.toLowerCase()];

                // Apply green background only if cell value === 1
                let cellStyle;

                if (colIndex != 0) {
                  if (row[header] === 1) {
                    cellStyle = { backgroundColor: "#AAFF00" };
                  } else if (row[header] === 2) {
                    cellStyle = { backgroundColor: "#9FE2BF" };
                  } else if (row[header] === 3) {
                    cellStyle = { backgroundColor: "#AFE1AF" };
                  } else if (row[header] === 0) {
                    row[header] = "NP";
                  } else if (row[header] === "NP") {
                    cellStyle = { backgroundColor: "#f5bc7b" };
                  } else {
                    cellStyle = {};
                  }
                }
                return (
                  <td key={colIndex} style={cellStyle}>
                    {row[header]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default PointsTable;
