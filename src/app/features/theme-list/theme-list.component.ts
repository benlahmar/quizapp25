import { Component } from '@angular/core';
import { themes } from '../../share/themes';
import { ThemeComponent } from "../theme/theme.component";
import { PaginationComponent } from "../../share/pagination/pagination.component";

@Component({
  selector: 'app-theme-list',
  standalone: true,
  imports: [ThemeComponent, PaginationComponent],
  templateUrl: './theme-list.component.html',
  styleUrl: './theme-list.component.css'
})
export class ThemeListComponent {
  datatheme=themes;
  p:number=0;
xx:number=0;
  recuperer(x:number)
  {
    if(this.xx<x)
    {this.p=this.p+3;}
  else
  this.p=this.p-3;
    this.xx=x;
     console.log(this.p);
  }

}
