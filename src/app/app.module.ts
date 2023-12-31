import { environment } from '../environments/environment';

// Services
import { OpenAiService } from './services/open-ai.service';

/* FireBase */
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

// Material Design
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Angular
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxEditorModule } from 'ngx-editor';
import { DatePipe } from '@angular/common';

// Components
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogUserInfoComponent } from './header/dialog-user-info/dialog-user-info.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { AuthService } from './services/auth.service';
import { ChannelsComponent } from './side-menu/channels/channels.component';
import { DialogNewChannelComponent } from './side-menu/channels/dialog-new-channel/dialog-new-channel.component';
import { DirectMessagesComponent } from './side-menu/direct-messages/direct-messages.component';
import { FurtherServicesComponent } from './side-menu/further-services/further-services.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ThreadsComponent } from './threads/threads.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { ChatgptComponent } from './slack-apps/chatgpt/chatgpt.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChannelOnDisplayComponent } from './channel-on-display/channel-on-display.component';
import { DialogErrorLoginComponent } from './dialog-error-login/dialog-error-login.component';
import { PrivateChatComponent } from './private-chat/private-chat.component';
import { CustomMenuComponent } from './custom-menu/custom-menu.component';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './slack-apps/weather/weather.component';
import { NewsComponent } from './slack-apps/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeScreenComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    SideMenuComponent,
    ThreadsComponent,
    SendMessageComponent,
    ChannelsComponent,
    DirectMessagesComponent,
    DialogNewChannelComponent,
    FurtherServicesComponent,
    ChatgptComponent,
    DialogUserInfoComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ChannelOnDisplayComponent,
    DialogErrorLoginComponent,
    PrivateChatComponent,
    CustomMenuComponent,
    HomeComponent,
    WeatherComponent,
    NewsComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatDividerModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatExpansionModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    AngularFireModule.initializeApp(environment.firebase),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    provideStorage(() => getStorage()),
    HttpClientModule,
    NgxEditorModule,
    MatProgressSpinnerModule
  ],
  providers: [AuthService, OpenAiService, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
