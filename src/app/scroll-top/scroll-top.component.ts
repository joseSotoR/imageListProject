import { Component } from '@angular/core';


@Component({
  selector: 'app-scroll-top',
  templateUrl: './scroll-top.component.html',
  styleUrls: ['./scroll-top.component.css']
})
export class ScrollTopComponent{

  public windowScrolled: boolean;


  public checkScroll(): void {
    if (window.pageYOffset > 500) {
      this.windowScrolled = true;
    } else {
      this.windowScrolled = false;
    }
  }

  public scrollToTop(): void {
    (function smoothscroll(): void {

      const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 8));
      }

    })();
  }

}
