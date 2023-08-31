import {Col, Row} from "react-bootstrap";

export default function EventTile({name,date,location,booth}) {
    return (
        <Col xs="12" sm="5" md="5" xl="4" className="eventTile-div text-center text-white rounded-1">
            <h5>{name}</h5>
            <hr style={{width:"80%", margin:"0 auto"}}/>
            <h6 style={{margin:"3px"}}>{date}</h6>
            <span>{location}</span>
            <span>{booth}</span>
        </Col>
    )
}