import React, { useState } from 'react';

type TeamRequestItemProps = {
  request: {
    id: string;
    organization: string;
    short_description: string;
    dedicated_contact: boolean;
    languages: string[];
    impact_area: string;
    long_description: string;
    website: string;
  };
};

export const TeamRequestItem = ({ request }: TeamRequestItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="team-request-item">
      <h3>
        <a href={request.website} target="_blank" rel="noopener noreferrer">
          {request.organization}
        </a>
      </h3>
      <p>{request.short_description}</p>
      <p>Dedicated Contact: {request.dedicated_contact ? 'Yes' : 'No'}</p>
      <p>Languages: {request.languages.join(', ')}</p>
      <p>Impact Area: {request.impact_area}</p>
      {isExpanded && <p>{request.long_description}</p>}
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};
