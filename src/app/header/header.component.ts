import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  activeLinks;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  ngOnInit() {
    this.addActivClass();
    this.menuMobIcon();
    this.closeMobMenu();
  }

  addActivClass() {
    this.activeLinks = this.elementRef.nativeElement.querySelectorAll('.menu_link');
    for (let activeLink of this.activeLinks) {
      this.renderer2.listen(activeLink, 'click', () => {
        for (let activeLink of this.activeLinks) {
          this.renderer2.removeClass(activeLink, 'menu_link__active');
        }
        this.renderer2.addClass(activeLink, 'menu_link__active');
      });
    }
  }

  menuMobIcon() {
    let menuIcon = this.elementRef.nativeElement.querySelector('.menu-icon-mob img');
    let popupMenu = this.elementRef.nativeElement.querySelector('.popup-menu');
    let navbar = this.elementRef.nativeElement.querySelector('.navbar');
    this.renderer2.listen(menuIcon, 'click', () => {
      let height = window.innerHeight;
      navbar.style.display = 'none';
      popupMenu.style.display = 'block';
      popupMenu.style.height = height + 'px';
    });
  }

  closeMobMenu() {
    let closeMenuIcon = this.elementRef.nativeElement.querySelector('.close-icon-mob img');
    let popupMenu = this.elementRef.nativeElement.querySelector('.popup-menu');
    let navbar = this.elementRef.nativeElement.querySelector('.navbar');
    this.renderer2.listen(closeMenuIcon, 'click', () => {
      navbar.style.display = 'flex';
      popupMenu.style.display = 'none';
    });
  }



}
