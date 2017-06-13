import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'party-stats',
    template: `
      <strong>Invited:</strong> {{invited}}
      <strong>Attending:</strong> {{attending}}
      <strong>Guests:</strong> {{guests}}
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PartyStatsComponent {
    @Input() invited;
    @Input() attending;
    @Input() guests;
}
