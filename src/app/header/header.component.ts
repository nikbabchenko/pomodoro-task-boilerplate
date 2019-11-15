import { Component, OnInit, Renderer2 } from '@angular/core';
import {Theme} from '../models/theme.enum';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentTheme = Theme.Dark;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  changeTheme(theme: Theme) {
    // toggle `light` class of `html` to change the theme
  }

  onModelChange(theme: Theme) {

  }

}
