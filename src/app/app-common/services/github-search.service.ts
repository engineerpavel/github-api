import {Injectable} from '@angular/core';
import {GithubSearchRepository} from '../repositories/github-search.repository';
import {Observable} from 'rxjs';
import {GithubRepoInterface} from '../interfaces/github-repo.interface';

@Injectable()
export class GithubSearchService {
  constructor(private readonly repo: GithubSearchRepository) {
  }

  public getOrganisationRepos(orgName: string): Observable<GithubRepoInterface[]> {
    return this.repo.getOrganisationRepos(orgName);
  }
}
