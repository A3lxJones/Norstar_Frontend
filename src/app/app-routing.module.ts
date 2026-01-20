import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { FixturesComponent } from './features/fixtures/fixtures.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'fixtures', component: FixturesComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }