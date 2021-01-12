/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import { NgModule, Injectable } from '@angular/core';
import { Routes, RouterModule, UrlSegment, UrlMatchResult,
  Resolve, ActivatedRouteSnapshot,
  DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';
import { PageComponent} from './components/page/page.component';


export function AemPageMatcher ( url: UrlSegment[] ): UrlMatchResult {
  const path = url.join('/');

  if (path.startsWith('content/aem-angular-core-spacomponents-example') || path.startsWith('conf/aem-angular-core-spacomponents-example') || path.startsWith('content/experience-fragments/angular-spa-examples')) {
    return ({
      consumed: url,
      posParams: { path: url[url.length - 1]}
    });
  }
}

@Injectable()
export class AemPageDataResolver implements Resolve<string> {
  constructor() {}

  resolve(route: ActivatedRouteSnapshot) {
    // Returns the absolute resource path with no extension, ex: /content/wknd-events/angular/home/event-1
    return '/' + route.url.join('/').replace(/\.[^/.]+$/, '');
  }
}

export class AemPageRouteReuseStrategy implements RouteReuseStrategy {
  shouldDetach(route: ActivatedRouteSnapshot): boolean { return false; }
  store(route: ActivatedRouteSnapshot, detachedTree: DetachedRouteHandle): void {}
  shouldAttach(route: ActivatedRouteSnapshot): boolean { return false; }
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle|null { return null; }
  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean { return false; }
}

const routes: Routes = [
  {
    matcher: AemPageMatcher,
    component: PageComponent,
    resolve: {
      path: AemPageDataResolver
    }
  },
  {
    path: '',
    redirectTo: 'content/aem-angular-core-spacomponents-example/library/accordion.html',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AemPageDataResolver, {
    provide: RouteReuseStrategy,
    useClass: AemPageRouteReuseStrategy
  }]
})
export class AppRoutingModule { }
