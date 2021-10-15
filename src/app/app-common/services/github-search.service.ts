import {Injectable} from '@angular/core';
import {GithubSearchRepository} from '../repositories/github-search.repository';
import {Observable, ReplaySubject} from 'rxjs';
import {GithubRepoInterface} from '../interfaces/github-repo.interface';
import {shareReplay} from 'rxjs/operators';

@Injectable()
export class GithubSearchService {

  get repos() {
    return this._repos;
  }

  /**
   * Storage for current search result
   * @private
   */
  private _repos: ReplaySubject<Observable<GithubRepoInterface[]>> = new ReplaySubject<Observable<GithubRepoInterface[]>>(1);

  constructor(private readonly repo: GithubSearchRepository) {
  }

  /**
   * Get info about repositories by organisation name
   * @param orgName organisation name
   */
  public getOrganisationRepos(orgName: string): void {
    this._repos.next(this.repo.getOrganisationRepos(orgName).pipe(shareReplay(1)));
  }
}
