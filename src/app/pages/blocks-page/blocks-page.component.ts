import {Component} from '@angular/core';
import {GithubSearchService} from '../../app-common/services/github-search.service';

@Component({
  selector: 'app-blocks-page',
  templateUrl: './blocks-page.component.html',
  styleUrls: ['./blocks-page.component.less']
})
export class BlocksPageComponent {

  constructor(private readonly searchService: GithubSearchService) {
  }

  public search(searchInput: string): void {
    this.searchService.getOrganisationRepos(searchInput).subscribe((items) => {
      console.log(items);
    })
  }

}
