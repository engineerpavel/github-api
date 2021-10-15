import {Component, OnDestroy} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {OwnerInterface} from '../../app-common/interfaces/github-repo.interface';
import {GithubSearchService} from '../../app-common/services/github-search.service';
import {map, mergeMap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.less']
})
export class DetailPageComponent implements OnDestroy {

  public owner: Observable<OwnerInterface> = new Observable<OwnerInterface>();

  private repoId: number | undefined;
  private subscription: Subscription = new Subscription();

  constructor(private readonly searchService: GithubSearchService,
              private activateRoute: ActivatedRoute) {
    this.subscription.add(activateRoute.params.subscribe((params) => this.repoId = params['id']));
    this.owner = this.searchService.repos.asObservable().pipe(
      mergeMap((repos) => repos.pipe(
        map((repos) => {
          repos.filter((repo) => repo.id === this.repoId);
          return repos[0].owner;
        })
      ))
    );
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
