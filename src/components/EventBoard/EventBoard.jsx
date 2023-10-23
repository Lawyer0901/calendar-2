import PropTypes from 'prop-types';
import css from './EventBoard.module.css'
import {Event} from 'components/Event/Event'



export const EventBoard = ({ events }) => {
    return <div  className={css.eventBoard}>{events.map(event =><Event key={event.name} name={event.name} location={event.location} speaker={event.speaker} start={event.time.start} end={event.time.end} type={event.type} />)}</div>
}

EventBoard.prototype = {
    events: PropTypes.arrayOf(
        PropTypes.exact({
            name: PropTypes.string.isRequired,
            location: PropTypes.string.isRequired,
            speaker: PropTypes.string.isRequired,

            
        })
    )
}