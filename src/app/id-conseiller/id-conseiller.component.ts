import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import timeGridPlugin from '@fullcalendar/timegrid';


@Component({
  selector: 'app-id-conseiller',
  templateUrl: './id-conseiller.component.html',
  styleUrls: ['./id-conseiller.component.css']
})
export class IdConseillerComponent implements OnInit {

  constructor() { }

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



  ngOnInit(): void {
  }

}
