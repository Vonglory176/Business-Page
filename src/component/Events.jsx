import EventTile from "./EventTile"
import eventData from "../data/events.js"
import { useEffect, useState } from "react"

export default function Events() {

        const eventElements = eventData.map(e => {return <EventTile name={e.name} date={e.date} location={e.location} booth={e.booth}/>})

    return (
        <section id="events-section" className="container-fluid d-flex flex-wrap gap-3 p-3 justify-content-evenly">
            {eventElements}
        </section>
    )
}