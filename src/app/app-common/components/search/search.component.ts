import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {

  @Output()
  public searchInput = new EventEmitter<string>();
  public formGroup = new FormGroup({
    searchInput: new FormControl('')
  });

  public onSubmit(): void {
    this.searchInput.emit(this.formGroup.controls["searchInput"].value);
  }

}
