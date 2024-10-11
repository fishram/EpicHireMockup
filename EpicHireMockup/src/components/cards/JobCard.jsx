import React from 'react';

export default function JobCard(props) {
  const { job, onApply, onStatusChange } = props;

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    onStatusChange(job.id, newStatus);
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'Applied':
        return 'status-applied';
      case 'Interview':
        return 'status-interview';
      case 'Offered':
        return 'status-offered';
      case 'Rejected':
        return 'status-rejected';
      default:
        return '';
    }
  };

return (
  <div className={`job-card ${job.status ? getStatusClass(job.status) : ''}`}>
      <img
        src={job.companyLogo}
        alt={`${job.companyName} logo`}
        className="company-logo"
      />
      <h3 className="job-title">{job.jobTitle}</h3>
      <div className="job-info">
        <h4 className="company-name">{job.companyName}</h4>
        <p className="experience-level">{job.experienceLevel}</p>
        <p className="location">{job.location}</p>
        <p className="remote-type">{job.remoteType}</p>
        {job.status ? (
          <div className="status-bar">
            <label htmlFor={`status-select-${job.id}`}>Status:</label>
            <select
              id={`status-select-${job.id}`}
              value={job.status}
              onChange={handleStatusChange}
            >
              <option value="Applied">Applied</option>
              <option value="Interview">Interview</option>
              <option value="Offered">Offered</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
        ) : (
          <button onClick={() => onApply(job.id)}>Apply</button>
        )}
      </div>
    </div>
  );
}
