/*
* Copyright (c) 2016 VMware, Inc. All Rights Reserved.
* This software is released under MIT license.
* The full license information can be found in LICENSE in the root directory of this project.
*/
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';


export const ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'volunteer', component: VolunteerComponent},
    {path: 'contactUs', component: ContactUsComponent}
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(ROUTES);
