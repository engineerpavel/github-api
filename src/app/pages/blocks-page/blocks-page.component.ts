import {Component} from '@angular/core';
import {GithubSearchService} from '../../app-common/services/github-search.service';
import {Observable} from 'rxjs';
import {GithubRepoInterface} from '../../app-common/interfaces/github-repo.interface';

@Component({
  selector: 'app-blocks-page',
  templateUrl: './blocks-page.component.html',
  styleUrls: ['./blocks-page.component.less']
})
export class BlocksPageComponent {

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
