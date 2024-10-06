import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import "./SkeletonTeamDisplay.scss";

export default function SkeletonTeamDisplay({}) {
  return (
    <>
      <div className="skeleton-display__container">
        <div className="skeleton-display__members">
          <Link to={`/`} key={1} className="skeleton-display__member-link">
            <Skeleton className="skeleton-display__member-img" />
          </Link>
          <Link to={`/`} key={1} className="skeleton-display__member-link">
            <Skeleton className="skeleton-display__member-img" />
          </Link>
          <Link to={`/`} key={1} className="skeleton-display__member-link">
            <Skeleton className="skeleton-display__member-img" />
          </Link>
          <Link to={`/`} key={1} className="skeleton-display__member-link">
            <Skeleton className="skeleton-display__member-img" />
          </Link>
        </div>
        <div className="skeleton-display__right">
          <p className="skeleton-display__team-label">
            <Skeleton width={"85px"} />
          </p>
          <p className="skeleton-display__team-name">
            <Skeleton width={"160px"} />
          </p>
        </div>
      </div>
    </>
  );
}
