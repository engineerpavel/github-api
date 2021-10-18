import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from 'rxjs';
import {GithubRepoInterface} from '../../app-common/interfaces/github-repo.interface';
import {GithubSearchService} from '../../app-common/services/github-search.service';

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TablePageComponent {

  public readonly repos: Observable<GithubRepoInterface[]> = new Observable<GithubRepoInterface[]>();

  constructor(private readonly searchService: GithubSearchService) {
    this.repos = this.searchService.getRepos();
  }

  /**
   * handle click on "Search" button
   * @param searchInput text from search input
   */
  public search(searchInput: string): void {
    this.searchService.setOrganisationRepos(searchInput);
  }

}
