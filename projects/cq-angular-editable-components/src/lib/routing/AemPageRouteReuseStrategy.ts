import { ActivatedRouteSnapshot, RouteReuseStrategy, DetachedRouteHandle } from '@angular/router';

/**
 * Implements RouteReuseStrategy to customize route reuse.
 */
export class AemPageRouteReuseStrategy implements RouteReuseStrategy {
  /** Determines if this route (and its subtree) should be detached to be reused later. */
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }

  /** Not storing deteached route. */
  store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void {}

  /** Determines if this route (and its subtree) should be reattached. */
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }

  /** Retrieves the previously stored route. */
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    return null;
  }

  /** Determines if a route should be reused */
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return false;
  }
}
