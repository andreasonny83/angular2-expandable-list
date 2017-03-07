import { Component } from '@angular/core';

@Component({
  selector: 'app',
  styles: [`
    :host {
      background: rgb(184, 218, 215);
      display: block;
      height: 100%;
      padding-top: 50px;
      box-sizing: border-box;
    }
    .expandable-list {
      max-width: 600px;
      margin: 0 auto;
    }
  `],
  template: `
    <expandable-list class="expandable-list">
      <expandable-list-item *ngFor="let item of items">
        <span title>{{ item.title }}</span>
        <a item *ngFor="let i of item.items"
           [href]="i.link">
          {{ i.title }}
        </a>
      </expandable-list-item>

      <expandable-list-item disabled>
        <span title>Manual</span>
        <span secondary>disabled</span>
      </expandable-list-item>

      <expandable-list-item>
        <span title>Manual</span>
        <span secondary>first</span>
        <a href="http://www.goo.gl">Something else</a>
        <a item href="http://www.goo.gl">Google</a>
        <a item href="http://www.goo.gl">Google</a>
        <a item href="http://www.goo.gl">Google</a>

        <expandable-list-divider item></expandable-list-divider>

        <a item href="http://www.goo.gl">Google</a>
      </expandable-list-item>

      <expandable-list-item>
        <span title>Manual</span>
        <span secondary>second</span>
        <a href="http://www.goo.gl">Something else</a>
        <a item href="http://www.goo.gl">Google</a>
        <a item href="http://www.goo.gl">Google</a>
        <a item href="http://www.goo.gl">Google</a>

        <expandable-list-divider item></expandable-list-divider>

        <a item href="http://www.goo.gl">Google</a>
      </expandable-list-item>
    </expandable-list>
  `
})
export class AppComponent {
  items: any;

  constructor() {
    this.items = [
      {
        title: 'Spices',
        items: [
          {
            title: 'salt',
            link: 'https://en.wikipedia.org/wiki/Salt'
          },
          {
            title: 'Black pepper',
            link: 'https://en.wikipedia.org/wiki/Black_pepper'
          },
        ]
      },
      {
        title: 'Cats',
        items: [
          {
            title: 'Siberian',
            link: 'https://en.wikipedia.org/wiki/Siberian_cat'
          },
          {
            title: 'Maine Coon',
            link: 'https://en.wikipedia.org/wiki/Maine_Coon'
          },
          {
            title: 'American Bobtail',
            link: 'https://en.wikipedia.org/wiki/American_Bobtail'
          },
          {
            title: 'British Longhair',
            link: 'https://en.wikipedia.org/wiki/British_Longhair'
          },
        ]
      },
    ];
  }
}
