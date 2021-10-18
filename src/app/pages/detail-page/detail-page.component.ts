import {ChangeDetectionStrategy, Component} from '@angular/core';
import {Observable} from 'rxjs';
import {OwnerInterface} from '../../app-common/interfaces/github-repo.interface';
import {GithubSearchService} from '../../app-common/services/github-search.service';
import {map, switchMap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailPageComponent {

  public owner?: Observable<OwnerInterface | undefined> = new Observable<OwnerInterface | undefined>();

  constructor(private readonly searchService: GithubSearchService,
              private activateRoute: ActivatedRoute) {
    this.owner = activateRoute.params.pipe(
      switchMap((params) => this.searchService.getRepos().pipe(
        map((repos) => {
          return repos ? repos.filter((repo) => repo.id === params['id'])[0].owner : undefined;
        })
      )));
  }
}
