import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideDatabase, getDatabase } from '@angular/fire/database';

const firebaseConfig = {
  apiKey: "AIzaSyAZWK8t0aJP-3uC6W1cfQzPgAP2L0nXx1c",
  authDomain: "redsocial11-82d63.firebaseapp.com",
  projectId: "redsocial11-82d63",
  storageBucket: "redsocial11-82d63.appspot.com",
  messagingSenderId: "297820599567",
  appId: "1:297820599567:web:9588ddbeb932d6c8663a7a",
  measurementId: "G-LBQD0ZM3J6"
};

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideDatabase(() => getDatabase()),]
};
