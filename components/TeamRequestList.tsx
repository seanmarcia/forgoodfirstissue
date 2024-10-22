import React, { useState, useEffect } from 'react';
import { TeamRequestItem } from './TeamRequestItem';
import teamRequests from '../team_requests.json';
import { GeneralFilter } from './GeneralFilter';
import { LanguageFilter } from './LanguageFilter';
import { SDGFilter } from './SDGFilter';

const TeamRequestList = () => {
  const [filter, setFilter] = useState('');
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedImpactAreas, setSelectedImpactAreas] = useState<string[]>([]);
  const [filteredRequests, setFilteredRequests] = useState(teamRequests);

  useEffect(() => {
    const filtered = teamRequests.filter((request) => {
      const matchesFilter = Object.values(request).some((value) =>
        value.toString().toLowerCase().includes(filter.toLowerCase())
      );
      const matchesLanguages =
        selectedLanguages.length === 0 ||
        selectedLanguages.some((language) => request.languages.includes(language));
      const matchesImpactAreas =
        selectedImpactAreas.length === 0 ||
        selectedImpactAreas.includes(request.impact_area);

      return matchesFilter && matchesLanguages && matchesImpactAreas;
    });

    setFilteredRequests(filtered);
  }, [filter, selectedLanguages, selectedImpactAreas]);

  const languageOptions = [
    ...new Set(teamRequests.flatMap((request) => request.languages))
  ].map((language) => ({ value: language, label: language }));

  const impactAreaOptions = [
    ...new Set(teamRequests.map((request) => request.impact_area))
  ].map((impactArea) => ({ value: impactArea, label: impactArea }));

  return (
    <div>
      <GeneralFilter filter={filter} setFilter={setFilter} />
      <LanguageFilter setSelectedLanguages={setSelectedLanguages} languageOptions={languageOptions} />
      <SDGFilter setSelectedTopics={setSelectedImpactAreas} topicOptions={impactAreaOptions} />
      <div>
        {filteredRequests.map((request) => (
          <TeamRequestItem key={request.id} request={request} />
        ))}
      </div>
    </div>
  );
};

export default TeamRequestList;
