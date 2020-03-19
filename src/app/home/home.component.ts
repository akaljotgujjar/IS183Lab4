import { Component, OnInit } from '@angular/core';

interface IArtwork {
  id?: number;
  image_url: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  artworks: Array<IArtwork> = [];

  constructor() { }

  ngOnInit() {
    this.artworks = [
      {
        image_url: 'assets/img/thumbs/120010.jpg',
        title: 'Portrait of Eleanor of Toledo',
        description: `The Protrait of Eleanor of Toldeo and Her Son is a painting by the Italisn artist Agnolo di Cosino,
        known as Bromzino, finshed ca. 1545. One of his most famous works, it is housed in the Uffizi Gallery of Florance,
        Italy and is considered one of the preeminent examples of Mannerist Portraiture.`
      },
      {
        image_url: 'assets/img/thumbs/116010.jpg',
        title: 'Portrait of the Artist',
        description: `The Protrait of the Artist Holding a Thistile is an oil painting on parchment
        pasted on canvas by German artist Albrecht Dürer painted in 1493. It is the earliest of Dürers
        painted self-protraits and has been idetnifed as one of the first self-portraits painted by a Northern artist.`
      },
      {
        image_url: 'assets/img/thumbs/106020.jpg',
        title: 'Girl with the Pearl Earring',
        description: `Girl with a Pearl Earring is one of Johannes Vermeer's masterworks and, as the name
        implies, uses a pearl earring for a focal point. Today the painting is kept in the Mauritshuis
        gallery in The Hague. It is sometimes referred to as "the Mona Lisa of the North" or "the Dutch Mona Lisa".`
      }
    ];
  }

}
