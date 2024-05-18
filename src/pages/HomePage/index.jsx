import { JourneyDetail } from '../../components/JourneyDetail';
import { JourneyPicker } from '../../components/JourneyPicker';
import React, { useState } from 'react';

export const HomePage = () => {
  const [journey, setJourney] = useState(null);
console.log(journey);
  const handleJourneyChange = (journeyData) => {
    console.log('Hello', journeyData);
    setJourney(journeyData);
  };

  return (
    <main>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {
        journey ? <p>{`Nalezeno spojení s id ${journey.journeyId} `}</p> : null
}
<JourneyDetail/>
    </main>
  );
};
