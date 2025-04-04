import React from "react";

function ContestantTile(props) {
  console.log(props.profit > 0 ? "greater than zero" : "less than zero");

  return (
    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal">{props.contactName}</h4>
        </div>
        <div class="card-body">
          {props.contactImage ? (
            <img
              class="profile-img mt-2 rounded-circle"
              src={`./images/${props.contactImage}.png`}
              alt="contestant image"
            ></img>
          ) : (
            <img
              class="profile-img mt-2 rounded-circle"
              src="./images/default.png"
              alt="default image"
            ></img>
          )}
          <ul class="list-unstyled mt-2 mb-1">
            {props.position == 1 && (
              <li>
                Ranking : {props.position} <i class="bi bi-award goldmedal"></i>
              </li>
            )}
            {props.position == 2 && (
              <li>
                Ranking : {props.position}{" "}
                <i class="bi bi-award silvermedal"></i>
              </li>
            )}
            {props.position == 3 && (
              <li>
                Ranking : {props.position}{" "}
                <i class="bi bi-award bronzemedal"></i>
              </li>
            )}
            {props.position == 0 && <li>Ranking : {props.position} </li>}
            {props.position > 3 && <li>Ranking : {props.position} </li>}
            <li>Total Amount Spent : &#x20B9; {props.amountSpent} </li>
            <li>Total Amount Won : &#x20B9; {props.amountWon} </li>
            <li>
              {props.profit > 0 ? (
                <li className="profit">
                  Profit : &#x20B9; {props.profit}{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-up-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
                  </svg>
                </li>
              ) : (
                <li className="loss">
                  Loss: &#x20B9; {props.profit}{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-down-circle"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"
                    />
                  </svg>
                </li>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ContestantTile;
