import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './Admin/home/home.component';
import { BirthHomeComponent } from './Admin/birth-home/birth-home.component';
import { BirthRegistrationComponent } from './Admin/birth-registration/birth-registration.component';
import { HomeAddresseeComponent } from './Admin/home-addressee/home-addressee.component';
import { AddAddresseeComponent } from './Admin/add-addressee/add-addressee.component';
import { HomeDeathComponent } from './Admin/home-death/home-death.component';
import { RecordDeathComponent } from './Admin/record-death/record-death.component';
import { DesastersHomeComponent } from './Admin/desasters-home/desasters-home.component';
import { DesasterComponent } from './Admin/desaster/desaster.component';
// import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserhomeComponent } from './User/userhome/userhome.component';
import { EditHomeComponent } from './home/edit-home/edit-home.component';
import { LetterTemplateComponent } from './Admin/letter-template/letter-template.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LandRecordsComponent } from './Admin/land-records/land-records.component';
import { HomeLandComponent } from './Admin/home-land/home-land.component';
import { GenerateLetterComponent } from './Admin/generate-letter/generate-letter.component';
import { AdminPageComponent } from './Admin/admin-page/admin-page.component';
// import { RegisterShehaComponent } from './components/register-sheha/register-sheha.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { EditBirthComponent } from './Admin/birth-home/edit-birth/edit-birth.component';
import { EditDeathComponent } from './Admin/home-death/edit-death/edit-death.component';
import { EditDesasterComponent } from './Admin/desasters-home/edit-desaster/edit-desaster.component';
import { EditLandComponent } from './Admin/home-land/edit-land/edit-land.component';
import { HomeConflictComponent } from './Admin/home-conflict/home-conflict.component';
import { RecordConflictComponent } from './Admin/home-conflict/record-conflict/record-conflict.component';
import { EditConflictComponent } from './Admin/home-conflict/edit-conflict/edit-conflict.component';
import { AddShehaComponent } from './components/add-sheha/add-sheha.component';
import { RecordOrdersComponent } from './Admin/GovernmentOrder/record-orders/record-orders.component';
import { CitizenfeedbackComponent } from './Admin/GovernmentOrder/citizenfeedback/citizenfeedback.component';
import { CitizenviewsComponent } from './Admin/GovernmentOrder/citizenviews/citizenviews.component';
import { LetterListComponent } from './Admin/generate-letter/letter-list/letter-list.component';
import { RegisterShehaComponent } from './components/register-sheha/register-sheha.component';
import { AddCitizenComponent } from './Admin/home/add-citizen/add-citizen.component';
// import { HomeConflictComponent } from './Admin/conflict-records/home-conflict/home-conflict.component';
// import { ConflictRecordsComponent } from './Admin/conflict-records/conflict-records.component';

const routes: Routes = [
  // Public routes
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Admin routes
  {
    path: '', component: MainLayoutComponent, canActivate: [AuthGuard], children: [
      { path: 'dashboard', component: WelcomeComponent, canActivate: [AuthGuard] },
      { path: '', component: AdminPageComponent, canActivate: [RoleGuard], data: { roles: ['admin','sheha'] } },
      { path: 'admin-dashboard', component: HomeComponent, canActivate: [RoleGuard], data: { roles: ['admin', 'sheha'] } },
      { path: 'birthhome', component: BirthHomeComponent, canActivate: [RoleGuard], data: { roles: ['admin', 'sheha'] } },
      {path:'edit-bith/:id', component: EditBirthComponent},
      { path: 'birthreg', component: BirthRegistrationComponent, canActivate: [RoleGuard], data: { roles: ['admin','sheha'] } },
      { path: 'homeAddressee', component: HomeAddresseeComponent, canActivate: [RoleGuard], data: { roles: ['admin'] } },
      { path: 'addaddressee', component: AddAddresseeComponent, canActivate: [RoleGuard], data: { roles: ['admin'] } },
      { path: 'homedeath', component: HomeDeathComponent, canActivate: [RoleGuard], data: { roles: ['admin'] } },
      {path:'edit-death/:id', component: EditDeathComponent},
      { path: 'recorddeath', component: RecordDeathComponent, canActivate: [RoleGuard], data: { roles: ['admin'] } },
      { path: 'desastershome', component: DesastersHomeComponent, canActivate: [RoleGuard], data: { roles: ['admin'] } },
      {path:'edit-disaster/:id', component: EditDesasterComponent},
      { path: 'desasters', component: DesasterComponent, canActivate: [RoleGuard], data: { roles: ['admin', 'sheha'] } },
      { path: 'edit-home/:id', component: EditHomeComponent, canActivate: [RoleGuard], data: { roles: ['admin'] } },
      { path: 'addcitizen', component: AddCitizenComponent, canActivate: [RoleGuard], data: { roles: ['admin'] } },
      { path: 'LetterTemplate', component: LetterTemplateComponent, canActivate: [RoleGuard], data: { roles: ['admin'] } },
      { path: 'homeLand', component: HomeLandComponent, canActivate: [RoleGuard], data: { roles: ['admin'] } },
      {path:'edit_land/:id', component: EditLandComponent},
      {path:'landrecord', component: LandRecordsComponent},
    
      { path: 'generate', component: GenerateLetterComponent, canActivate: [RoleGuard], data: { roles: ['citizen','sheha'] } },
      { path: 'letterlist', component: LetterListComponent},
      { path: 'registersheha', component: RegisterShehaComponent, canActivate: [RoleGuard], data: { roles: ['admin'] } },
      { path: 'add-sheha', component: AddShehaComponent},
      { path: 'homeconflicts', component: HomeConflictComponent},
      { path: 'recordconflicts', component: RecordConflictComponent},
      { path: 'edit-conflict/:id', component: EditConflictComponent},
      { path: 'recordorder', component: RecordOrdersComponent},
      { path: 'citizenfeedback', component: CitizenfeedbackComponent},
      { path: 'citizenviews', component: CitizenviewsComponent},
      // { path: 'homeconflict', component: HomeConflictComponent},
      // { path: 'conflictrecord', component: ConflictRecordsComponent}
    ]
  },

  // Fallback route
  { path: '**', redirectTo: '/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
