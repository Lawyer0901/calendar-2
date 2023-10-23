import PropTypes from 'prop-types';
import { FaMapMarkerAlt,FaUserAlt, FaCalendarAlt, FaClock } from "react-icons/fa"
import css from './Event.module.css'
import { formatEndEvent, formatStartEvent } from "utils";
import { iconSize } from 'constants';


export const Event = ({ name, location, speaker, start, end, type }) => {
    // console.log(css)
    // console.log(css[type])
    const startEvent = formatStartEvent(start)
    const endEvent = formatEndEvent(start, end)
    return (<div className={css.event}>
  <h2 className={css.title}>{name}</h2>
  <p className={css.info}>
    <FaMapMarkerAlt className={css.icon} size={iconSize.sm}/>
   {location}
  </p>
  <p className={css.info}>
    <FaUserAlt className={css.icon} size={iconSize.sm}/>
    {speaker}
  </p>
  <p className={css.info}>
    <FaCalendarAlt className={css.icon} size={iconSize.sm}/>
    {startEvent}
  </p>
  <p className={css.info}>
    <FaClock className={css.icon} size={iconSize.sm}/>
   {endEvent}
  </p>
        <span className={`${css.chip} ${css[type]}`}>{type}</span>
    </div>)
    
}


Event.prototype = {
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    speaker: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}
