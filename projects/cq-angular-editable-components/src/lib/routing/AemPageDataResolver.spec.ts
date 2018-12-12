import { ActivatedRouteSnapshot } from '@angular/router';
import { AemPageDataResolver } from './AemPageDataResolver';

describe('AemPageDataResolver', () => {
  it('should return absolute resource path without extension (/conteent/abc)', () => {
    const route = ({ url: [ 'content', 'abc' ] } as any) as ActivatedRouteSnapshot;
    var aemPageDataResolver = new AemPageDataResolver();

    expect(aemPageDataResolver.resolve(route)).toBe("/content/abc");
  });

  it('should return absolute resource path without extension (/content/abc/def/ghi)', () => {
    const route = ({ url: [ 'content', 'abc', 'def', 'ghi.html' ] } as any) as ActivatedRouteSnapshot;
    var aemPageDataResolver = new AemPageDataResolver();

    expect(aemPageDataResolver.resolve(route)).toBe("/content/abc/def/ghi");
  });
});
