import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackcolor]',
  standalone: true
})
export class BackcolorDirective {

  @Input('appBackcolor')
  color:string;
  defaultcolor='white';
  constructor(private ele:ElementRef, private render:Renderer2) { 


    render.addClass(ele.nativeElement,'abc');
    render.setStyle(ele.nativeElement,'background-color',this.defaultcolor);
    render.setStyle(ele.nativeElement,'padding','10px ');
     render.setStyle(ele.nativeElement,'margin','10px ');
    render.setStyle(ele.nativeElement,'opacity','0.7');
  }
  
  @HostListener('mouseenter') onMouseEnter() {
     this.render.setStyle(this.ele.nativeElement,'background-color',this.color);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.render.setStyle(this.ele.nativeElement,'background-color',this.defaultcolor);
  }
}
