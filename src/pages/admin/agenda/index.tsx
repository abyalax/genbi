import dynamic from "next/dynamic";
import AdminLayout from "../../../component/admin/__layout"
import { useContext, useEffect, useState } from "react";
import dayGridPlugin from '@fullcalendar/daygrid';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import timeGridPlugin from '@fullcalendar/timegrid';
import { events } from "@/utils/dummy-data";
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import styles from "./styles.module.css"
import { EventClickArg } from "@fullcalendar/core";
import { WindowContext } from "@/context/window";
import CreateAgenda from "@/component/admin/agenda/create";
import UpdateAgenda from "@/component/admin/agenda/update";

const FullCalendar = dynamic(() => import('@fullcalendar/react'), { ssr: false });

const AdminAgenda = () => {
    const [windowWidth, setWindowWidth] = useState(1024);
    const { setWindow } = useContext(WindowContext)

    useEffect(() => {
        const updateWindowWidth = () => setWindowWidth(window.innerWidth);

        if (typeof window !== 'undefined') {
            updateWindowWidth();
            window.addEventListener('resize', updateWindowWidth);
        }

        return () => {
            window.removeEventListener('resize', updateWindowWidth);
        };
    }, []);

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
                children: <UpdateAgenda data={event}/>
            }
        })
    };

    const handleDateClick = (info: DateClickArg) => {
        console.log(info.dateStr);
        setWindow({
            windowElement: {
                title: "Buat Agenda Baru",
                children: <CreateAgenda />
            }
        })
    };

    return (
        <AdminLayout>
            <h2 className="text-2xl font-semibold my-8">Manage Agenda GenBI</h2>
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

export default AdminAgenda
