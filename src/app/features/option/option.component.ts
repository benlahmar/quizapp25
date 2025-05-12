import { Component, Input } from '@angular/core';
import { Option } from '../../core/option';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-option',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './option.component.html',
  styleUrl: './option.component.css'
})
export class OptionComponent {

  @Input()
  opt:Option  ;

   @Input()
   mode:string
  ff()
  {
    console.log(this.opt);
  }
}
