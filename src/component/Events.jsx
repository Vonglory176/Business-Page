import EventTile from "./EventTile"

export default function Events() {
    return (
        <section id="events-section" className="container-fluid d-flex flex-wrap gap-3 justify-content-evenly">
            <EventTile/>
            <EventTile/>
            <EventTile/>
            <EventTile/>
        </section>
    )
}