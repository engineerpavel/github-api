import {Component} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {OwnerInterface} from '../../app-common/interfaces/github-repo.interface';
import {GithubSearchService} from '../../app-common/services/github-search.service';
import {map, switchMap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.less']
})
export class DetailPageComponent {

  public owner?: Observable<OwnerInterface> = new Observable<OwnerInterface>();

  private subscription: Subscription = new Subscription();

  constructor(private readonly searchService: GithubSearchService,
              private activateRoute: ActivatedRoute) {
    this.owner = activateRoute.params.pipe(
      switchMap((params) => this.searchService.getRepos().pipe(
        map((repos) => {
          const ownerRepo = repos.filter((repo) => repo.id === params['id']);
          return ownerRepo[0]?.owner;
        })
      )));
  }
}
