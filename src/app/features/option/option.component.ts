import { Component, Input } from '@angular/core';
import { Option } from '../../core/option';

@Component({
  selector: 'app-option',
  standalone: true,
  imports: [],
  templateUrl: './option.component.html',
  styleUrl: './option.component.css'
})
export class OptionComponent {

  @Input()
  opt:Option  ;
}
