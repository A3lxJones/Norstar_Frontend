import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FixturesComponent } from './features/fixtures/fixtures.component';

const routes: Routes = [
    { path: '', redirectTo: 'fixtures', pathMatch: 'full' },
    { path: 'fixtures', component: FixturesComponent },
    { path: '**', redirectTo: 'fixtures' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }