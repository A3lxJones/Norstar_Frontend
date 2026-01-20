// src/app/core/services/fixtures.service.ts

import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from './api.service';
import { Fixture, CreateFixtureDto, UpdateFixtureDto } from '../models/fixture.model';

@Injectable({
    providedIn: 'root'
})
export class FixturesService {
    private fixturesSubject = new BehaviorSubject<Fixture[]>([]);
    public fixtures$ = this.fixturesSubject.asObservable();

    constructor(private apiService: ApiService) { }

    /**
     * Get all fixtures
     */
    getFixtures(): Observable<Fixture[]> {
        return this.apiService.get<Fixture[]>('/fixtures').pipe(
            tap(fixtures => this.fixturesSubject.next(fixtures))
        );
    }

    /**
     * Get a single fixture by ID
     */
    getFixtureById(id: number): Observable<Fixture> {
        return this.apiService.get<Fixture>(`/fixtures/${id}`);
    }

    /**
     * Create a new fixture
     */
    createFixture(fixture: CreateFixtureDto): Observable<Fixture> {
        return this.apiService.post<Fixture>('/fixtures', fixture).pipe(
            tap(newFixture => {
                const currentFixtures = this.fixturesSubject.value;
                this.fixturesSubject.next([...currentFixtures, newFixture]);
            })
        );
    }

    /**
     * Update an existing fixture
     */
    updateFixture(id: number, fixture: UpdateFixtureDto): Observable<Fixture> {
        return this.apiService.put<Fixture>(`/fixtures/${id}`, fixture).pipe(
            tap(updatedFixture => {
                const currentFixtures = this.fixturesSubject.value;
                const index = currentFixtures.findIndex(f => f.id === id);
                if (index !== -1) {
                    currentFixtures[index] = updatedFixture;
                    this.fixturesSubject.next([...currentFixtures]);
                }
            })
        );
    }

    /**
     * Delete a fixture
     */
    deleteFixture(id: number): Observable<void> {
        return this.apiService.delete<void>(`/fixtures/${id}`).pipe(
            tap(() => {
                const currentFixtures = this.fixturesSubject.value;
                this.fixturesSubject.next(currentFixtures.filter(f => f.id !== id));
            })
        );
    }
}