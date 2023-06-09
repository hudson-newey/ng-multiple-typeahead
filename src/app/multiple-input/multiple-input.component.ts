import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { NgbTypeaheadSelectItemEvent } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, debounceTime, distinctUntilChanged, map, Observable, OperatorFunction } from 'rxjs';
import { Site } from '../models/site';

export const emptyString = '';

@Component({
  selector: 'app-multiple-input',
  templateUrl: './multiple-input.component.html',
  styleUrls: ['./multiple-input.component.scss'],
})
export class MultipleInputComponent {
  public constructor() {}

  protected activeSites: Site[] = [];
  public inputModel: string = emptyString;

  @Input() public possibleSites: Site[] = [];
  @Output() public selectedSites: BehaviorSubject<Site[]> =
    new BehaviorSubject<Site[]>(this.activeSites);
  @ViewChild('typeaheadInputRef') public typeaheadInput!: ElementRef<HTMLInputElement>;

  public onSiteSelected($event: NgbTypeaheadSelectItemEvent<Site>): void {
    $event.preventDefault();
    const selectedItem = $event.item;
    this.activeSites.push(selectedItem);
    this.selectedSites.next(this.activeSites);

    this.typeaheadInput.nativeElement.value = '';
  }

  public keyDownEvent(): void {
    if (this.inputModel === emptyString) {
      this.activeSites.pop();
    }
  }

  public search: OperatorFunction<string, readonly Site[]> = (text$: Observable<string>) =>
		text$.pipe(
			debounceTime(100),
			distinctUntilChanged(),
			map((term: string) =>
        this.possibleSites.filter((v) => v.name.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10)
      ),
		);
}
