import React from 'react';
import JobCard from './JobCard';

export default function ApplicationStatus({ jobs, onStatusChange }) {
  const appliedJobs = jobs.filter((job) => job.status);

  return (
    <>
      <h1 className="job-list-header">Application Status</h1>
      <div className="job-list">
        {appliedJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onStatusChange={onStatusChange}
          />
        ))}
      </div>
    </>
  );
}
