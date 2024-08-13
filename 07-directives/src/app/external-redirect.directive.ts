import { Directive, ElementRef, inject, Input, input } from '@angular/core';

@Directive({
  selector: 'a[appExternalRedirect]',
  standalone: true,
  host: {
    '(click)': 'ConfirmRedirect($event)',
  },
})
export class ExternalRedirectDirective {
  @Input({ alias: 'appExternalRedirect' }) queryParam = 'myapp';
  private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef);

  constructor() {
    console.log('externalRedirect active');
  }

  ConfirmRedirect(event: MouseEvent) {
    const wantsToLeave = window.confirm('Do you really want to leave the app?');

    if (wantsToLeave) {
      const address = this.hostElementRef.nativeElement.href;
      this.hostElementRef.nativeElement.href =
        address + '?from=' + this.queryParam;
      return;
    }

    event.preventDefault();
  }
}
