import EventTile from "./EventTile"
import eventData from "../data/events.js"
import { useEffect, useState } from "react"

export default function Events() {

        const eventElements = eventData.map(e => {return <EventTile name={e.name} date={e.date} location={e.location} booth={e.booth}/>})

    return (
        <section id="events-section" className="container-fluid">
            <h2 className="text-center text-white">Trade Shows For 2023</h2>
            <div id="eventTileContainer-div" className="d-flex flex-wrap p-3 justify-content-center">
                {eventElements}
            </div>
        </section>
    )
}