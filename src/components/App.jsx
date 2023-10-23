import { EventBoard } from "./EventBoard/EventBoard";
import { PageTitle } from "./PageTitle/PageTitle";
import upcoming from 'upcoming-events.json'

export const App = () => {
  return <div><PageTitle text='10th Core Worlds Coalition Conference' />
    <EventBoard events={ upcoming} />
  </div>
  
  
};
