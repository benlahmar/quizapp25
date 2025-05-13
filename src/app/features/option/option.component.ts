import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Option } from '../../core/option';
import { FormsModule } from '@angular/forms';
import { BackcolorDirective } from '../../share/backcolor.directive';

@Component({
  selector: 'app-option',
  standalone: true,
  imports: [FormsModule,BackcolorDirective],
  templateUrl: './option.component.html',
  styleUrl: './option.component.css'
})
export class OptionComponent {

  @Input()
  opt:Option  ;

   @Input()
   mode:string

   @Output()
   notif:EventEmitter<any>=new EventEmitter();
  ff()
  {
    console.log(this.opt);
    this.notif.emit(this.opt.isSelected);
  }
}
