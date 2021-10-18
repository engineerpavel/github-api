import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {GithubRepoInterface} from '../interfaces/github-repo.interface';
import {catchError} from 'rxjs/operators';

@Injectable()
export class GithubSearchRepository {
  constructor(protected readonly http: HttpClient) {
  }

  /**
   * Get info about repositories by organisation name
   * @param orgName organisation name
   */
  public getOrganisationRepos(orgName: string): Observable<GithubRepoInterface[] | undefined> {
    return this.http.get<GithubRepoInterface[]>(`${environment.API}/orgs/${orgName}/repos`).pipe(
      catchError((err) => {
        console.log(err);
        return of(undefined);
      })
    );
  }
}
