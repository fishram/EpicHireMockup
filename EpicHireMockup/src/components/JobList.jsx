import React, { useState } from 'react';
import JobCard from "./cards/JobCard";
import jobData from "../../jobData";

export default function JobList() {
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

    const recommendedJobs = jobs.filter((job) => !job.status);
    const appliedJobs = jobs.filter((job) => job.status);

    return (
        <div className="job-list-container">
          <h1 className="job-list-header">Recommended Jobs</h1>
          <div className="job-list">
            {recommendedJobs.map((job) => (
              <JobCard 
                key={job.id} 
                job={job} 
                onApply={handleApply} 
                onStatusChange={handleStatusChange}
              />
            ))}
          </div>
          
          <h1 className="job-list-header">Application Status</h1>
          <div className="job-list">
            {appliedJobs.map((job) => (
              <JobCard 
                key={job.id} 
                job={job} 
                onStatusChange={handleStatusChange}
              />
            ))}
          </div>
        </div>
      );
}
