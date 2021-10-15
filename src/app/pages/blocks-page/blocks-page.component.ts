import {Component} from '@angular/core';
import {GithubSearchService} from '../../app-common/services/github-search.service';
import {Observable} from 'rxjs';
import {GithubRepoInterface} from '../../app-common/interfaces/github-repo.interface';
import {shareReplay} from 'rxjs/operators';

@Component({
  selector: 'app-blocks-page',
  templateUrl: './blocks-page.component.html',
  styleUrls: ['./blocks-page.component.less']
})
export class BlocksPageComponent {

  public repos: Observable<GithubRepoInterface[]> = new Observable<GithubRepoInterface[]>();

  constructor(private readonly searchService: GithubSearchService) {
  }

  /**
   * handle click on "Search" button
   * @param searchInput text from search input
   */
  public search(searchInput: string): void {
    this.repos = this.searchService.getOrganisationRepos(searchInput).pipe(
      shareReplay(1)
    );
  }

}
