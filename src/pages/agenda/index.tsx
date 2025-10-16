import Navbar from "@/component/navbar";
import dynamic from 'next/dynamic';
import interactionPlugin from '@fullcalendar/interaction';
import Footer from "@/component/footer";
import dayGridPlugin from '@fullcalendar/daygrid';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';
import timeGridPlugin from '@fullcalendar/timegrid';
import { events } from "@/utils/dummy-data";
import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./styles.module.css"
import { EventClickArg } from "@fullcalendar/core";

const FullCalendar = dynamic(() => import('@fullcalendar/react'), { ssr: false });

const AgendaPage = () => {
  const [windowWidth, setWindowWidth] = useState(1024);

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
    eventDetails += `Keterangan: ${event.extendedProps.keterangan}\n`;
    if (event.extendedProps.additionalInfo) {
      eventDetails += `Additional Info: ${event.extendedProps.additionalInfo}\n`;
    }
    if (event.extendedProps.participants) {
      eventDetails += `Participants:\n`;
      event.extendedProps.participants.forEach((participant: any) => {
        eventDetails += `- ${participant.name}  ${participant.keterangan}\n`;
      });
    }
    alert(eventDetails);
  };

  return (
    <>
      <Head>
        <title>GENBI UNISKA - Agenda</title>
        <meta name="description" content="Lihat jadwal lengkap kegiatan dan program kerja GENBI UNISKA. Halaman agenda ini memuat kalender dinamis yang menampilkan berbagai kegiatan yang telah dan akan dilaksanakan oleh Generasi Baru Indonesia Universitas Islam Kadiri (UNISKA)." />
        <meta name="keywords" content="Agenda GENBI, Jadwal Kegiatan GENBI UNISKA, Kalender Kegiatan, Program Kerja GENBI, Jadwal Proker UNISKA, GENBI UNISKA Agenda" />
        <meta name="author" content="GENBI KOMINFO UNISKA" />
        <meta property="og:title" content="Agenda GENBI UNISKA - Jadwal Kegiatan" />
        <meta property="og:description" content="Kalender dinamis yang memuat jadwal kegiatan GENBI UNISKA. Temukan informasi proker terbaru yang akan maupun yang telah dilaksanakan oleh GENBI UNISKA." />
        <meta property="og:image" content="/assets/genbi/logo-genbi-polos.png" />
        <meta property="og:url" content="https://www.genbi-uniska.com/agenda" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/assets/genbi/logo-genbi.png" type="image/png" />
      </Head>
      <main className="w-full bg-[#edf0f7] min-h-screen pt-20 text-gray-700">
        <Navbar />

        <h2 className="ml:text-3xl md:text-2xl sm:text-lg text-sm  font-semibold text-[#1C8383] text-center mt-4">
          Agenda
        </h2>
        <h2 className="ml:text-3xl md:text-2xl sm:text-lg text-sm  font-semibold text-[#1C8383] text-center">
          GENBI Universitas Islam Kadiri-Kediri
        </h2>
        <p className="text-center sm:font-semibold font-normal xxs:text-sm text-xs">
          Get the latest information about upcoming events and important dates!
        </p>

        <div className={`${styles.fullCalendarWrapper} ml:px-40 sm:px-24 xs:px-8 xxs:px-4 px-2 pt-8 ml:text-base sm:text-sm text-xs`}>
          <FullCalendar
            key={windowWidth}
            plugins={[
              resourceTimelinePlugin,
              dayGridPlugin,
              interactionPlugin,
              timeGridPlugin
            ]}
            initialView="dayGridMonth"
            dateClick={(info) => alert(`Tanggal yang diklik: ${info.dateStr}`)}
            events={events}
            eventClick={handleEventClick}
            headerToolbar={{
              left: 'prev,next today',
              center: windowWidth < 680 ? '' : 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            contentHeight="auto"
            aspectRatio={2}
          />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default AgendaPage;
