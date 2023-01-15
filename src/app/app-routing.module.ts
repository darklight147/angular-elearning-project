import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BashComponent } from './bash/bash.component';
import { DockerComponent } from './docker/docker.component';
import { PythonComponent } from './python/python.component';

const routes: Routes = [
  { path: 'docker', component: DockerComponent },
  { path: 'bash', component: BashComponent },
  { path: 'python', component: PythonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
