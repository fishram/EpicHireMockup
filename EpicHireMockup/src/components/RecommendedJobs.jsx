import React from 'react';
import JobCard from './JobCard';

export default function RecommendedJobs({ jobs, onApply, onStatusChange }) {
  const recommendedJobs = jobs.filter((job) => !job.status);

  return (
    <>
      <h1 className="job-list-header">Recommended Jobs</h1>
      <div className="job-list">
        {recommendedJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onApply={onApply}
            onStatusChange={onStatusChange}
          />
        ))}
      </div>
    </>
  );
}
