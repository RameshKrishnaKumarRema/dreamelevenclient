import { react } from "react";

function Header(props) {
  return (
    <div>
      <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <a
          href="/"
          class="d-flex align-items-center link-body-emphasis text-decoration-none"
        >
          <i class="bi bi-trophy-fill header-logo"></i>
          <span class="fs-4">Dream 11</span>
        </a>

        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <a class="me-5 py-2 link-body-emphasis text-decoration-none" href="#">
            Home
          </a>
          <a class="me-1 py-2 link-body-emphasis text-decoration-none" href="#">
            Points Table
          </a>
        </nav>
      </div>
      <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
        <h1 class="display-4 fw-normal text-body-emphasis">IPL 2025</h1>
        <p class="fs-5 text-body-secondary">
          Track and compare contestant rankings in real-time with our intuitive
          leaderboard. Stay updated on performance, progress, and competition
          standings effortlessly. Our leaderboard keeps you updated with
          accurate and transparent rankings.
        </p>
      </div>
    </div>
  );
}
export { Header };
