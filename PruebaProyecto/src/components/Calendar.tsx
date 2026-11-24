import FullCalendar from '@fullcalendar/react'
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import type { DateSelectArg } from '@fullcalendar/core'

type Props = {
  onDateSelect: (fecha: string, hora: string) => void;
}

function Calendar({ onDateSelect }: Props) {
  
  // Usamos el tipo DateSelectArg en lugar de "any"
  const handleSelect = (info: DateSelectArg) => {
    const fecha = info.startStr.split('T')[0];
    
    // Extraemos la hora exacta
    const dateObj = new Date(info.startStr);
    const hora = String(dateObj.getHours()).padStart(2, '0') + ':' + String(dateObj.getMinutes()).padStart(2, '0');
    
    onDateSelect(fecha, hora);
  }

  return (
    <div className="calendar-section" style={{ padding: '20px', background: 'white', borderRadius: '8px' }}>
      <FullCalendar
        plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        slotMinTime="09:00:00"
        slotMaxTime="20:00:00"
        slotDuration="01:00:00"
        locale="es"
        selectable={true}
        select={handleSelect}
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
      />
    </div>
  )
}

export default Calendar