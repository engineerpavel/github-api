import {Injectable} from '@angular/core';
import {GithubSearchRepository} from '../repositories/github-search.repository';
import {Observable, ReplaySubject} from 'rxjs';
import {GithubRepoInterface} from '../interfaces/github-repo.interface';

@Injectable()
export class GithubSearchService {
  constructor(private readonly repo: GithubSearchRepository) {
  }

  /**
   * Get info about repositories by organisation name
   * @param orgName organisation name
   */
  public getOrganisationRepos(orgName: string): Observable<GithubRepoInterface[]> {
    return this.repo.getOrganisationRepos(orgName);
  }
}
