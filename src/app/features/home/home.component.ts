import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    standalone: false,
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    // Placeholder data structure for upcoming fixtures
    // Will be populated from the fixtures service
    upcomingFixtures: any[] = [];
}
