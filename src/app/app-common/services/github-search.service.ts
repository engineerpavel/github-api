import {Injectable} from '@angular/core';
import {GithubSearchRepository} from '../repositories/github-search.repository';
import {Observable, ReplaySubject} from 'rxjs';
import {GithubRepoInterface} from '../interfaces/github-repo.interface';
import {shareReplay, switchMap} from 'rxjs/operators';

@Injectable()
export class GithubSearchService {

  /**
   * Storage for current search result
   * @private
   */
  private _repos = new ReplaySubject<Observable<GithubRepoInterface[]>>(1);

  constructor(private readonly repo: GithubSearchRepository) {
  }

  /**
   * Set info about repositories by organisation name into storage
   * @param orgName organisation name
   */
  public setOrganisationRepos(orgName: string): void {
    this._repos.next(this.repo.getOrganisationRepos(orgName));
  }

  /**
   * Get current repos from storage
   */
  public getRepos(): Observable<GithubRepoInterface[]> {
    return this._repos.pipe(
      switchMap((repos) => repos),
      shareReplay(1)
    );
  }


}
