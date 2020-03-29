import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  images = [
    {
      title: 'floor',
      // tslint:disable-next-line: max-line-length
      url: 'https://images.unsplash.com/photo-1585366958730-159aa4001b3c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'motorcycle',
      // tslint:disable-next-line: max-line-length
      url: 'https://images.unsplash.com/photo-1558981001-5864b3250a69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'cat',
      // tslint:disable-next-line: max-line-length
      url: 'https://images.unsplash.com/photo-1585373683920-671438c82bfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'tree',
      // tslint:disable-next-line: max-line-length
      url: 'https://images.unsplash.com/photo-1585374578788-5027647d993b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'sea',
      // tslint:disable-next-line: max-line-length
      url: 'https://images.unsplash.com/photo-1585377960434-d042b3eb5c92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'duck',
      // tslint:disable-next-line: max-line-length
      url: 'https://images.unsplash.com/photo-1585268533172-d80e2c72fc8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'cofee',
      // tslint:disable-next-line: max-line-length
      url: 'https://images.unsplash.com/photo-1585393198229-9ff32accbbd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'spidy',
      // tslint:disable-next-line: max-line-length
      url: 'https://images.unsplash.com/photo-1585394937910-13f8c42bd1e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },


  ];
  imageTitle = '';
  imageUrl = '';
  currentPage = 0;

  reloadImage(i: number) {
    this.currentPage = i;
    this.imageTitle = this.images[i].title;
    this.imageUrl = this.images[i].url;
  }
  preImage() {
    if (this.currentPage > 0) {
      this.currentPage -= 1;
    }
    this.reloadImage(this.currentPage);
  }
  nextImage() {
    if (this.currentPage < this.images.length - 1) {
      this.currentPage += 1;
      console.log(this.currentPage);
    }
    this.reloadImage(this.currentPage);
  }
  ngOnInit() {
    this.reloadImage(0);
  }
}
