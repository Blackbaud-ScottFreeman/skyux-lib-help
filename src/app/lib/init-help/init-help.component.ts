import { Component } from '@angular/core';
import { HelpInitializationService } from '../../public';

import { HelpWindowRef } from '../window-ref';

@Component({
  selector: 'init-help',
  template: ''
})
export class HelpInitComponent {
  constructor(
    private windowRef: HelpWindowRef,
    private initService: HelpInitializationService) {
      console.log('help');
    // if (!this.windowRef.nativeWindow.BBHELP) {
      this.initService.load({
        extends: 'bbhelp'
      });
    // }
  }
}
