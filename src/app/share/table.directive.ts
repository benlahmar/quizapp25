import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTable]',
  standalone: true
})
export class TableDirective {

  constructor(private el:ElementRef, private render:Renderer2) {

    let tab=this.render.createElement('table');
    tab.setAttribute('border','1');
    tab.setAttribute('bgcolor','red');
    tab.setAttribute('width','100%');
    for(let i=0;i<3;i++)
    {
      let tr=render.createElement('tr');
      for(let j=0;j<3;j++)
      {
        let td=render.createElement('td');
        let text=this.render.createText('row '+i+' col '+j);
        this.render.appendChild(td,text);
        this.render.appendChild(tr,td);
      }
      this.render.appendChild(tab,tr);
    }

    render.appendChild(el.nativeElement,tab);
   }

}
