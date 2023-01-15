import { NgModule } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DockerComponent } from './docker/docker.component';
import { BashComponent } from './bash/bash.component';
import { PythonComponent } from './python/python.component';
import { MultichoicecomponentComponent } from './multichoicecomponent/multichoicecomponent.component';
import { VideoPlayerComponent } from './multichoicecomponent/video-player/video-player.component';
import { SafePipe } from './safe/safe.pipe';
import { TerminalComponent } from './multichoicecomponent/terminal/terminal.component';

@NgModule({
  declarations: [
    AppComponent,
    DockerComponent,
    BashComponent,
    PythonComponent,
    MultichoicecomponentComponent,
    VideoPlayerComponent,
    SafePipe,
    TerminalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
