import {Directive, Input, input} from "@angular/core";

@Directive({
  selector: 'a[appExternalRedirect]',
  standalone: true,
  host: {
    '(click)': 'ConfirmRedirect($event)'
  }
})
export class ExternalRedirectDirective {
  @Input({ alias: "appExternalRedirect"}) queryParam = 'myapp';

  constructor() {
    console.log('externalRedirect active')
  }

  ConfirmRedirect(event : MouseEvent) {
    const wantsToLeave = window.confirm('Do you really want to leave the app?')

    if (wantsToLeave) {
      const address = (event.target as HTMLAnchorElement).href;
      (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParam
      return
    }

    event.preventDefault();
  }
}
