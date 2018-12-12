import { ActivatedRouteSnapshot, DetachedRouteHandle } from '@angular/router';
import { AemPageRouteReuseStrategy } from './AemPageRouteReuseStrategy';


describe('AemPageRouteReuseStrategy', () => {
  let aemPageRouteReuseStrategy: AemPageRouteReuseStrategy;
  let route: ActivatedRouteSnapshot;

  beforeEach(() => {
    aemPageRouteReuseStrategy = new AemPageRouteReuseStrategy();
    route = ({} as any) as ActivatedRouteSnapshot;
  });

  it('should return false when calling shouldDetach(route)', () => {
    expect(aemPageRouteReuseStrategy.shouldDetach(route)).toBe(false);
  });

  it('should return false when calling shouldDetach(route)', () => {
    expect(aemPageRouteReuseStrategy.store({} as ActivatedRouteSnapshot, {} as DetachedRouteHandle)).toBeUndefined();
  });

  it('should return false when calling shouldAttach(route)', () => {
    expect(aemPageRouteReuseStrategy.shouldAttach(route)).toBe(false);
  });

  it('should return null when calling retrieve(route)', () => {
    expect(aemPageRouteReuseStrategy.retrieve(route)).toBeNull();
  });

  it('should return false when calling shouldReuseRoute(route)', () => {
    expect(aemPageRouteReuseStrategy.shouldReuseRoute(route, route)).toBe(false);
  });
});
