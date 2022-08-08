import { Component, OnInit } from '@angular/core';
import { Calendar } from '@fullcalendar/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import timeGridPlugin from '@fullcalendar/timegrid';

@Component({
  selector: 'app-conseillers',
  templateUrl: './conseillers.component.html',
  styleUrls: ['./conseillers.component.css']
})





export class ConseillersComponent implements OnInit {


  calendarOptions: CalendarOptions = {

    // Event Clic
    

    selectable:true,
    slotMinTime: "08:00:00",
    slotMaxTime: "15:00:00",
    weekends: true,
    allDaySlot : false,
    locale:'fr',
    hiddenDays: [ 0, 6 ],
    buttonText:{today : "Aujourd'hui"},
    plugins: [timeGridPlugin],
    initialView: 'timeGridWeek',
  };
  

  value = 'Clear Me';

  ngOnInit(): void {
  }

}
