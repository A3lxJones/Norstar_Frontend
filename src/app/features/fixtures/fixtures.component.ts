import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { FixturesService } from '../../core/services/fixtures.service';
import { Fixture } from '../../core/models/fixture.model';

@Component({
  selector: 'app-fixtures',
  standalone: false,
  templateUrl: './fixtures.component.html',
  styleUrls: []
})
export class FixturesComponent implements OnInit, OnDestroy {
  fixtures: Fixture[] = [];
  fixtureForm: FormGroup;
  loading = true;
  error: string | null = null;
  isSubmitting = false;

  private destroy$ = new Subject<void>();

  constructor(
    private fixturesService: FixturesService,
    private fb: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {
    this.fixtureForm = this.fb.group({
      opponent: ['', Validators.required],
      date: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadFixtures();
  }

  loadFixtures(): void {
    console.log('Loading fixtures...');
    this.fixturesService.getFixtures()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (fixtures: Fixture[]) => {
          console.log('Fixtures received:', fixtures);
          this.fixtures = fixtures;
          this.loading = false;
          this.cdr.detectChanges(); // Force change detection
        },
        error: (err: Error) => {
          console.error('Error loading fixtures:', err);
          this.error = 'Failed to load fixtures, ensure the backend is running.';
          this.loading = false;
          this.cdr.detectChanges(); // Force change detection
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmit(): void {
    if (this.fixtureForm.invalid) {
      Object.keys(this.fixtureForm.controls).forEach(key => {
        this.fixtureForm.controls[key].markAsTouched();
      });
      return;
    }

    this.isSubmitting = true;
    this.error = null;

    this.fixturesService.createFixture(this.fixtureForm.value)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.fixtureForm.reset();
          this.isSubmitting = false;
          alert('Fixture created successfully!');
        },
        error: (err) => {
          this.error = 'Failed to create fixture. Please try again.';
          this.isSubmitting = false;
          console.error('Error creating fixture:', err);
        }
      });
  }

  deleteFixture(id: number): void {
    if (!confirm('Are you sure you want to delete this fixture?')) {
      return;
    }

    this.fixturesService.deleteFixture(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          alert('Fixture deleted successfully!');
        },
        error: (err) => {
          this.error = 'Failed to delete fixture. Please try again.';
          console.error('Error deleting fixture:', err);
        }
      });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  // Helper methods for form validation
  get opponent() {
    return this.fixtureForm.get('opponent');
  }

  get date() {
    return this.fixtureForm.get('date');
  }

  get location() {
    return this.fixtureForm.get('location');
  }
}