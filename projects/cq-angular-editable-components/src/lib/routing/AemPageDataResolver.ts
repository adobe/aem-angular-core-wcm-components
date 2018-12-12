import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AemPageDataResolver implements Resolve < string > {
  constructor() {}

  /**
   * Returns the absolute resource path without extension.
   * @example
   * // returns: '/content/aa/bb' for route.url [ 'content', 'aa', 'bb.html' ]
   * resolve(route)
   * @param route - route
   * @returns absolute resource path without extension
   */
  resolve(route: ActivatedRouteSnapshot) {
    return '/' + route.url.join('/').replace(/\.[^/.]+$/, '');
  }
}
