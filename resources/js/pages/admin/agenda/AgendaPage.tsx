import { useState, useEffect, useContext } from "react";
import { WindowContext } from "@/context/window";
import { EventClickArg } from "@fullcalendar/core";
import dayGridPlugin from '@fullcalendar/daygrid';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction"
import timeGridPlugin from '@fullcalendar/timegrid';
import AdminLayout from "@/components/admin/layouts";
import UpdateAgenda from "@/components/admin/agenda/update";
import CreateAgenda from "@/components/admin/agenda/create";
import FullCalendar from '@fullcalendar/react';
import styles from "./styles.module.css";
import { events } from "@/lib/dummy-data";
import { formatDateTimeLocal } from "@/lib";
import { Agenda } from "@/types/news";

export default function AgendaPage({ agenda }: { agenda: Agenda[] }) {
    const [windowWidth, setWindowWidth] = useState(1024);
    const { setWindow } = useContext(WindowContext)

    useEffect(() => {
        const updateWindowWidth = () => setWindowWidth(window.innerWidth);
        console.log(agenda);
        if (typeof window !== 'undefined') {
            updateWindowWidth();
            window.addEventListener('resize', updateWindowWidth);
        }

        return () => {
            window.removeEventListener('resize', updateWindowWidth);
        };
    }, []);

    console.log(agenda);

    const handleEventClick = (e: EventClickArg) => {
        const event = e.event;
        let eventDetails = `Event: ${event.title}\n`;
        eventDetails += `Description: ${event.extendedProps.description}\n`;
        eventDetails += `Location: ${event.extendedProps.location}\n`;
        if (event.extendedProps.additionalInfo) {
            eventDetails += `Additional Info: ${event.extendedProps.additionalInfo}\n`;
        }
        if (event.extendedProps.participants) {
            eventDetails += `Participants:\n`;
            event.extendedProps.participants.forEach((participant: any) => {
                eventDetails += `- ${participant.name} (${participant.location})\n`;
            });
        }
        console.log(eventDetails);
        setWindow({
            windowElement: {
                title: "Update Agenda",
                children: <UpdateAgenda data={event} />
            }
        })
    };

    const handleDateClick = (info: DateClickArg) => {
        setWindow({
            windowElement: {
                title: "Buat Agenda Baru",
                children: <CreateAgenda dateStart={formatDateTimeLocal(new Date(info.dateStr))} />
            }
        })
    };

    return (
        <AdminLayout>
            <div className="my-8 px-24 flex justify-between">
                <h2 className="text-2xl font-semibold">Manage Agenda GenBI</h2>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                    <a href={route('agenda.export')} download>Export PDF</a>
                </button>
            </div>
            <div className={`${styles.fullCalendarWrapper} ml:px-24 sm:px-16 xs:px-4 px-2 ml:text-base sm:text-sm text-xs`}>
                <FullCalendar
                    key={windowWidth}
                    plugins={[
                        resourceTimelinePlugin,
                        dayGridPlugin,
                        interactionPlugin,
                        timeGridPlugin
                    ]}
                    initialView="dayGridMonth"
                    dateClick={(info) => handleDateClick(info)}
                    events={events}
                    eventClick={(e: EventClickArg) => handleEventClick(e)}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: windowWidth < 680 ? '' : 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay'
                    }}
                    contentHeight="auto"
                    aspectRatio={2}
                />
            </div>
        </AdminLayout >
    )
}
