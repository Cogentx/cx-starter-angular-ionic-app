import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Renderer2
} from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  @ViewChild(IonContent, { read: ElementRef, static: true })
  contentArea: ElementRef;
  @ViewChild('triggerElement', { read: ElementRef, static: true })
  triggerElement: ElementRef;

  private observer: IntersectionObserver;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // console.log(this.triggerElement);

    this.observer = new IntersectionObserver(entries => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          // console.log('add');
          this.renderer.addClass(
            this.contentArea.nativeElement,
            'no-transform'
            );
          } else {
            // console.log('remove');
            this.renderer.removeClass(
            this.contentArea.nativeElement,
            'no-transform'
          );
        }
      });
    });

    this.observer.observe(this.triggerElement.nativeElement);
  }

  handleScroll(env) {
    console.log(env);
  }
}
