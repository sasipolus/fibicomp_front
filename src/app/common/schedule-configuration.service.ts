import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

export class ScheduleConfigurationService {

    private scheduleData = new BehaviorSubject<any>( {} );
    currentScheduleData = this.scheduleData.asObservable();

    constructor() {

    }

    changeScheduleData( scheduleData: any ) {
        this.scheduleData.next( scheduleData );
    }
}
