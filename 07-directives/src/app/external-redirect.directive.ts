import {Directive} from "@angular/core";

@Directive({
  selector: 'a[appExternalRedirect]',
  standalone: true,
  host: {
    '(click)': 'ConfirmRedirect($event)'
  }
})
export class ExternalRedirectDirective {
  constructor() {
    console.log('externalRedirect active')
  }

  ConfirmRedirect(event : MouseEvent) {
    const wantsToLeave = window.confirm('Do you really want to leave the app?')

    if (wantsToLeave) {
      return
    }

    event.preventDefault();
  }
}
