import React from "react";
import Marquee from "react-fast-marquee";

function LatestNews() {
  return (
    <div className="flex items-center gap-5 p-3">
        <button className="px-6 py-2 bg-pink-700 text-white">Latest </button>
      <Marquee className="flex gap-8 items-center">
        <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
        <p>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
      </Marquee>
    </div>
  );
}

export default LatestNews;
