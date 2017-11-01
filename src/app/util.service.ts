import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {

  constructor(
    private routerService: Router
  ) { }

  public navigateToUrl(urlReceived: string): void {
    this.routerService.navigate([urlReceived]);
  }
}
