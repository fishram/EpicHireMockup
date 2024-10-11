import React, { useState } from 'react';
import RecommendedJobs from './RecommendedJobs';
import ApplicationStatus from './ApplicationStatus';
import jobData from '../../jobData';

export default function JobListContainer() {
  const [jobs, setJobs] = useState(jobData);

  const handleApply = (jobId) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === jobId ? { ...job, status: 'Applied' } : job
      )
    );
  };

  const handleStatusChange = (jobId, newStatus) => {
    setJobs((prevJobs) =>
      prevJobs.map((job) =>
        job.id === jobId ? { ...job, status: newStatus } : job
      )
    );
  };

  return (
    <div className="job-list-container">
      <RecommendedJobs
        jobs={jobs}
        onApply={handleApply}
        onStatusChange={handleStatusChange}
      />
      <ApplicationStatus
        jobs={jobs}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
}
