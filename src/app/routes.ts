import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtworkComponent } from './artwork/artwork.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        resolve: {},
        data: {
            name: 'Home'
        }
    },
    {
        path: 'about',
        component: AboutComponent,
        resolve: {},
        data: {
            name: 'About'
        }
    },
    {
        path: 'artist',
        component: ArtistComponent,
        resolve: {},
        data: {
            name: 'Artist'
        }
    },
    {
        path: 'artwork',
        component: ArtworkComponent,
        resolve: {},
        data: {
            name: 'Artwork'
        }
    }
];

export const routerModule = RouterModule.forRoot(routes);
