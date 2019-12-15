(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<section class=\"section-about\">\n    <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"snow1\"></div>\n          <div class=\"snow2\"></div>\n            <div class=\"snow3\"></div>\n            <div class=\"col-md-8 col-sm-8\">\n                <div class=\"about-box\">\n                    <h2 class=\"box-title\">What is Show Tracker?</h2>\n                    <div class=\"tiny-border\"></div>\n                    <p>Show Tracker is a platform that does many things, but primarily keeps track of  <strong> TV shows and movies </strong> you watch.\n                      It integrates with your media center or home theater PC to enable scrobbling, so everything is automatic. Some people like to check in from their phone, so we enable that too.\n                        We also make it easy to find where to watch movies and TV shows on hundreds of streaming sources such as Netflix, Amazon, Hulu, and iTunes. Check out our complete feature list.\n                        Trakt is free to use and powers thousands of apps, most free to use! If you enjoy Trakt, please consider upgrading your account to VIP\n                        to help pay for servers and unlock some awesome VIP features like no ads, year in review, iCal feeds, advanced filtering, list cloning, and widgets.\n                         Stop reading and <strong> sign up now! </strong></p>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<h2><strong>Frequently asked questions</strong></h2>\n<section class=\"acc-flex\">\n<div class=\"accordion\" id=\"accordionExample\">\n    <div class=\"card navbar-dark\">\n      <div class=\"card-header\" id=\"headingOne\">\n        <h2 class=\"mb-0\">\n          <button class=\"btn btn-link box-title\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"false\" aria-controls=\"collapseOne\">\n            <strong>How do I watch a TV show or movie?</strong>\n          </button>\n        </h2>\n      </div>\n\n      <div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\n        <div class=\"card-body\">\n            We don’t stream any TV shows or movies to watch on Trakt. However, we make it easy to find where to watch TV & movies on hundreds of\n            streaming services like Netflix, Amazon, Hulu, and iTunes in 38 countries.\n            Just click a Watch Now button or icon, choose your favorite service, and start watching.\n            Most media centers will also have streaming plugins that will scrobble what you’re watching to Trakt.\n            However, these are configured in your media center, and not on Trakt. Please reach out to the plugin developers directly if you have any questions about them.\n        </div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-header\" id=\"headingTwo\">\n        <h2 class=\"mb-0\">\n          <button class=\"btn btn-link collapsed box-title\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n            <strong>How do I add a missing TV show?</strong>\n          </button>\n        </h2>\n      </div>\n      <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\n        <div class=\"card-body\">\n            We use a combination of TMDB and TVDB for TV show information. TMDB is used for the top level show info like title, year, genres, and country.\n             It is also used for high quality posters, fanart, and episode screenshots. TVDB is used for all season and episode info and as a fall back for info missing on TMDB.\n            <ol>\n              <li> Make sure the TV show exists on TMDB and TVDB with English information filled out.</li>\n              <li>On TMDB, make sure the correct TVDB ID is entered in the external IDs section.</li>\n              <li>On the Trakt website, click the Import TV Show link in the footer.</li>\n              <li>Type in the TVDB ID and click the Import button.</li>\n            </ol>\n        </div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-header\" id=\"headingThree\">\n        <h2 class=\"mb-0\">\n          <button class=\"btn btn-link collapsed box-title\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n            <strong>How do I add a missing movie?</strong>\n          </button>\n        </h2>\n      </div>\n      <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionExample\">\n        <div class=\"card-body\">\n            We use TMDB for all movie information. It's free for anyone to sign up and edit info at TMDB.\n            <ol>\n              <li>Make sure the movie exists on TMDB with English information filled out.</li>\n              <li>On the Trakt website, click the Import Movie link in the footer.</li>\n              <li>Type in the TMDB ID and click the Import button.</li>\n            </ol>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add/add.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add/add.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container add-bg\">\n  <p class=\"headingTitle\">Add TV Show</p>\n  <div class=\"panel panel-default\">\n    <div class=\"panel-body\">\n      <form [formGroup]=\"myForm\" novalidate method=\"post\" (ngSubmit)=\"addShow()\" name=\"addForm\">\n        <div class=\"form-group\">\n          <input class=\"form-control\" type=\"text\" name=\"showName\" [(ngModel)]=\"showName\" formControlName=\"showName\" placeholder=\"Enter TV show name\" required autofocus>\n            <div *ngIf=\"count\" class=\"count\"> You add {{count}} shows</div>\n            <div class=\"alert alert-danger\" *ngIf=\"myForm.controls['showName'].invalid && myForm.controls['showName'].touched\">\n                TV show name is required.\n            </div>\n          </div>\n        <button class=\"join add\" type=\"submit\" [disabled]=\"myForm.invalid\" >Add</button>\n      </form>\n    </div>\n  </div>\n  <div class=\"serial-bg\"></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n<header ng-controller=\"DropdownController as vm\">\n    <nav class=\"navbar navbar-expand-lg navbar-dark\">\n        <a class=\"navbar-brand\" [routerLink]=\"['/']\"><span class=\"glyphicon glyphicon-film\"></span>Serial<strong> Tracker</strong></a>\n        <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleNavbar = !toggleNavbar\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse  justify-content-between\" [ngbCollapse]=\"!toggleNavbar\">\n          <ul class=\"navbar-nav\">\n            <li class=\"nav-item active\" mdbWavesEffect>\n              <a class=\"nav-link waves-light\" [routerLink]=\"['/']\" >Home <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li  class=\"nav-item\" *ngIf=\"user\" mdbWavesEffect>\n              <a class=\"nav-link waves-light\" [routerLink]=\"['/add']\" >Add</a>\n            </li>\n            <li  class=\"nav-item\" mdbWavesEffect>\n              <a class=\"nav-link waves-light\" [routerLink]=\"['/about']\" >About</a>\n            </li>\n            <li  class=\"nav-item\" *ngIf=\"user\" routerLink=\"/myShows\" mdbWavesEffect>\n              <a class=\"nav-link waves-light\" [routerLink]=\"['/myShows']\" >My shows</a>\n            </li>\n          </ul>\n          <ul class=\"nav md-auto navbar-nav navbar-right\">\n              <ul *ngIf=\"!user; then thenBlock else elseBlock\"></ul>\n              <ng-template #thenBlock>\n                  <li  class=\"nav-item\" mdbWavesEffect><a [routerLink]=\"['/login']\" class=\"nav-link waves-light\" mdbWavesEffect>Login</a></li>\n                  <li  class=\"nav-item\"><a [routerLink]=\"['/signup']\" class=\"nav-link waves-light\" mdbWavesEffect>Sign up</a></li>\n              </ng-template>\n              <ng-template #elseBlock>\n                  <li class=\"navbar-text\" class=\"nav-item\"  (bind)=\"user.email\" class=\"nav-link waves-light\" mdbWavesEffect></li>\n                  <li class=\"nav-item\" ><a (click)=\"logout()\" class=\"nav-link waves-light\" mdbWavesEffect>Logout</a></li>\n              </ng-template>\n          </ul>\n        </div>\n      </nav>\n  </header>\n  <router-outlet></router-outlet>\n\n\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content above * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * End of Placeholder * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" *ngIf=\"show && show.genre.length && show.genre.length > 0\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-body\">\n      <div class=\"media\">\n        <div class=\"pull-left\">\n          <img class=\"media-object img-rounded\" [src]=\"show.poster || show.banner\" onerror=\"this.src='../../assets/placeholder.jpg';\">\n          <div class=\"text-center\" *ngIf=\"user\">\n            <div *ngIf = \"!isSubscribed && show.status === 'Continuing'\">\n              <button (click)=\"subscribe()\" class=\"btn btn-block btn-success\">\n                <span class=\"glyphicon glyphicon-plus\"></span> Subscribe\n              </button>\n            </div>\n            <div *ngIf = \"isSubscribed && show.status === 'Continuing'\">\n              <button (click)=\"unsubscribe()\" class=\"btn btn-block btn-danger\">\n                <span class=\"glyphicon glyphicon-minus\"></span> Unsubscribe\n              </button>\n            </div>\n          </div>\n          <div class=\"text-center\" *ngIf=\"!user && !isSubscribed && show.status === 'Continuing'\">\n            <a class=\"btn btn-block btn-primary\" [routerLink]=\"['/login']\">Login to Subscribe</a>\n          </div>\n        </div>\n        <div class=\"media-body\">\n          <h2 class=\"media-heading\">\n            {{show.name}}\n            <span class=\"pull-right text-danger\">{{show.rating}}</span>\n          </h2>\n          <h4 *ngIf=\"show.status === 'Continuing'\">\n            <span class=\"glyphicon glyphicon-calendar text-danger\"></span>\n            {{show.airsDayOfWeek}} <em>{{show.airsTime}}</em> on\n            {{show.network}}\n          </h4>\n          <h4 *ngIf=\"show.status === 'Ended'\">\n            Status: <span class=\"text-danger\">Ended</span>\n          </h4>\n          <p>{{show.overview}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading episodes\">\n      <span class=\"glyphicon glyphicon-play\"></span> Episodes\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"episode\" *ngFor=\"let episode of show.episodes\">\n        <h4>{{episode.episodeName}}\n        <img class=\"media-object img-rounded\" [src]=\"episode.filename\" onerror=\"this.src='../../assets/placeholder.jpg';\">\n        <p>Season {{episode.season}}, Episode {{episode.episodeNumber}}</p>\n        </h4>\n        <p>\n          <span class=\"glyphicon glyphicon-calendar\"></span>\n          {{episode.firstAired | date: 'short'}}\n        </p>\n        <p>{{episode.overview}}</p>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"board\">\n  <p id=\"error\">\n    error\n  </p>\n  <p id=\"code\">\n    404\n  </p>\n  <div class=\"subtitle\">Oops. Looks like you took a wrong turn.</div>\n<button>Go back</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p class=\"auto\">Autamatically track what you watch</p> -->\n<div class=\"snow1\"></div>\n<div class=\"snow2\"></div>\n<div class=\"snow3\"></div>\n<div class=\"minion\">\n  <a [routerLink]=\"['/signup']\" *ngIf=\"!user\"><button class=\"join\" >Join us</button></a>\n  <a [routerLink]=\"['/myShows']\" *ngIf=\"user\" ><button class=\"join\" >My shows</button></a>\n</div>\n<div class=\"jumbotron\">\n    <div class=\"container\">\n      <ul class=\"alphabet\">\n        <li *ngFor=\"let char of alphabet;\">\n          <span (click)=\"filterByAlphabet(char)\">{{char}}</span>\n        </li>\n      </ul>\n      <ul class=\"genres\">\n        <li *ngFor=\"let genre of genres;\">\n          <span (click)=\"filterByGenre(genre)\">{{genre}}</span>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"container\">\n      <p class=\"headingTitle\">{{headingTitle}}</p>\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <div class=\"pull-right\">\n          <input class=\"search\" type=\"text\" ng-model=\"query.name\" placeholder=\"Search...\" (keyup.enter)=\"filterByAlphabet($event.target.value)\">\n        </div>\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"row show-list\">\n          <div class=\"col-xs-4 col-md-3\" *ngFor=\"let show of shows\">\n            <a [routerLink]=\"['/shows/',show._id]\">\n              <img [src]=\"show.poster || show.banner\" onerror=\"this.src='../../assets/placeholder.jpg';\" class=\"img-rounded\" width=\"100%\"/><!---[attr.src]=\"{{show.poster}}\"-->\n            </a>\n            <div class=\"text-center\">\n              <a [routerLink]=\"['/shows/',show._id]\">{{show.name}}</a>\n              <p class=\"text-muted\">Episodes: {{show.episodes.length}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<div class=\"container login-bg\">\n  <div class=\"row\">\n    <div class=\"center-form panel\">\n      <div class=\"panel-body\">\n        <h2 class=\"text-center\">Login</h2>\n\n        <form [formGroup]=\"loginForm\" method=\"post\" (submit)=\"login()\" name=\"loginForm\">\n          <div class=\"form-group\">\n            <input class=\"form-control input-lg\" type=\"text\" name=\"email\" [(ngModel)]=\"email\" placeholder=\"Email\" formControlName=\"email\" required autofocus>\n          </div>\n          <div class=\"form-group\">\n            <input class=\"form-control input-lg\" type=\"password\" name=\"password\" [(ngModel)]=\"password\" formControlName=\"password\" placeholder=\"Password\" required>\n          </div>\n\n          <button type=\"submit\" [disabled]=\"loginForm.invalid\" class=\"btn btn-lg btn-block btn-danger\">\n            Sign In\n          </button>\n          <button (click)=\"singInGoogle('Google');\" [hidden]=\"user\" class=\"google-sign\"><i class=\"fa fa-google\"></i></button><br /><br />\n          <button (click)=\"signOutGoogle();\" [hidden]=\"!user\"><i class=\"fa fa-google\"></i>Sign out</button><br /><br />\n          <!-- <div *ngIf=\"user\">\n              <img src=\"{{ user.photoUrl }}\">\n              <h4>{{ user.name }}</h4>\n              <p>{{ user.email }}</p>\n          </div> -->\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-shows/my-shows.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-shows/my-shows.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <p class=\"headingTitle\">{{headingTitle}}</p>\n<div class=\"panel panel-default\">\n  <div class=\"panel-body\">\n    <div class=\"row show-list\">\n      <h4 *ngIf=\"shows.length===0\">Please, subscribe for shows!</h4>\n      <div class=\"col-xs-4 col-md-3\" *ngFor=\"let show of shows\">\n        <a [routerLink]=\"['/shows/',show._id]\">\n          <img [src]=\"show.poster || show.banner\" class=\"img-rounded\" width=\"100%\"/>\n          <h4 *ngIf=\"show.status === 'Continuing'\" class=\"film\">\n            <span class=\"glyphicon glyphicon-calendar text-danger\"></span>\n            {{show.airsDayOfWeek}} <b>{{show.airsTime}}</b>\n          </h4>\n        </a>\n        <div class=\"text-center\">\n          <a [routerLink]=\"['/shows/',show._id]\">{{show.name}}</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<div class=\"container login-bg\">\n    <br/>\n    <div class=\"row\">\n      <div class=\"center-form panel\">\n        <form [formGroup]=\"signupForm\" novalidate method=\"post\" name=\"signupForm\" (submit)=\"signup()\">\n          <div class=\"panel-body\">\n            <h2 class=\"text-center\">Sign up</h2>\n            <div class=\"form-group\">\n              <input class=\"form-control input-lg\" type=\"email\" id=\"email\" name=\"email\" [(ngModel)]=\"emailText\" formControlName=\"emailText\" placeholder=\"Email\" required autofocus>\n\n              <div class=\"alert alert-danger\" *ngIf=\"signupForm.controls['emailText'].invalid && signupForm.controls['emailText'].touched\">\n                Invalid Email\n            </div>\n            </div>\n\n            <div class=\"form-group\">\n              <input class=\"form-control input-lg\" type=\"password\" name=\"password\"\n              [(ngModel)]=\"passwordText\" formControlName=\"passwordText\" placeholder=\"Password\" required>\n\n              <div class=\"alert alert-danger\" *ngIf=\"signupForm.controls['passwordText'].invalid && signupForm.controls['passwordText'].touched\">\n                Password should containt minimum eight characters, at least one letter, one number and one special character\n            </div>\n              </div>\n\n            <div class=\"form-group\">\n              <input class=\"form-control input-lg\" type=\"password\"\n                     name=\"confirmPassword\" [(ngModel)]=\"confirmPassword\" formControlName=\"confirmPassword\"\n                     placeholder=\"Confirm Password\"\n                     required>\n\n              <div class=\"help-block text-danger my-special-animation\"\n                   *ngIf=\"signupForm.confirmPassword\"\n                   ng-messages=\"signupForm.confirmPassword.$error\">\n                <div ng-message=\"required\">You must confirm password.</div>\n              </div>\n              <div class=\"alert alert-danger\" *ngIf=\"signupForm.controls['confirmPassword'].invalid && signupForm.controls['confirmPassword'].touched\">\n                Passwords don`t match\n            </div>\n            </div>\n            <button (click)=\"singInGoogle('Google');\" [hidden]=\"user\" class=\"google-sign\"><i class=\"fa fa-google\"></i></button><br />\n            <button type=\"submit\" [disabled]=\"signupForm.$invalid\"\n                    class=\"btn btn-lg btn-block btn-danger\">Create Account\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css")).default]
    })
], AboutComponent);



/***/ }),

/***/ "./src/app/add/add.component.ts":
/*!**************************************!*\
  !*** ./src/app/add/add.component.ts ***!
  \**************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_HomeService_home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/HomeService/home.service */ "./src/app/services/HomeService/home.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let AddComponent = class AddComponent {
    constructor(homeService, router, renderer) {
        this.homeService = homeService;
        this.router = router;
        this.renderer = renderer;
        this.showName = '';
        console.log('ROUTER ADD', this.router);
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            "showName": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("Show", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.userNameValidator])
        });
    }
    userNameValidator(control) {
        if (control.value === "нет") {
            return { "showName": true };
        }
        return null;
    }
    addShow() {
        this.homeService.postShows(this.showName).subscribe(count => {
            this.count = count;
            console.log('COUNT', this.count);
        });
        console.log(this.myForm);
    }
    ngOnInit() {
        // this.renderer.setStyle(document.body, 'background-color', 'yellow');
        // console.log('ROUTER ADD',this.router);
    }
};
AddComponent.ctorParameters = () => [
    { type: _services_HomeService_home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add/add.component.html")).default,
        styles: ["input.ng-touched.ng-invalid {border:solid red 2px;}\n  input.ng-touched.ng-valid {border:solid green 2px;}", tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css")).default]
    })
], AddComponent);



/***/ }),

/***/ "./src/app/add/add.module.ts":
/*!***********************************!*\
  !*** ./src/app/add/add.module.ts ***!
  \***********************************/
/*! exports provided: AddModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddModule", function() { return AddModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add.component */ "./src/app/add/add.component.ts");







let AddModule = class AddModule {
};
AddModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
        declarations: [
            _add_component__WEBPACK_IMPORTED_MODULE_6__["AddComponent"]
        ],
        imports: [
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            // HttpClientModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        ],
        providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
        bootstrap: [_add_component__WEBPACK_IMPORTED_MODULE_6__["AddComponent"]]
    })
], AddModule);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _my_shows_my_shows_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./my-shows/my-shows.component */ "./src/app/my-shows/my-shows.component.ts");











const routes = [
    { path: 'Home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    { path: 'add',
        component: _add_add_component__WEBPACK_IMPORTED_MODULE_4__["AddComponent"]
    },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"]
    },
    {
        path: 'myShows',
        component: _my_shows_my_shows_component__WEBPACK_IMPORTED_MODULE_10__["MyShowsComponent"]
    },
    { path: 'shows/:id',
        component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"]
    },
    { path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
    },
    { path: 'signup',
        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"],
    },
    {
        path: '',
        redirectTo: 'Home',
        pathMatch: 'full'
    },
    {
        path: '*',
        redirectTo: 'Home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: _error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"]
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep body {\n  background-color: #000;\n  margin: 0;\n  padding-bottom: 20px;\n  color: #f4f6f8;\n}\n\n.minion {\n  max-width: 100%;\n  height: 90vh;\n  background: url(https://image.tmdb.org/t/p/original/HiNO3Gyp69e59Pax6a0g2Vhr1S.jpg), linear-gradient(90deg, #fff 0%, #180609 35%);\n  background-size: cover, 100% 100%;\n  padding-top: 56.44%;\n  background-position: 0 0, -1890px 0px;\n  background-repeat: no-repeat;\n  background-blend-mode: luminosity;\n  transition: 1s background-position linear;\n  margin: 0 auto;\n  box-shadow: inset 0px 0px 130px 152px black;\n  justify-content: center;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  z-index: 10000;\n}\n\n.minion:hover {\n  background-position: 0 0, 0 0;\n}\n\nsection {\n  margin-top: 5rem;\n}\n\nem {\n  font-style: normal;\n  text-decoration: underline;\n}\n\n.alphabet {\n  cursor: pointer;\n  font-size: 22px;\n  text-align: center;\n}\n\n.alphabet li {\n  display: inline-block;\n  padding-left: 5px;\n  padding-right: 5px;\n  color: #f4f6f8;\n}\n\n.alphabet li:hover {\n  color: #cc0000;\n}\n\n.login-bg {\n  box-shadow: inset 0px 0px 49px 58px black;\n  background-image: url(\"https://musicart.xboxlive.com/6/cfa3597b-0000-0000-0000-000000000009/504/image.jpg?w=1920&h=1080\");\n}\n\n.add {\n  top: 36%;\n  height: 5%;\n  box-shadow: none !important;\n}\n\na {\n  color: #fff;\n}\n\n.serial-bg {\n  background-image: url(\"http://www.newt.cat/imgs/full/2/24240_stranger-things-2-desktop-wallpaper.jpg\");\n  height: 90vh;\n  box-shadow: inset 0px 0px 130px 152px black;\n}\n\n.google-sign {\n  margin-top: 2rem;\n  background-color: #f4f6f8;\n  border: 1px solid #ced4da;\n  padding: 1rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.google-sign i {\n  font-size: 2rem;\n}\n\n.google-sign:hover {\n  background-color: #cc0000;\n}\n\n.google-sign:hover i {\n  color: #f4f6f8;\n}\n\n.genres {\n  cursor: pointer;\n}\n\n.genres li {\n  font-size: 1rem !important;\n  margin-right: 5px;\n}\n\n.genres li:active {\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.25);\n}\n\n.jumbotron {\n  margin-top: -20px;\n  border-bottom: 1px solid #000;\n  background-color: #000 !important;\n}\n\n.media-object {\n  max-width: 200px;\n  margin-bottom: 10px;\n}\n\n.episode {\n  border-left: 5px solid #111;\n  padding-left: 10px;\n}\n\n.episodes {\n  margin-top: 2rem !important;\n  padding: 10px !important;\n  margin-bottom: 2rem !important;\n}\n\n.alert-info {\n  margin-top: 2rem;\n}\n\n.media-body {\n  margin-left: 2rem !important;\n}\n\n.alert {\n  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.3);\n}\n\n.add-bg {\n  margin-top: 8rem;\n}\n\n.btn {\n  border-radius: 2px;\n}\n\n.btn-lg {\n  font-size: 14px;\n}\n\n.btn [class^=ion-] {\n  margin-right: 6px;\n}\n\n.btn-facebook {\n  color: #fff;\n  background-color: #3b5998;\n  border: 1px solid #37538d;\n}\n\n.btn-facebook:hover {\n  color: #fff;\n  background-color: #314a7e;\n}\n\n.btn-google-plus {\n  color: #fff;\n  background-color: #dd4b39;\n  border: 1px solid #db3f2c;\n}\n\n.btn-google-plus:hover {\n  color: #fff;\n  background-color: #cf3624;\n}\n\n.center-form {\n  width: 330px;\n  margin: 10% auto;\n  padding: 2rem;\n  background-color: #f4f6f8;\n}\n\n.center-form input {\n  border-radius: 0;\n}\n\n.headingTitle {\n  font-weight: bold;\n  font-size: 1.5rem;\n  color: #fff;\n}\n\n.search {\n  color: #f4f6f8;\n  font-weight: 300;\n  font-size: 1.5em;\n  padding: 20px;\n  border: 0;\n  background-color: transparent;\n  outline: none;\n  -webkit-appearance: none;\n}\n\n.search:focus {\n  transition: all 0.4s ease;\n}\n\n.search::-webkit-input-placeholder {\n  color: #f4f6f8;\n}\n\n.search::-moz-placeholder {\n  color: #f4f6f8;\n}\n\n.search::-ms-input-placeholder {\n  color: #f4f6f8;\n}\n\n.search::placeholder {\n  color: #f4f6f8;\n}\n\n.pull-right {\n  background-color: #cc0000;\n  margin-bottom: 10%;\n}\n\n.count {\n  margin-top: 2rem;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n\n.join {\n  background-color: #cc0000;\n  position: absolute;\n  color: #f4f6f8;\n  bottom: 11%;\n  left: 47%;\n  font-size: 1.5rem;\n  font-weight: bold;\n  border: 10px;\n  padding: 0.5rem 3rem;\n  box-shadow: 3px 6px 31px #fff;\n}\n\n.join:hover {\n  background-color: #990000;\n}\n\n.password-strength-indicator {\n  position: absolute;\n  right: 0;\n  top: 10px;\n  width: 5px;\n  padding: 0 15px;\n}\n\n.password-strength-indicator span {\n  display: block;\n  height: 5px;\n  margin-bottom: 2px;\n  width: 5px;\n  border-radius: 5px;\n  background: #ebeef1;\n}\n\n.panel {\n  border-color: #cfd9D7;\n  border-radius: 2px;\n  box-shadow: 0 8px 17px rgba(0, 0, 0, 0.2);\n}\n\n.panel-default > .panel-heading {\n  color: #444;\n  border-color: #cfd9db;\n  font-weight: bold;\n  font-size: 85%;\n  text-transform: uppercase;\n  background-color: #f6f6f6;\n}\n\n.label, .genres li {\n  display: inline-block;\n  margin-bottom: 5px;\n  padding: 4px 8px;\n  border: 0;\n  border-radius: 3px;\n  font-size: 12px;\n  transition: 0.1s all;\n  -webkit-font-smoothing: antialiased;\n}\n\n.label-default, .genres li {\n  background-color: #e4e7ec;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.7);\n  color: #90939a;\n}\n\n.label-default:hover, .genres li:hover {\n  background-color: #90939a;\n  color: #f4f6f8;\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2);\n}\n\n.navbar {\n  border: 0;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n\n.navbar-header {\n  float: left;\n  padding-left: 30px;\n}\n\n.navbar-brand {\n  transition: 0.25s all;\n  padding-right: 30px;\n}\n\n.navbar-nav {\n  float: left;\n  margin: 0;\n}\n\n.navbar-nav > li {\n  float: left;\n}\n\n.navbar-nav > li > a {\n  padding: 15px;\n}\n\n.alert-material {\n  font-family: \"Roboto\", sans-serif;\n  outline: none;\n  display: inline-block;\n  background: #323232;\n  color: #f1f1f1;\n  min-height: 48px;\n  padding: 13px 24px 12px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  z-index: 1;\n  border-radius: 2px;\n  cursor: default;\n  position: fixed;\n  bottom: 12px;\n  right: 12px;\n}\n\n.alert-dismissable .close {\n  line-height: 19px;\n  top: 0;\n  right: -11px;\n  color: #eeff41;\n  cursor: pointer;\n  float: right;\n  opacity: 1;\n  text-shadow: none;\n  font-weight: normal;\n}\n\n.signup-or-separator {\n  background: none;\n  height: 34px;\n  position: relative;\n  text-align: center;\n}\n\n.signup-or-separator hr {\n  border-top: 1px solid #dce0e0;\n  margin: -16px auto 10px auto;\n  width: 90%;\n}\n\n.signup-or-separator .text {\n  background-color: #fff;\n  display: inline-block;\n  margin: 0;\n  padding: 8px;\n}\n\n.has-feedback .form-control-feedback {\n  top: 0;\n  left: 0;\n  width: 46px;\n  height: 46px;\n  line-height: 46px;\n  color: #555;\n}\n\n.has-feedback .form-control {\n  padding-left: 42.5px;\n}\n\n[class^=ion-] {\n  font-size: 1.2em;\n}\n\n.fade-repeat.ng-enter {\n  -webkit-animation: fadeIn 0.2s;\n  animation: fadeIn 0.2s;\n}\n\n.fadeZoom.ng-enter {\n  -webkit-animation-name: fadeIn, zoomIn;\n  -webkit-animation-duration: 0.6s, 0.2s;\n  animation-name: fadeIn, zoomIn;\n  animation-duration: 0.6s, 0.2s;\n}\n\n.fadeZoomFadeDown.ng-leave {\n  -webkit-animation: fadeOutDown 0.6s;\n  animation: fadeOutDown 0.6s;\n}\n\n@-webkit-keyframes zoomIn {\n  0% {\n    opacity: 0;\n    transform: scale3d(0.8, 0.8, 0.8);\n  }\n  50% {\n    opacity: 1;\n  }\n}\n\n@keyframes zoomIn {\n  0% {\n    opacity: 0;\n    transform: scale3d(0.8, 0.8, 0.8);\n  }\n  50% {\n    opacity: 1;\n  }\n}\n\n/* ABOUT PAGE */\n\nheader {\n  position: relative;\n  z-index: 1000;\n  background-color: #000;\n}\n\n.section-about {\n  background-image: url(https://images.unsplash.com/photo-1515089836358-4c06e3b50c80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1890&q=80);\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-height: 83vh;\n  box-shadow: inset 116px 146px 130px 300px black;\n}\n\n.section-about .about-box {\n  font-size: 1.2rem;\n  background-color: #000;\n}\n\np strong, .box-title, h2 {\n  color: #cc0000;\n  font-weight: bold;\n}\n\nh2 {\n  text-align: center;\n}\n\n.acc-flex {\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  color: #000;\n}\n\n.acc-flex .accordion, .acc-flex .accordion > .card {\n  min-width: 1280px;\n  margin-bottom: 20px;\n}\n\n.acc-flex .accordion .btn-link, .acc-flex .accordion > .card .btn-link {\n  color: #cc0000;\n  text-decoration: none;\n}\n\n/* ERROR PAGE */\n\n.board {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 150px;\n  width: 500px;\n  margin: -258px 0 0 -250px;\n  padding: 20px;\n  font: 7rem Monoton, cursive;\n  text-align: center;\n  text-transform: uppercase;\n  text-shadow: 0 0 80px #cc0000, 0 0 30px FireBrick, 0 0 6px DarkRed;\n  color: #cc0000;\n}\n\n.board button {\n  background-color: transparent;\n  color: #f4f6f8;\n  font-size: 2rem;\n  padding: 20px;\n  border: 0px;\n  text-shadow: 0 0 80px #ffffff, 0 0 30px #008000, 0 0 6px #0000ff;\n}\n\n.board button:hover {\n  background-color: #cc0000;\n}\n\n.board #error {\n  color: #fff;\n  text-shadow: 0 0 80px #ffffff, 0 0 30px #008000, 0 0 6px #0000ff;\n}\n\n.board .subtitle {\n  font-size: 25px;\n  margin-top: 1.5em;\n  font-family: Monoton, cursive;\n  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);\n}\n\n.snow1 {\n  /*   background: url('http://pngimg.com/uploads/rain/rain_PNG13468.png'); */\n  background: url(\"http://www.pngmart.com/files/5/Snow-PNG-Transparent-Image.png\");\n  background-repeat: repeat;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0.5;\n  -webkit-animation: animate1 15s linear infinite;\n          animation: animate1 15s linear infinite;\n}\n\n@-webkit-keyframes animate1 {\n  0% {\n    background-position: 0px 0px;\n  }\n  100% {\n    background-position: -150px 650px;\n  }\n}\n\n@keyframes animate1 {\n  0% {\n    background-position: 0px 0px;\n  }\n  100% {\n    background-position: -150px 650px;\n  }\n}\n\n.snow3 {\n  background: url(\"http://www.pngmart.com/files/5/Snow-PNG-Transparent-Image.png\");\n  background-repeat: repeat;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0.5;\n  -webkit-animation: animate3 15s linear infinite;\n          animation: animate3 15s linear infinite;\n}\n\n@-webkit-keyframes animate3 {\n  0% {\n    background-position: 0px -100px;\n  }\n  100% {\n    background-position: 0px 750px;\n  }\n}\n\n@keyframes animate3 {\n  0% {\n    background-position: 0px -100px;\n  }\n  100% {\n    background-position: 0px 750px;\n  }\n}\n\n.snow2 {\n  background: url(\"http://www.pngmart.com/files/5/Snow-PNG-Transparent-Image.png\");\n  background-repeat: repeat;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0.5;\n  -webkit-animation: animate2 15s linear infinite;\n          animation: animate2 15s linear infinite;\n}\n\n@-webkit-keyframes animate2 {\n  0% {\n    background-position: 0px 100px;\n  }\n  100% {\n    background-position: 300px 650px;\n  }\n}\n\n@keyframes animate2 {\n  0% {\n    background-position: 0px 100px;\n  }\n  100% {\n    background-position: 300px 650px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXGNvdXJzZVdvcmtcXFNlcmlhbHNUcmFja2VyXFxzZXJpYWxzVHJhY2tlci9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkhBO0VBQ0Usc0JBcERRO0VBcURSLFNBQUE7RUFDQSxvQkFBQTtFQUNBLGNBdkJhO0FDckdmOztBRCtIQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBRUEsaUlBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSw0QkFBQTtFQUNBLGlDQUFBO0VBRUEseUNBQUE7RUFDQSxjQUFBO0VBQ0EsMkNBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQzVIRjs7QUQ4SEU7RUFDRSw2QkFBQTtBQzVISjs7QURxSUE7RUFDRSxnQkFBQTtBQ2xJRjs7QURxSUE7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0FDbElGOztBRHFJQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNsSUY7O0FEb0lFO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0ExRVc7QUN4RGY7O0FEb0lJO0VBQ0UsY0E1R007QUN0Qlo7O0FEdUlBO0VBQ0UseUNBQUE7RUFDQSx5SEFBQTtBQ3BJRjs7QUR1SUE7RUFDRSxRQUFBO0VBQ0EsVUFBQTtFQUNBLDJCQUFBO0FDcElGOztBRHVJQTtFQUNFLFdBQUE7QUNwSUY7O0FEdUlBO0VBQ0Usc0dBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7QUNwSUY7O0FEc0lBO0VBQ0UsZ0JBQUE7RUFDQSx5QkF4R2E7RUF5R2IseUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNuSUY7O0FEb0lFO0VBQ0UsZUFBQTtBQ2xJSjs7QURvSUU7RUFDRSx5QkFqSlE7QUNlWjs7QURtSUk7RUFDRSxjQXBIUztBQ2JmOztBRHNJQTtFQUNFLGVBQUE7QUNuSUY7O0FEcUlFO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtBQ25JSjs7QUR1SUk7RUFDRSwrQ0FBQTtBQ3JJTjs7QUQwSUE7RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUNBQUE7QUN2SUY7O0FEMElBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ3ZJRjs7QUQwSUE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0FDdklGOztBRDBJQTtFQUNFLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtBQ3ZJRjs7QUR5SUE7RUFDRSxnQkFBQTtBQ3RJRjs7QUR3SUE7RUFDRSw0QkFBQTtBQ3JJRjs7QUR3SUE7RUFDRSx3Q0FBQTtBQ3JJRjs7QUR3SUE7RUFDRSxnQkFBQTtBQ3JJRjs7QUR5SUE7RUFDRSxrQkFBQTtBQ3RJRjs7QUR5SUE7RUFDRSxlQUFBO0FDdElGOztBRHlJQTtFQUNFLGlCQUFBO0FDdElGOztBRHlJQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FDdElGOztBRHdJRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQ3RJSjs7QUQwSUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQ3ZJRjs7QUR5SUU7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUN2SUo7O0FEMklBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQW5OYTtBQzJFZjs7QUQwSUU7RUFDRSxnQkFBQTtBQ3hJSjs7QUQ0SUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0ExT2tCO0FDaUdwQjs7QUQ0SUE7RUFDRSxjQWpPYTtFQWtPYixnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQ3pJRjs7QUQySUU7RUFFRSx5QkFBQTtBQ3pJSjs7QUQySUk7RUFDRSxjQS9PUztBQ3NHZjs7QUR3SUk7RUFDRSxjQS9PUztBQ3NHZjs7QUR3SUk7RUFDRSxjQS9PUztBQ3NHZjs7QUR3SUk7RUFDRSxjQS9PUztBQ3NHZjs7QUQ2SUE7RUFDRSx5QkFuUlU7RUFvUlYsa0JBQUE7QUMxSUY7O0FENElBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDeklGOztBRDRJQTtFQUNFLHlCQTdSVTtFQThSVixrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtBQ3pJRjs7QUQwSUU7RUFDRSx5QkFBQTtBQ3hJSjs7QURzSkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUNuSkY7O0FEc0pBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDbkpGOztBRHNKQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtBQ25KRjs7QURzSkE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FDbkpGOztBRHNKQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLG1DQUFBO0FDbkpGOztBRHNKQTtFQUNFLHlCQUFBO0VBQ0EsNkNBQUE7RUFDQSxjQUFBO0FDbkpGOztBRHFKRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHdDQUFBO0FDbkpKOztBRHVKQTtFQUNFLFNBQUE7RUFDQSwyQ0FBQTtBQ3BKRjs7QUR1SkE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNwSkY7O0FEd0pBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtBQ3JKRjs7QUR3SkE7RUFDRSxXQUFBO0VBQ0EsU0FBQTtBQ3JKRjs7QUR1SkU7RUFDRSxXQUFBO0FDckpKOztBRHVKSTtFQUNFLGFBQUE7QUNySk47O0FEMkpBO0VBQ0UsaUNBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDeEpGOztBRDJKQTtFQUNFLGlCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ3hKRjs7QUQySkE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDeEpGOztBRDBKRTtFQUNFLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0FDeEpKOztBRDJKRTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtBQ3pKSjs7QUQ2SkE7RUFDRSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDMUpGOztBRDZKQTtFQUNFLG9CQUFBO0FDMUpGOztBRDZKQTtFQUNFLGdCQUFBO0FDMUpGOztBRDZKQTtFQUNFLDhCQUFBO0VBQ0Esc0JBQUE7QUMxSkY7O0FENkpBO0VBQ0Usc0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7QUMxSkY7O0FEaUtBO0VBQ0UsbUNBQUE7RUFDQSwyQkFBQTtBQzlKRjs7QURpS0E7RUFDRTtJQUNFLFVBQUE7SUFFQSxpQ0FBQTtFQzlKRjtFRGlLQTtJQUNFLFVBQUE7RUMvSkY7QUFDRjs7QURrS0E7RUFDRTtJQUNFLFVBQUE7SUFHQSxpQ0FBQTtFQ2hLRjtFRG1LQTtJQUNFLFVBQUE7RUNqS0Y7QUFDRjs7QURvS0EsZUFBQTs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDbktGOztBRHNLQTtFQUNFLDZKQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0NBQUE7QUNuS0Y7O0FEb0tFO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtBQ2xLSjs7QURxS0E7RUFDRSxjQS9nQlU7RUFnaEJWLGlCQUFBO0FDbEtGOztBRHFLQTtFQUNFLGtCQUFBO0FDbEtGOztBRHFLQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0E3Z0JXO0FDMldiOztBRG1LRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUNqS0o7O0FEb0tJO0VBQ0UsY0FsaUJNO0VBbWlCTixxQkFBQTtBQ2xLTjs7QUR1S0EsZUFBQTs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtFQUFBO0VBQ0EsY0F2akJVO0FDaVpaOztBRHVLRTtFQUNFLDZCQUFBO0VBQ0EsY0EzaEJXO0VBNGhCWCxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxnRUFBQTtBQ3JLSjs7QURzS0k7RUFDRSx5QkFoa0JNO0FDNFpaOztBRHdLRTtFQUNFLFdBQUE7RUFDQSxnRUFBQTtBQ3RLSjs7QUR5S0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLDJDQUFBO0FDdktKOztBRGlNQTtFQUNFLDJFQUFBO0VBQ0ksZ0ZBQUE7RUFDRix5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSwrQ0FBQTtVQUFBLHVDQUFBO0FDOUxKOztBRGlNRTtFQUNFO0lBQUksNEJBQUE7RUM3TE47RUQ4TEU7SUFBTSxpQ0FBQTtFQzNMUjtBQUNGOztBRHdMRTtFQUNFO0lBQUksNEJBQUE7RUM3TE47RUQ4TEU7SUFBTSxpQ0FBQTtFQzNMUjtBQUNGOztBRDZMRTtFQUNFLGdGQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsK0NBQUE7VUFBQSx1Q0FBQTtBQzNMSjs7QUQ4TEU7RUFDRTtJQUFJLCtCQUFBO0VDMUxOO0VEMkxFO0lBQU0sOEJBQUE7RUN4TFI7QUFDRjs7QURxTEU7RUFDRTtJQUFJLCtCQUFBO0VDMUxOO0VEMkxFO0lBQU0sOEJBQUE7RUN4TFI7QUFDRjs7QUQwTEU7RUFDRSxnRkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO1VBQUEsdUNBQUE7QUN4TEo7O0FEMkxFO0VBQ0U7SUFBSSw4QkFBQTtFQ3ZMTjtFRHdMRTtJQUFNLGdDQUFBO0VDckxSO0FBQ0Y7O0FEa0xFO0VBQ0U7SUFBSSw4QkFBQTtFQ3ZMTjtFRHdMRTtJQUFNLGdDQUFBO0VDckxSO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi8vIC5uYXZiYXItZGVmYXVsdCB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzRmYjRjYztcclxuLy8gICBib3JkZXI6IG5vbmU7XHJcbi8vICAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwwLDAsLjE3NSk7XHJcbi8vICAgLmJ0bi1kZWZhdWx0IHtcclxuLy8gICAgIGNvbG9yOiAjNGZiNGNjO1xyXG4vLyAgICAgJjpob3ZlciB7XHJcbi8vICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkN2VlZjQ7XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyAgIC5kcm9wZG93bi1tZW51IHtcclxuLy8gICAgIGJvcmRlcjogbm9uZTtcclxuLy8gICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4xNzUpO1xyXG4vLyAgICAgbGk+YSB7XHJcbi8vICAgICAgICY6aG92ZXIge1xyXG4vLyAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdlZWY0O1xyXG4vLyAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vICAgLm5hdmJhci1icmFuZCB7XHJcbi8vICAgICBjb2xvcjogI2ZmZjtcclxuLy8gICAgICY6aG92ZXIge1xyXG4vLyAgICAgICBjb2xvcjogIzAwMDtcclxuLy8gICAgIH1cclxuLy8gICAgICY6Zm9jdXMge1xyXG4vLyAgICAgICBjb2xvcjogI2Q3ZWVmNDtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vICAgLm5hdmJhci1uYXY+bGk+YSB7XHJcbi8vICAgICBjb2xvcjogI2ZmZjtcclxuLy8gICB9XHJcbi8vICAgLm5hdmJhci1uYXY+LmFjdGl2ZT5hIHtcclxuLy8gICAgIGNvbG9yOiAjNGZiNGNjO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuLy8gICB9XHJcbi8vICAgLm5hdmJhci1uYXY+LmFjdGl2ZT5hOmZvY3VzIHtcclxuLy8gICAgIGNvbG9yOiAjNGZiNGNjO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuLy8gICB9XHJcbi8vICAgLm5hdmJhci1uYXY+LmFjdGl2ZT5hOmhvdmVyIHtcclxuLy8gICAgIGNvbG9yOiAjNGZiNGNjO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZWVmNDtcclxuLy8gICB9XHJcbi8vICAgLm5hdmJhci1uYXY+Lm9wZW4+YSB7XHJcbi8vICAgICBjb2xvcjogIzRmYjRjYztcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbi8vICAgfVxyXG4vLyAgIC5uYXZiYXItbmF2Pi5vcGVuPmE6Zm9jdXMge1xyXG4vLyAgICAgY29sb3I6ICM0ZmI0Y2M7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4vLyAgIH1cclxuLy8gICAubmF2YmFyLW5hdj4ub3Blbj5hOmhvdmVyIHtcclxuLy8gICAgIGNvbG9yOiAjNGZiNGNjO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZWVmNDtcclxuLy8gICB9XHJcbi8vICAgLm5hdmJhci10b2dnbGUge1xyXG4vLyAgICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xyXG4vLyAgICAgLmljb24tYmFyIHtcclxuLy8gICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuLy8gICAgIH1cclxuLy8gICAgICY6aG92ZXIge1xyXG4vLyAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdlZWY0O1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbi8vICAgLm5hdmJhciB7XHJcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4kYm9keS1iZzogIzAwMDtcclxuJGJyaWdodC1yZWQ6I2NjMDAwMDtcclxuXHJcbiRmb250LWZhbWlseS1iYXNlOiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuJGhlYWRpbmdzLWNvbG9yOiAjMTExO1xyXG5cclxuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRoZWFkaW5ncy1mb250LXdlaWdodDogYm9sZDtcclxuXHJcbiRicmFuZC1zdWNjZXNzOiAjMjJhZTVmO1xyXG4kYnJhbmQtcHJpbWFyeTogIzFkN2NmNDtcclxuJGJyYW5kLWRhbmdlcjogI2IzMDAxNTtcclxuJGJyYW5kLXdhcm5pbmc6ICNmZmQ2NmE7XHJcblxyXG4kdGV4dC1tdXRlZDogIzkwOTM5YTtcclxuJGxpbmstY29sb3I6ICMwMDA7XHJcblxyXG4kbmF2YmFyLWRlZmF1bHQtbGluay1hY3RpdmUtYmc6ICNmN2Y3Zjc7XHJcbiRuYXZiYXItZGVmYXVsdC1saW5rLWNvbG9yOiAjODQ4NDg0O1xyXG4kbmF2YmFyLWRlZmF1bHQtYmc6ICNmZmY7XHJcbiRuYXZiYXItZGVmYXVsdC1ib3JkZXI6ICNlM2U5ZWM7XHJcblxyXG4kbmF2YmFyLWRlZmF1bHQtYnJhbmQtY29sb3I6ICMzMzM7XHJcbiRuYXZiYXItZGVmYXVsdC1icmFuZC1ob3Zlci1jb2xvcjogI2ZmZTkzOTtcclxuJG5hdmJhci1kZWZhdWx0LWJyYW5kLWhvdmVyLWJnOiAjMzMzO1xyXG5cclxuJGJ0bi1zdWNjZXNzLWJnOiAkYnJhbmQtc3VjY2VzcztcclxuJGJ0bi1zdWNjZXNzLWJvcmRlcjogZGFya2VuKCRidG4tc3VjY2Vzcy1iZywgMyUpO1xyXG4kYnRuLXByaW1hcnktYmc6ICRicmFuZC1wcmltYXJ5O1xyXG4kYnRuLXByaW1hcnktYm9yZGVyOiBkYXJrZW4oJGJ0bi1wcmltYXJ5LWJnLCAzJSk7XHJcblxyXG4kanVtYm90cm9uLXBhZGRpbmc6IDE2cHg7XHJcbiRqdW1ib3Ryb24tYmc6ICNmNGY2Zjg7XHJcblxyXG4kYWxlcnQtYm9yZGVyLXJhZGl1czogMDtcclxuJGlucHV0LWJvcmRlci1yYWRpdXM6IDA7XHJcblxyXG4kYWxlcnQtc3VjY2Vzcy10ZXh0OiAjZmZmO1xyXG4kYWxlcnQtc3VjY2Vzcy1iZzogIzYwYzA2MDtcclxuJGFsZXJ0LXN1Y2Nlc3MtYm9yZGVyOiBkYXJrZW4oJGFsZXJ0LXN1Y2Nlc3MtYmcsIDMlKTtcclxuXHJcbiRhbGVydC1kYW5nZXItdGV4dDogI2ZmZjtcclxuJGFsZXJ0LWRhbmdlci1iZzogJGJyYW5kLWRhbmdlcjtcclxuJGFsZXJ0LWRhbmdlci1ib3JkZXI6IGRhcmtlbigkYWxlcnQtZGFuZ2VyLWJnLCAzJSk7XHJcblxyXG4kYWxlcnQtaW5mby1iZzogI2U1ZjdmZDtcclxuJGFsZXJ0LWluZm8tYm9yZGVyOiAjYmNmOGYzO1xyXG4kYWxlcnQtaW5mby10ZXh0OiAjMjU0ODRlO1xyXG5cclxuJGJ0bi1mb250LXdlaWdodDogYm9sZDtcclxuXHJcbjo6bmctZGVlcCBib2R5e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRib2R5LWJnO1xyXG4gIG1hcmdpbjowO1xyXG4gIHBhZGRpbmctYm90dG9tOjIwcHg7XHJcbiAgY29sb3I6JGp1bWJvdHJvbi1iZztcclxufVxyXG5cclxuLm1pbmlvbntcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA5MHZoO1xyXG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbC9IaU5PM0d5cDY5ZTU5UGF4NmEwZzJWaHIxUy5qcGcpLCAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZmZiAwJSwgcmdiYSgyNCw2LDksMSkgMzUlKTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3Avb3JpZ2luYWwvSGlOTzNHeXA2OWU1OVBheDZhMGcyVmhyMVMuanBnKSwgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmZmIDAlLCByZ2JhKDI0LDYsOSwxKSAzNSUpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIsIDEwMCUgMTAwJTtcclxuICBwYWRkaW5nLXRvcDogNTYuNDQlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMCwgLTE4OTBweCAwcHg7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGx1bWlub3NpdHk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAxcyBiYWNrZ3JvdW5kLXBvc2l0aW9uIGxpbmVhcjtcclxuICB0cmFuc2l0aW9uOiAxcyBiYWNrZ3JvdW5kLXBvc2l0aW9uIGxpbmVhcjtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDEzMHB4IDE1MnB4IGJsYWNrO1xyXG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgei1pbmRleDoxMDAwMDtcclxuXHJcbiAgJjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMCwgMCAwO1xyXG5cclxuICAgIC8vIC5qb2luIHtcclxuICAgIC8vICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC8vICAgY29sb3I6ICRicmlnaHQtcmVkO1xyXG4gICAgLy8gfVxyXG4gIH1cclxufVxyXG5cclxuc2VjdGlvbntcclxuICBtYXJnaW4tdG9wOjVyZW07XHJcbn1cclxuXHJcbmVtIHtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcbi5hbHBoYWJldCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgY29sb3I6JGp1bWJvdHJvbi1iZztcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICRicmlnaHQtcmVkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmxvZ2luLWJne1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNDlweCA1OHB4IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL211c2ljYXJ0Lnhib3hsaXZlLmNvbS82L2NmYTM1OTdiLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwOS81MDQvaW1hZ2UuanBnP3c9MTkyMCZoPTEwODAnKTtcclxufVxyXG5cclxuLmFkZCB7XHJcbiAgdG9wOjM2JTtcclxuICBoZWlnaHQ6NSU7XHJcbiAgYm94LXNoYWRvdzogbm9uZSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiNmZmY7XHJcbn1cclxuXHJcbi5zZXJpYWwtYmcge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cDovL3d3dy5uZXd0LmNhdC9pbWdzL2Z1bGwvMi8yNDI0MF9zdHJhbmdlci10aGluZ3MtMi1kZXNrdG9wLXdhbGxwYXBlci5qcGcnKTtcclxuICBoZWlnaHQ6OTB2aDtcclxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDEzMHB4IDE1MnB4IGJsYWNrO1xyXG59XHJcbi5nb29nbGUtc2lnbntcclxuICBtYXJnaW4tdG9wOjJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjokanVtYm90cm9uLWJnO1xyXG4gIGJvcmRlcjoxcHggc29saWQgI2NlZDRkYTtcclxuICBwYWRkaW5nOjFyZW07XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICBpe1xyXG4gICAgZm9udC1zaXplOjJyZW07XHJcbiAgfVxyXG4gICY6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnJpZ2h0LXJlZDtcclxuICAgIGl7XHJcbiAgICAgIGNvbG9yOiRqdW1ib3Ryb24tYmc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZ2VucmVzIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIGxpIHtcclxuICAgIGZvbnQtc2l6ZToxcmVtIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgQGV4dGVuZCAubGFiZWw7XHJcbiAgICBAZXh0ZW5kIC5sYWJlbC1kZWZhdWx0O1xyXG5cclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgYm94LXNoYWRvdzogaW5zZXQgMCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNTApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmp1bWJvdHJvbiB7XHJcbiAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib2R5LWJnO1xyXG4gIGJhY2tncm91bmQtY29sb3I6JGJvZHktYmchaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWVkaWEtb2JqZWN0IHtcclxuICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5lcGlzb2RlIHtcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMxMTE7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uZXBpc29kZXN7XHJcbiAgbWFyZ2luLXRvcDogMnJlbSFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMTBweCFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuLmFsZXJ0LWluZm97XHJcbiAgbWFyZ2luLXRvcDoycmVtO1xyXG59XHJcbi5tZWRpYS1ib2R5e1xyXG4gIG1hcmdpbi1sZWZ0OjJyZW0haW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWxlcnQge1xyXG4gIGJveC1zaGFkb3c6IDAgMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbi5hZGQtYmd7XHJcbiAgbWFyZ2luLXRvcDo4cmVtO1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6dXJsKCdodHRwczovL29jYy0wLTE3MjMtOTIuMS5uZmx4c28ubmV0L2RubS9hcGkvdjYvRTh2RGNfVzhDTHY3LXlNUXU4S01FQzdScnI4L0FBQUFCUnQxMUhlUDNPeEg3bDN3dVJyWHdsenlhb25GVW9DVVM1alNxeC1SX1hnT0tiSmdDTmJkaHZ6OGU3QTN3QVpOUXdjNjBSbVR1MnpzN3h6T1JVQk1vZVQyaUN6ZS5qcGc/cj05OGEnKTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4uYnRuLWxnIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5idG4gW2NsYXNzXj0naW9uLSddIHtcclxuICBtYXJnaW4tcmlnaHQ6IDZweDtcclxufVxyXG5cclxuLmJ0bi1mYWNlYm9vayB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcclxuICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oIzNiNTk5OCwgMyUpO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCMzYjU5OTgsIDclKTtcclxuICB9XHJcbn1cclxuXHJcbi5idG4tZ29vZ2xlLXBsdXMge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkZDRiMzk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCNkZDRiMzksIDMlKTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigjZGQ0YjM5LCA3JSk7XHJcbiAgfVxyXG59XHJcblxyXG4uY2VudGVyLWZvcm0ge1xyXG4gIHdpZHRoOiAzMzBweDtcclxuICBtYXJnaW46IDEwJSBhdXRvO1xyXG4gIHBhZGRpbmc6MnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiRqdW1ib3Ryb24tYmc7XHJcblxyXG4gIGlucHV0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4uaGVhZGluZ1RpdGxle1xyXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgZm9udC1zaXplOjEuNXJlbTtcclxuICBjb2xvcjokbmF2YmFyLWRlZmF1bHQtYmc7XHJcbn1cclxuXHJcbi5zZWFyY2gge1xyXG4gIGNvbG9yOiAkanVtYm90cm9uLWJnO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxLjVlbTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlcjogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuNHMgZWFzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAuNHMgZWFzZTtcclxuICB9XHJcbiAgICAmOjpwbGFjZWhvbGRlcntcclxuICAgICAgY29sb3I6JGp1bWJvdHJvbi1iZztcclxuICAgIH1cclxufVxyXG5cclxuLnB1bGwtcmlnaHR7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJyaWdodC1yZWQ7XHJcbiAgbWFyZ2luLWJvdHRvbToxMCU7XHJcbn1cclxuLmNvdW50IHtcclxuICBtYXJnaW4tdG9wOjJyZW07XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcclxufVxyXG5cclxuLmpvaW57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJyaWdodC1yZWQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbG9yOiAjZjRmNmY4O1xyXG4gIGJvdHRvbTogMTElO1xyXG4gIGxlZnQ6NDclO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlcjogMTBweDtcclxuICBwYWRkaW5nOiAwLjVyZW0gM3JlbTtcclxuICBib3gtc2hhZG93OiAzcHggNnB4IDMxcHggI2ZmZjtcclxuICAmOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpkYXJrZW4oJGNvbG9yOiAjY2MwMDAwLCAkYW1vdW50OiAxMClcclxuICB9XHJcbn1cclxuXHJcbi8vIC5hdXRve1xyXG4vLyAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbi8vICAgZm9udC1zaXplOjJyZW07XHJcbi8vICAgY29sb3I6JGp1bWJvdHJvbi1iZztcclxuLy8gICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuLy8gICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuLy8gICBib3R0b206MjAlO1xyXG4vLyAgIGxlZnQ6MzUlO1xyXG4vLyB9XHJcblxyXG4ucGFzc3dvcmQtc3RyZW5ndGgtaW5kaWNhdG9yIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIHdpZHRoOiA1cHg7XHJcbiAgcGFkZGluZzogMCAxNXB4O1xyXG59XHJcblxyXG4ucGFzc3dvcmQtc3RyZW5ndGgtaW5kaWNhdG9yIHNwYW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDJweDtcclxuICB3aWR0aDogNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kOiAjZWJlZWYxO1xyXG59XHJcblxyXG4ucGFuZWwge1xyXG4gIGJvcmRlci1jb2xvcjogI2NmZDlENztcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTdweCByZ2JhKDAsMCwwLC4yKTtcclxufVxyXG5cclxuLnBhbmVsLWRlZmF1bHQgPiAucGFuZWwtaGVhZGluZyB7XHJcbiAgY29sb3I6ICM0NDQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjY2ZkOWRiO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogODUlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdHJhbnNpdGlvbjogMC4xcyBhbGw7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbn1cclxuXHJcbi5sYWJlbC1kZWZhdWx0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlN2VjO1xyXG4gIHRleHQtc2hhZG93OiAwIDFweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcclxuICBjb2xvcjogIzkwOTM5YTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTA5MzlhO1xyXG4gICAgY29sb3I6ICNmNGY2Zjg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAtMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIH1cclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwwLDAsLjI2KTtcclxufVxyXG5cclxuLm5hdmJhci1oZWFkZXIge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuXHJcbn1cclxuXHJcbi5uYXZiYXItYnJhbmQge1xyXG4gIHRyYW5zaXRpb246IDAuMjVzIGFsbDtcclxuICBwYWRkaW5nLXJpZ2h0OjMwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2IHtcclxuICBmbG9hdDogbGVmdDtcclxuICBtYXJnaW46IDA7XHJcblxyXG4gID4gbGkge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcblxyXG4gICAgPiBhIHtcclxuICAgICAgcGFkZGluZzogMTVweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4uYWxlcnQtbWF0ZXJpYWwge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBiYWNrZ3JvdW5kOiAjMzIzMjMyO1xyXG4gIGNvbG9yOiAjZjFmMWYxO1xyXG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XHJcbiAgcGFkZGluZzogMTNweCAyNHB4IDEycHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAuMjYpO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGN1cnNvcjogZGVmYXVsdDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAxMnB4O1xyXG4gIHJpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG4uYWxlcnQtZGlzbWlzc2FibGUgLmNsb3NlIHtcclxuICBsaW5lLWhlaWdodDogMTlweDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IC0xMXB4O1xyXG4gIGNvbG9yOiAjZWVmZjQxO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgb3BhY2l0eTogMTtcclxuICB0ZXh0LXNoYWRvdzogbm9uZTtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uc2lnbnVwLW9yLXNlcGFyYXRvciB7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgaHIge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkY2UwZTA7XHJcbiAgICBtYXJnaW46IC0xNnB4IGF1dG8gMTBweCBhdXRvO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcblxyXG4gIC50ZXh0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaGFzLWZlZWRiYWNrIC5mb3JtLWNvbnRyb2wtZmVlZGJhY2sge1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiA0NnB4O1xyXG4gIGhlaWdodDogNDZweDtcclxuICBsaW5lLWhlaWdodDogNDZweDtcclxuICBjb2xvcjogIzU1NTtcclxufVxyXG5cclxuLmhhcy1mZWVkYmFjayAuZm9ybS1jb250cm9sIHtcclxuICBwYWRkaW5nLWxlZnQ6IDQyLjVweDtcclxufVxyXG5cclxuW2NsYXNzXj0naW9uLSddIHtcclxuICBmb250LXNpemU6IDEuMmVtO1xyXG59XHJcblxyXG4uZmFkZS1yZXBlYXQubmctZW50ZXIge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gMC4ycztcclxuICBhbmltYXRpb246IGZhZGVJbiAwLjJzO1xyXG59XHJcblxyXG4uZmFkZVpvb20ubmctZW50ZXIge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZhZGVJbiwgem9vbUluO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzLCAwLjJzO1xyXG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW4sIHpvb21JbjtcclxuICBhbmltYXRpb24tZHVyYXRpb246IDAuNnMsIDAuMnM7XHJcbn1cclxuXHJcbi8vIC5mYWRlWm9vbUZhZGVEb3duLm5nLWVudGVyIHtcclxuLy8gICBAZXh0ZW5kIC5mYWRlWm9vbS5uZy1lbnRlcjtcclxuLy8gfVxyXG5cclxuLmZhZGVab29tRmFkZURvd24ubmctbGVhdmUge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlT3V0RG93biAwLjZzO1xyXG4gIGFuaW1hdGlvbjogZmFkZU91dERvd24gMC42cztcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIHpvb21JbiB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKC44LCAuOCwgLjgpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC44LCAuOCwgLjgpO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHpvb21JbiB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKC44LCAuOCwgLjgpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUzZCguOCwgLjgsIC44KTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguOCwgLjgsIC44KTtcclxuICB9XHJcblxyXG4gIDUwJSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxufVxyXG5cclxuLyogQUJPVVQgUEFHRSAqL1xyXG5cclxuaGVhZGVye1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIHotaW5kZXg6MTAwMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7XHJcbn1cclxuXHJcbi5zZWN0aW9uLWFib3V0e1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxNTA4OTgzNjM1OC00YzA2ZTNiNTBjODA/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE4OTAmcT04MCk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIG1pbi1oZWlnaHQ6IDgzdmg7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMTE2cHggMTQ2cHggMTMwcHggMzAwcHggYmxhY2s7XHJcbiAgJiAuYWJvdXQtYm94e1xyXG4gICAgZm9udC1zaXplOjEuMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzAwMDtcclxuICB9XHJcbn1cclxucCBzdHJvbmcsLmJveC10aXRsZSwgaDJ7XHJcbiAgY29sb3I6JGJyaWdodC1yZWQ7XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcclxufVxyXG5cclxuaDJ7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5hY2MtZmxleHtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBjb2xvcjokbGluay1jb2xvcjtcclxuICAuYWNjb3JkaW9uLC5hY2NvcmRpb24gPiAuY2FyZHtcclxuICAgIG1pbi13aWR0aDoxMjgwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiRuYXZiYXItZGVmYXVsdC1icmFuZC1ob3Zlci1iZztcclxuICAgIC8vIGJvcmRlcjoxcHggc29saWQgI2ZmZjtcclxuICAgIC5idG4tbGlua3tcclxuICAgICAgY29sb3I6JGJyaWdodC1yZWQ7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIEVSUk9SIFBBR0UgKi9cclxuXHJcblxyXG4uYm9hcmQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgbWFyZ2luOiAtMjU4cHggMCAwIC0yNTBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGZvbnQ6IDdyZW0gTW9ub3RvbiwgY3Vyc2l2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB0ZXh0LXNoYWRvdzogMCAwIDgwcHggJGJyaWdodC1yZWQsIDAgMCAzMHB4IEZpcmVCcmljaywgMCAwIDZweCBEYXJrUmVkO1xyXG4gIGNvbG9yOiAkYnJpZ2h0LXJlZDtcclxuICBidXR0b257XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiRqdW1ib3Ryb24tYmc7XHJcbiAgICBmb250LXNpemU6MnJlbTtcclxuICAgIHBhZGRpbmc6MjBweDtcclxuICAgIGJvcmRlcjowcHg7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDgwcHggI2ZmZmZmZiwgMCAwIDMwcHggIzAwODAwMCwgMCAwIDZweCAjMDAwMGZmO1xyXG4gICAgJjpob3ZlcntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJyaWdodC1yZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAjZXJyb3Ige1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDgwcHggI2ZmZmZmZiwgMCAwIDMwcHggIzAwODAwMCwgMCAwIDZweCAjMDAwMGZmO1xyXG4gIH1cclxuXHJcbiAgLnN1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIG1hcmdpbi10b3A6IDEuNWVtO1xyXG4gICAgZm9udC1mYW1pbHk6IE1vbm90b24sIGN1cnNpdmU7XHJcbiAgICB0ZXh0LXNoYWRvdzogNHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIH1cclxufVxyXG4vLyBidXR0b24ge1xyXG4vLyBcdGZvbnQtc2l6ZTogMjJweDtcclxuLy8gXHRtYXJnaW4tdG9wOiAxLjVlbTtcclxuLy8gXHRwYWRkaW5nOiAwLjVlbSAxZW07XHJcbi8vIFx0bGV0dGVyLXNwYWNpbmc6MXB4O1xyXG4vLyBcdGZvbnQtZmFtaWx5OiBNb25vdG9uLCBjdXJzaXZlO1xyXG4vLyBcdGNvbG9yOndoaXRlO1xyXG4vLyBcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4vLyBcdGJvcmRlcjowO1xyXG4vLyBcdGN1cnNvcjpwb2ludGVyO1xyXG4vLyBcdHotaW5kZXg6OTk5O1xyXG4vLyBcdGJvcmRlcjoycHggc29saWQgd2hpdGU7XHJcbi8vIFx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG4vLyBcdHRleHQtc2hhZG93OiA0cHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbi8vIFx0dHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2U7XHJcbi8vIFx0Jjpob3ZlciB7XHJcbi8vIFx0XHRvcGFjaXR5OjAuNztcclxuLy8gXHR9XHJcbi8vIFx0Jjpmb2N1cyB7XHJcbi8vIFx0XHRvdXRsaW5lOjA7XHJcbi8vIFx0fVxyXG4vLyB9XHJcblxyXG4uc25vdzF7XHJcbiAgLyogICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHA6Ly9wbmdpbWcuY29tL3VwbG9hZHMvcmFpbi9yYWluX1BORzEzNDY4LnBuZycpOyAqL1xyXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHA6Ly93d3cucG5nbWFydC5jb20vZmlsZXMvNS9Tbm93LVBORy1UcmFuc3BhcmVudC1JbWFnZS5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBvcGFjaXR5OjAuNTtcclxuICAgIGFuaW1hdGlvbjogYW5pbWF0ZTEgMTVzIGxpbmVhciBpbmZpbml0ZTtcclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgYW5pbWF0ZTEge1xyXG4gICAgMCV7IGJhY2tncm91bmQtcG9zaXRpb246IDBweCAwcHg7IH1cclxuICAgIDEwMCV7IGJhY2tncm91bmQtcG9zaXRpb246IC0xNTBweCA2NTBweDsgfVxyXG4gIH1cclxuXHJcbiAgLnNub3cze1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdodHRwOi8vd3d3LnBuZ21hcnQuY29tL2ZpbGVzLzUvU25vdy1QTkctVHJhbnNwYXJlbnQtSW1hZ2UucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgb3BhY2l0eTowLjU7XHJcbiAgICBhbmltYXRpb246IGFuaW1hdGUzIDE1cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIGFuaW1hdGUzIHtcclxuICAgIDAleyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTEwMHB4OyB9XHJcbiAgICAxMDAleyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggNzUwcHg7IH1cclxuICB9XHJcblxyXG4gIC5zbm93MntcclxuICAgIGJhY2tncm91bmQ6IHVybCgnaHR0cDovL3d3dy5wbmdtYXJ0LmNvbS9maWxlcy81L1Nub3ctUE5HLVRyYW5zcGFyZW50LUltYWdlLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG9wYWNpdHk6MC41O1xyXG4gICAgYW5pbWF0aW9uOiBhbmltYXRlMiAxNXMgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cclxuXHJcbiAgQGtleWZyYW1lcyBhbmltYXRlMiB7XHJcbiAgICAwJXsgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IDEwMHB4OyB9XHJcbiAgICAxMDAleyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzMDBweCA2NTBweDsgfVxyXG4gIH1cclxuXHJcbiIsIjo6bmctZGVlcCBib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgY29sb3I6ICNmNGY2Zjg7XG59XG5cbi5taW5pb24ge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTB2aDtcbiAgYmFja2dyb3VuZDogdXJsKGh0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL29yaWdpbmFsL0hpTk8zR3lwNjllNTlQYXg2YTBnMlZocjFTLmpwZyksIC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmZmIDAlLCAjMTgwNjA5IDM1JSk7XG4gIGJhY2tncm91bmQ6IHVybChodHRwczovL2ltYWdlLnRtZGIub3JnL3QvcC9vcmlnaW5hbC9IaU5PM0d5cDY5ZTU5UGF4NmEwZzJWaHIxUy5qcGcpLCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmZmYgMCUsICMxODA2MDkgMzUlKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciwgMTAwJSAxMDAlO1xuICBwYWRkaW5nLXRvcDogNTYuNDQlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDAsIC0xODkwcHggMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGx1bWlub3NpdHk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMXMgYmFja2dyb3VuZC1wb3NpdGlvbiBsaW5lYXI7XG4gIHRyYW5zaXRpb246IDFzIGJhY2tncm91bmQtcG9zaXRpb24gbGluZWFyO1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxMzBweCAxNTJweCBibGFjaztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDAwO1xufVxuLm1pbmlvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMCwgMCAwO1xufVxuXG5zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbn1cblxuZW0ge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uYWxwaGFiZXQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFscGhhYmV0IGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBjb2xvcjogI2Y0ZjZmODtcbn1cbi5hbHBoYWJldCBsaTpob3ZlciB7XG4gIGNvbG9yOiAjY2MwMDAwO1xufVxuXG4ubG9naW4tYmcge1xuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDQ5cHggNThweCBibGFjaztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9tdXNpY2FydC54Ym94bGl2ZS5jb20vNi9jZmEzNTk3Yi0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDkvNTA0L2ltYWdlLmpwZz93PTE5MjAmaD0xMDgwXCIpO1xufVxuXG4uYWRkIHtcbiAgdG9wOiAzNiU7XG4gIGhlaWdodDogNSU7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuYSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc2VyaWFsLWJnIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cDovL3d3dy5uZXd0LmNhdC9pbWdzL2Z1bGwvMi8yNDI0MF9zdHJhbmdlci10aGluZ3MtMi1kZXNrdG9wLXdhbGxwYXBlci5qcGdcIik7XG4gIGhlaWdodDogOTB2aDtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxMzBweCAxNTJweCBibGFjaztcbn1cblxuLmdvb2dsZS1zaWduIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjZmODtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgcGFkZGluZzogMXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uZ29vZ2xlLXNpZ24gaSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn1cbi5nb29nbGUtc2lnbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYzAwMDA7XG59XG4uZ29vZ2xlLXNpZ246aG92ZXIgaSB7XG4gIGNvbG9yOiAjZjRmNmY4O1xufVxuXG4uZ2VucmVzIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmdlbnJlcyBsaSB7XG4gIGZvbnQtc2l6ZTogMXJlbSAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5nZW5yZXMgbGk6YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAzcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XG59XG5cbi5qdW1ib3Ryb24ge1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbn1cblxuLm1lZGlhLW9iamVjdCB7XG4gIG1heC13aWR0aDogMjAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5lcGlzb2RlIHtcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMTExO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5lcGlzb2RlcyB7XG4gIG1hcmdpbi10b3A6IDJyZW0gIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAycmVtICFpbXBvcnRhbnQ7XG59XG5cbi5hbGVydC1pbmZvIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn1cblxuLm1lZGlhLWJvZHkge1xuICBtYXJnaW4tbGVmdDogMnJlbSAhaW1wb3J0YW50O1xufVxuXG4uYWxlcnQge1xuICBib3gtc2hhZG93OiAwIDBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuXG4uYWRkLWJnIHtcbiAgbWFyZ2luLXRvcDogOHJlbTtcbn1cblxuLmJ0biB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmJ0bi1sZyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmJ0biBbY2xhc3NePWlvbi1dIHtcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XG59XG5cbi5idG4tZmFjZWJvb2sge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcbiAgYm9yZGVyOiAxcHggc29saWQgIzM3NTM4ZDtcbn1cbi5idG4tZmFjZWJvb2s6aG92ZXIge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMxNGE3ZTtcbn1cblxuLmJ0bi1nb29nbGUtcGx1cyB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjM5O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGIzZjJjO1xufVxuLmJ0bi1nb29nbGUtcGx1czpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2YzNjI0O1xufVxuXG4uY2VudGVyLWZvcm0ge1xuICB3aWR0aDogMzMwcHg7XG4gIG1hcmdpbjogMTAlIGF1dG87XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY2Zjg7XG59XG4uY2VudGVyLWZvcm0gaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uaGVhZGluZ1RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnNlYXJjaCB7XG4gIGNvbG9yOiAjZjRmNmY4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBvdXRsaW5lOiBub25lO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG4uc2VhcmNoOmZvY3VzIHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlO1xufVxuLnNlYXJjaDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2Y0ZjZmODtcbn1cblxuLnB1bGwtcmlnaHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2MwMDAwO1xuICBtYXJnaW4tYm90dG9tOiAxMCU7XG59XG5cbi5jb3VudCB7XG4gIG1hcmdpbi10b3A6IDJyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmpvaW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2MwMDAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiAjZjRmNmY4O1xuICBib3R0b206IDExJTtcbiAgbGVmdDogNDclO1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlcjogMTBweDtcbiAgcGFkZGluZzogMC41cmVtIDNyZW07XG4gIGJveC1zaGFkb3c6IDNweCA2cHggMzFweCAjZmZmO1xufVxuLmpvaW46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTkwMDAwO1xufVxuXG4ucGFzc3dvcmQtc3RyZW5ndGgtaW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAxMHB4O1xuICB3aWR0aDogNXB4O1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cbi5wYXNzd29yZC1zdHJlbmd0aC1pbmRpY2F0b3Igc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICB3aWR0aDogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNlYmVlZjE7XG59XG5cbi5wYW5lbCB7XG4gIGJvcmRlci1jb2xvcjogI2NmZDlENztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3gtc2hhZG93OiAwIDhweCAxN3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnBhbmVsLWRlZmF1bHQgPiAucGFuZWwtaGVhZGluZyB7XG4gIGNvbG9yOiAjNDQ0O1xuICBib3JkZXItY29sb3I6ICNjZmQ5ZGI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDg1JTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbn1cblxuLmxhYmVsLCAuZ2VucmVzIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRyYW5zaXRpb246IDAuMXMgYWxsO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuLmxhYmVsLWRlZmF1bHQsIC5nZW5yZXMgbGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlN2VjO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIGNvbG9yOiAjOTA5MzlhO1xufVxuLmxhYmVsLWRlZmF1bHQ6aG92ZXIsIC5nZW5yZXMgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTA5MzlhO1xuICBjb2xvcjogI2Y0ZjZmODtcbiAgdGV4dC1zaGFkb3c6IDAgLTFweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLm5hdmJhciB7XG4gIGJvcmRlcjogMDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI2KTtcbn1cblxuLm5hdmJhci1oZWFkZXIge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4ubmF2YmFyLWJyYW5kIHtcbiAgdHJhbnNpdGlvbjogMC4yNXMgYWxsO1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuXG4ubmF2YmFyLW5hdiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDA7XG59XG4ubmF2YmFyLW5hdiA+IGxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ubmF2YmFyLW5hdiA+IGxpID4gYSB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5hbGVydC1tYXRlcmlhbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6ICMzMjMyMzI7XG4gIGNvbG9yOiAjZjFmMWYxO1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nOiAxM3B4IDI0cHggMTJweDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxMnB4O1xuICByaWdodDogMTJweDtcbn1cblxuLmFsZXJ0LWRpc21pc3NhYmxlIC5jbG9zZSB7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAtMTFweDtcbiAgY29sb3I6ICNlZWZmNDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBvcGFjaXR5OiAxO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnNpZ251cC1vci1zZXBhcmF0b3Ige1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBoZWlnaHQ6IDM0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNpZ251cC1vci1zZXBhcmF0b3IgaHIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RjZTBlMDtcbiAgbWFyZ2luOiAtMTZweCBhdXRvIDEwcHggYXV0bztcbiAgd2lkdGg6IDkwJTtcbn1cbi5zaWdudXAtb3Itc2VwYXJhdG9yIC50ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLmhhcy1mZWVkYmFjayAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNDZweDtcbiAgaGVpZ2h0OiA0NnB4O1xuICBsaW5lLWhlaWdodDogNDZweDtcbiAgY29sb3I6ICM1NTU7XG59XG5cbi5oYXMtZmVlZGJhY2sgLmZvcm0tY29udHJvbCB7XG4gIHBhZGRpbmctbGVmdDogNDIuNXB4O1xufVxuXG5bY2xhc3NePWlvbi1dIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLmZhZGUtcmVwZWF0Lm5nLWVudGVyIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiAwLjJzO1xuICBhbmltYXRpb246IGZhZGVJbiAwLjJzO1xufVxuXG4uZmFkZVpvb20ubmctZW50ZXIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW4sIHpvb21JbjtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNnMsIDAuMnM7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW4sIHpvb21JbjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzLCAwLjJzO1xufVxuXG4uZmFkZVpvb21GYWRlRG93bi5uZy1sZWF2ZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlT3V0RG93biAwLjZzO1xuICBhbmltYXRpb246IGZhZGVPdXREb3duIDAuNnM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyB6b29tSW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjgsIDAuOCwgMC44KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC44LCAwLjgsIDAuOCk7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHpvb21JbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuOCwgMC44LCAwLjgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlM2QoMC44LCAwLjgsIDAuOCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuOCwgMC44LCAwLjgpO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLyogQUJPVVQgUEFHRSAqL1xuaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuXG4uc2VjdGlvbi1hYm91dCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxNTA4OTgzNjM1OC00YzA2ZTNiNTBjODA/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTE4OTAmcT04MCk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG1pbi1oZWlnaHQ6IDgzdmg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDExNnB4IDE0NnB4IDEzMHB4IDMwMHB4IGJsYWNrO1xufVxuLnNlY3Rpb24tYWJvdXQgLmFib3V0LWJveCB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuXG5wIHN0cm9uZywgLmJveC10aXRsZSwgaDIge1xuICBjb2xvcjogI2NjMDAwMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmgyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWNjLWZsZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgY29sb3I6ICMwMDA7XG59XG4uYWNjLWZsZXggLmFjY29yZGlvbiwgLmFjYy1mbGV4IC5hY2NvcmRpb24gPiAuY2FyZCB7XG4gIG1pbi13aWR0aDogMTI4MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmFjYy1mbGV4IC5hY2NvcmRpb24gLmJ0bi1saW5rLCAuYWNjLWZsZXggLmFjY29yZGlvbiA+IC5jYXJkIC5idG4tbGluayB7XG4gIGNvbG9yOiAjY2MwMDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIEVSUk9SIFBBR0UgKi9cbi5ib2FyZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDUwMHB4O1xuICBtYXJnaW46IC0yNThweCAwIDAgLTI1MHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250OiA3cmVtIE1vbm90b24sIGN1cnNpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1zaGFkb3c6IDAgMCA4MHB4ICNjYzAwMDAsIDAgMCAzMHB4IEZpcmVCcmljaywgMCAwIDZweCBEYXJrUmVkO1xuICBjb2xvcjogI2NjMDAwMDtcbn1cbi5ib2FyZCBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmNGY2Zjg7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyOiAwcHg7XG4gIHRleHQtc2hhZG93OiAwIDAgODBweCAjZmZmZmZmLCAwIDAgMzBweCAjMDA4MDAwLCAwIDAgNnB4ICMwMDAwZmY7XG59XG4uYm9hcmQgYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjMDAwMDtcbn1cbi5ib2FyZCAjZXJyb3Ige1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1zaGFkb3c6IDAgMCA4MHB4ICNmZmZmZmYsIDAgMCAzMHB4ICMwMDgwMDAsIDAgMCA2cHggIzAwMDBmZjtcbn1cbi5ib2FyZCAuc3VidGl0bGUge1xuICBmb250LXNpemU6IDI1cHg7XG4gIG1hcmdpbi10b3A6IDEuNWVtO1xuICBmb250LWZhbWlseTogTW9ub3RvbiwgY3Vyc2l2ZTtcbiAgdGV4dC1zaGFkb3c6IDRweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnNub3cxIHtcbiAgLyogICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHA6Ly9wbmdpbWcuY29tL3VwbG9hZHMvcmFpbi9yYWluX1BORzEzNDY4LnBuZycpOyAqL1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwOi8vd3d3LnBuZ21hcnQuY29tL2ZpbGVzLzUvU25vdy1QTkctVHJhbnNwYXJlbnQtSW1hZ2UucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMC41O1xuICBhbmltYXRpb246IGFuaW1hdGUxIDE1cyBsaW5lYXIgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYW5pbWF0ZTEge1xuICAwJSB7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IDBweDtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTUwcHggNjUwcHg7XG4gIH1cbn1cbi5zbm93MyB7XG4gIGJhY2tncm91bmQ6IHVybChcImh0dHA6Ly93d3cucG5nbWFydC5jb20vZmlsZXMvNS9Tbm93LVBORy1UcmFuc3BhcmVudC1JbWFnZS5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAwLjU7XG4gIGFuaW1hdGlvbjogYW5pbWF0ZTMgMTVzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBhbmltYXRlMyB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTEwMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCA3NTBweDtcbiAgfVxufVxuLnNub3cyIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cDovL3d3dy5wbmdtYXJ0LmNvbS9maWxlcy81L1Nub3ctUE5HLVRyYW5zcGFyZW50LUltYWdlLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDAuNTtcbiAgYW5pbWF0aW9uOiBhbmltYXRlMiAxNXMgbGluZWFyIGluZmluaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGFuaW1hdGUyIHtcbiAgMCUge1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDBweCAxMDBweDtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAzMDBweCA2NTBweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_AuthService_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/AuthService/auth.service */ "./src/app/services/AuthService/auth.service.ts");
/* harmony import */ var _services_RoutingHistory_routingState_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/RoutingHistory/routingState.service */ "./src/app/services/RoutingHistory/routingState.service.ts");




let AppComponent = class AppComponent {
    constructor(authService, routingState) {
        this.authService = authService;
        this.user = null;
        this.title = 'Favourite Tracker';
        routingState.loadRouting();
        this.user = routingState.getUser();
    }
    logout() {
        this.authService.setUserEmail(null);
    }
    ngOnInit() {
        this.authService.email.subscribe((email) => {
            this.user = email;
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_AuthService_auth_service__WEBPACK_IMPORTED_MODULE_2__["Auth"] },
    { type: _services_RoutingHistory_routingState_service__WEBPACK_IMPORTED_MODULE_3__["RoutingState"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie */ "./node_modules/ngx-cookie/fesm2015/ngx-cookie.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _add_add_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add/add.module */ "./src/app/add/add.module.ts");
/* harmony import */ var _detail_detail_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./detail/detail.module */ "./src/app/detail/detail.module.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _signup_signup_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./signup/signup.module */ "./src/app/signup/signup.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _my_shows_my_shows_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./my-shows/my-shows.component */ "./src/app/my-shows/my-shows.component.ts");


















const google_oauth_client_id = '261560799158-eeeftlbv3utboenfukvfve10iqdscl32.apps.googleusercontent.com';
let config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["AuthServiceConfig"]([
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginProvider"](google_oauth_client_id)
    }
]);
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"],
            _error_error_component__WEBPACK_IMPORTED_MODULE_16__["ErrorComponent"],
            _my_shows_my_shows_component__WEBPACK_IMPORTED_MODULE_17__["MyShowsComponent"],
        ],
        imports: [
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _home_home_module__WEBPACK_IMPORTED_MODULE_9__["HomeModule"],
            _add_add_module__WEBPACK_IMPORTED_MODULE_10__["AddModule"],
            _detail_detail_module__WEBPACK_IMPORTED_MODULE_11__["DetailModule"],
            _login_login_module__WEBPACK_IMPORTED_MODULE_12__["LoginModule"],
            _signup_signup_module__WEBPACK_IMPORTED_MODULE_13__["SignupModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot([]),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["SocialLoginModule"].initialize(config)
        ],
        providers: [{ provide: ngx_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieService"], useClass: ngx_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieBackendService"] }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/detail/detail.component.ts":
/*!********************************************!*\
  !*** ./src/app/detail/detail.component.ts ***!
  \********************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_HomeService_home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/HomeService/home.service */ "./src/app/services/HomeService/home.service.ts");
/* harmony import */ var _services_AuthService_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/AuthService/auth.service */ "./src/app/services/AuthService/auth.service.ts");
/* harmony import */ var _services_RoutingHistory_routingState_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/RoutingHistory/routingState.service */ "./src/app/services/RoutingHistory/routingState.service.ts");






let DetailComponent = class DetailComponent {
    constructor(route, homeService, authService, routingState) {
        this.route = route;
        this.homeService = homeService;
        this.authService = authService;
        this.user = routingState.getUser();
        console.log('DETAIL_USER', this.user);
        this.isSubscribed = false;
        if (this.show) {
            this.isSubscribed = this.isSubscribers();
            console.log('IS', this.isSubscribed);
        }
    }
    isSubscribers() {
        console.log('USER_DETAIL', this.user);
        return this.show.subscribers.includes(this.user);
    }
    ;
    convertDate(dateString) {
        const date = new Date(dateString);
        return `${date.getUTCFullYear()}-${date.getMonth()}-${date.getDay()}`;
    }
    subscribe() {
        this.homeService.subscribed(this.show._id, this.user).subscribe(isSub => {
            this.isSubscribed = true;
            console.log('ISSUB', isSub);
        });
    }
    ;
    unsubscribe() {
        this.homeService.unsubscribed(this.show._id, this.user).subscribe(isUnSub => {
            this.isSubscribed = false;
        });
    }
    ;
    ngOnInit() {
        this.homeService.getCertainShow(this.route.snapshot.params['id']).subscribe(shows => {
            this.show = shows.body;
            console.log('Certain Show GET', this.show);
            this.nextEpisode = this.show.episodes.filter((episode) => {
                return episode.firstAired >= new Date().toISOString();
            })[0];
            console.log('NEXT_EPISODE', this.nextEpisode);
            console.log('Email maybe');
            this.isSubscribed = this.isSubscribers();
            console.log('IS', this.isSubscribed);
        });
        this.authService.email.subscribe((email) => {
            console.log('DETAIL_SUBSCRIBE', email);
            this.user = email;
            console.log('USER', email);
        });
    }
};
DetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_HomeService_home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"] },
    { type: _services_AuthService_auth_service__WEBPACK_IMPORTED_MODULE_4__["Auth"] },
    { type: _services_RoutingHistory_routingState_service__WEBPACK_IMPORTED_MODULE_5__["RoutingState"] }
];
DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css")).default]
    })
], DetailComponent);



/***/ }),

/***/ "./src/app/detail/detail.module.ts":
/*!*****************************************!*\
  !*** ./src/app/detail/detail.module.ts ***!
  \*****************************************/
/*! exports provided: DetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailModule", function() { return DetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detail.component */ "./src/app/detail/detail.component.ts");








let DetailModule = class DetailModule {
};
DetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [
            _detail_component__WEBPACK_IMPORTED_MODULE_7__["DetailComponent"]
        ],
        imports: [
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
        ],
        providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],],
        bootstrap: [_detail_component__WEBPACK_IMPORTED_MODULE_7__["DetailComponent"]]
    })
], DetailModule);



/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ErrorComponent = class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
};
ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-error',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css")).default]
    })
], ErrorComponent);



/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_HomeService_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/HomeService/home.service */ "./src/app/services/HomeService/home.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_AuthService_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/AuthService/auth.service */ "./src/app/services/AuthService/auth.service.ts");
/* harmony import */ var _services_RoutingHistory_routingState_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/RoutingHistory/routingState.service */ "./src/app/services/RoutingHistory/routingState.service.ts");






// const mongoose = require('mongoose');
// const showSchema = require('../../../server/models/Show');
// var Show = mongoose.model('Show', showSchema);
let HomeComponent = class HomeComponent {
    constructor(homeService, router, authService, routingState) {
        this.homeService = homeService;
        this.router = router;
        this.authService = authService;
        this.alphabet = ['0-9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
            'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
            'Y', 'Z'];
        this.genres = ['Action', 'Adventure', 'Animation', 'Children', 'Comedy',
            'Crime', 'Documentary', 'Drama', 'Family', 'Fantasy', 'Food',
            'Home and Garden', 'Horror', 'Mini-Series', 'Mystery', 'News', 'Reality',
            'Romance', 'Sci-Fi', 'Sport', 'Suspense', 'Talk Show', 'Thriller',
            'Travel'];
        this.headingTitle = 'See today';
        this.user = routingState.getUser();
        // console.log('lalalal');
        // this.user = 'false';
        // this.authService.email.subscribe((email:string)=>{
        //   this.user = 'true';
        //   console.log('VVVV',this.user);
        // });
    }
    filterByGenre(genre) {
        this.homeService.getAllPosts({ genre: genre }).subscribe(shows => {
            this.shows = shows.body;
            console.log('SHOWSGET', this.shows);
        });
        // this.shows = Show.query({ genre: genre });
        this.headingTitle = genre;
    }
    ;
    filterByAlphabet(char) {
        this.homeService.getAllPosts({ alphabet: char }).subscribe(shows => {
            this.shows = shows.body;
            console.log('SHOWSGET', this.shows);
        });
        this.headingTitle = char;
    }
    ;
    ngOnInit() {
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        this.homeService.getAllPosts({ day: days[new Date().getDay()] }).subscribe(shows => {
            this.shows = shows.body;
            console.log(days[new Date().getDay()]);
            console.log('SHOWSGET', this.shows);
        });
        // this.filterByGenre('action');
        // console.log(this.shows);
        // console.log(this.homeService.getAllPosts());
        console.log('LDKDKKDKKDK', this.router);
        // this.homeService.getAllPosts().subscribe(shows => {
        //   // this.shows = {...shows.body};
        //   console.log('SHOWS',shows);
        // });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _services_HomeService_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services_AuthService_auth_service__WEBPACK_IMPORTED_MODULE_4__["Auth"] },
    { type: _services_RoutingHistory_routingState_service__WEBPACK_IMPORTED_MODULE_5__["RoutingState"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");








let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [
            _home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        ],
        imports: [
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]
        ],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["CUSTOM_ELEMENTS_SCHEMA"]
        ],
        providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],],
        bootstrap: [_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_AuthService_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/AuthService/auth.service */ "./src/app/services/AuthService/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");
/* harmony import */ var _services_RoutingHistory_routingState_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/RoutingHistory/routingState.service */ "./src/app/services/RoutingHistory/routingState.service.ts");







let LoginComponent = class LoginComponent {
    constructor(authService, _socioAuthServ, router, route, routingState) {
        this.authService = authService;
        this._socioAuthServ = _socioAuthServ;
        this.router = router;
        this.route = route;
        this.routingState = routingState;
        this.user = null;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            "password": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("password"),
            "email": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("email"),
        });
    }
    singInGoogle(platform) {
        platform = angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["GoogleLoginProvider"].PROVIDER_ID;
        this._socioAuthServ.signIn(platform).then((response) => {
            console.log(platform + " logged in user data is= ", response);
            this.user = response;
            this.email = response.email;
            this.authService.login({ email: response.email, password: '' });
            this.authService.setUserEmail(response.email);
            this.router.navigate([`${this.previousRoute}`]);
        }, reject => {
            console.log(reject);
        });
    }
    login() {
        this.authService.login({
            email: this.email,
            password: this.password
        }).subscribe((user) => {
            console.log(user);
            this.authService.setUserEmail(this.email);
            this.router.navigate([`${this.previousRoute}`]);
            console.log('ROUTER', this.returnUrl);
        });
    }
    logout() {
        this.authService.setUserEmail(null);
    }
    ngOnInit() {
        this.authService.email.subscribe((email) => {
            this.email = email;
            this.returnUrl = '/Home';
            console.log(this.route);
            console.log(this.router);
            this.previousRoute = this.routingState.getPreviousUrl();
            console.log('PREVIOUSE', this.routingState.getPreviousUrl());
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _services_AuthService_auth_service__WEBPACK_IMPORTED_MODULE_3__["Auth"] },
    { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_RoutingHistory_routingState_service__WEBPACK_IMPORTED_MODULE_6__["RoutingState"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");









const google_oauth_client_id = '261560799158-eeeftlbv3utboenfukvfve10iqdscl32.apps.googleusercontent.com';
let config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["AuthServiceConfig"]([
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["GoogleLoginProvider"](google_oauth_client_id)
    }
]);
let LoginModule = class LoginModule {
};
LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [
            _login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
        ],
        imports: [
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["SocialLoginModule"].initialize(config)
        ],
        providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
        bootstrap: [_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]]
    })
], LoginModule);



/***/ }),

/***/ "./src/app/my-shows/my-shows.component.scss":
/*!**************************************************!*\
  !*** ./src/app/my-shows/my-shows.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".film {\n  margin-top: -5rem;\n  text-align: center;\n}\n\n.show-list {\n  margin-top: 5rem;\n}\n\na {\n  color: #fff;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktc2hvd3MvRDpcXGNvdXJzZVdvcmtcXFNlcmlhbHNUcmFja2VyXFxzZXJpYWxzVHJhY2tlci9zcmNcXGFwcFxcbXktc2hvd3NcXG15LXNob3dzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9teS1zaG93cy9teS1zaG93cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDQTtFQUNFLGdCQUFBO0FDRUY7O0FEQUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL215LXNob3dzL215LXNob3dzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbG0ge1xyXG4gIG1hcmdpbi10b3A6LTVyZW07XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuLnNob3ctbGlzdCB7XHJcbiAgbWFyZ2luLXRvcDo1cmVtO1xyXG59XHJcbmF7XHJcbiAgY29sb3I6I2ZmZjtcclxuICBmb250LXdlaWdodDo3MDA7XHJcbn1cclxuIiwiLmZpbG0ge1xuICBtYXJnaW4tdG9wOiAtNXJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2hvdy1saXN0IHtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbn1cblxuYSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNzAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/my-shows/my-shows.component.ts":
/*!************************************************!*\
  !*** ./src/app/my-shows/my-shows.component.ts ***!
  \************************************************/
/*! exports provided: MyShowsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyShowsComponent", function() { return MyShowsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_RoutingHistory_routingState_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/RoutingHistory/routingState.service */ "./src/app/services/RoutingHistory/routingState.service.ts");
/* harmony import */ var _services_HomeService_home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/HomeService/home.service */ "./src/app/services/HomeService/home.service.ts");




let MyShowsComponent = class MyShowsComponent {
    constructor(routingState, homeService) {
        this.homeService = homeService;
        this.shows = [];
        this.user = routingState.getUser();
    }
    ngOnInit() {
        let usersFilms = [];
        this.homeService.getUsersShows({ user: this.user }).subscribe(show => {
            usersFilms = show.body;
            console.log('USERS_SHOWS', usersFilms);
            usersFilms.map(item => {
                const s = this;
                console.log(s);
                this.homeService.getCertainShow(item).subscribe(sho => {
                    console.log(s.shows);
                    s.shows.push(sho.body);
                    console.log('MYYYYYYYYYYYYYY', this.shows);
                });
            });
        });
    }
};
MyShowsComponent.ctorParameters = () => [
    { type: _services_RoutingHistory_routingState_service__WEBPACK_IMPORTED_MODULE_2__["RoutingState"] },
    { type: _services_HomeService_home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"] }
];
MyShowsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-my-shows',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-shows.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-shows/my-shows.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-shows.component.scss */ "./src/app/my-shows/my-shows.component.scss")).default]
    })
], MyShowsComponent);



/***/ }),

/***/ "./src/app/services/AuthService/auth.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/AuthService/auth.service.ts ***!
  \******************************************************/
/*! exports provided: Auth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Auth", function() { return Auth; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let Auth = class Auth {
    constructor(http) {
        this.http = http;
        this.email = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.email.next('');
    }
    setUserEmail(email) {
        console.log('SET_USER_EMAIL', email);
        this.email.next(email);
    }
    SignInGoogle(params) {
        let httpParams = {
            profile: params
        };
        const config = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json') };
        console.log('SIGNINGOOGLE');
        return this.http.post('/auth/google', JSON.stringify(httpParams), config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    login(params) {
        const config = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json') };
        console.log('LOGIIN');
        return this.http.post('/auth/login', JSON.stringify(params), config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    Signup(params) {
        const config = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json') };
        console.log('SIGNUP');
        return this.http.post('/auth/signup', JSON.stringify(params), config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    errorHandler(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
    }
};
Auth.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
Auth = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], Auth);



/***/ }),

/***/ "./src/app/services/HomeService/home.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/HomeService/home.service.ts ***!
  \******************************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");

// import { HttpClient,HttpResponse } from '@angular/common/http';




let HomeService = class HomeService {
    constructor(http) {
        this.http = http;
        this.header = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json') };
    }
    // Get all posts from the API
    getAllPosts(param) {
        return this.http.get('/api/shows', {
            params: param,
            observe: 'response'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getCertainShow(id) {
        return this.http.get(`/api/shows/${id}`, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    errorHandler(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
    }
    postShows(show) {
        let httpParams = {
            showName: show
        };
        return this.http.post('/api/shows', JSON.stringify(httpParams), this.header)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    ;
    subscribed(showId, user) {
        let httpParams = {
            showId: showId,
            user: user
        };
        const config = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json') };
        return this.http.post('/api/subscribe', JSON.stringify(httpParams), config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    unsubscribed(showId, user) {
        let httpParams = {
            showId: showId,
            user: user
        };
        const config = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json') };
        return this.http.post('/api/unsubscribe', JSON.stringify(httpParams), config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
    getUsersShows(userEmail) {
        return this.http.get('/api/userShows', {
            params: userEmail,
            observe: 'response'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
    }
};
HomeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
HomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], HomeService);

// @Injectable({
//   providedIn: 'root'
// })
// export class HomeService{
//   constructor(private http: HttpClient) { }
//   Url = '/api/shows/:_id';
//   getConfigResponse(): Observable<HttpResponse<Config>> {
//     return this.http.get<Config>(
//       this.Url, { observe: 'response' });
//   }
// showConfigResponse() {
//   this.getConfigResponse()
//     // resp is of type `HttpResponse<Config>`
//     .subscribe(resp => {
//       // display its headers
//       const keys = resp.headers.keys();
//       this.headers = keys.map(key =>
//         `${key}: ${resp.headers.get(key)}`);
//       // access the body directly, which is typed as `Config`.
//       this.config = { ... resp.body };
//     });
// }
// }


/***/ }),

/***/ "./src/app/services/RoutingHistory/routingState.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/services/RoutingHistory/routingState.service.ts ***!
  \*****************************************************************/
/*! exports provided: RoutingState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingState", function() { return RoutingState; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _AuthService_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AuthService/auth.service */ "./src/app/services/AuthService/auth.service.ts");





let RoutingState = class RoutingState {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.history = [];
        this.authService.email.subscribe((email) => {
            this.user = email;
        });
    }
    loadRouting() {
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]))
            .subscribe(({ urlAfterRedirects }) => {
            this.history = [...this.history, urlAfterRedirects];
        });
    }
    getHistory() {
        return this.history;
    }
    getUser() {
        return this.user;
    }
    getPreviousUrl() {
        return this.history[this.history.length - 2] || '/';
    }
};
RoutingState.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _AuthService_auth_service__WEBPACK_IMPORTED_MODULE_4__["Auth"] }
];
RoutingState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RoutingState);



/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_AuthService_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/AuthService/auth.service */ "./src/app/services/AuthService/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_RoutingHistory_routingState_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/RoutingHistory/routingState.service */ "./src/app/services/RoutingHistory/routingState.service.ts");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");







let SignupComponent = class SignupComponent {
    constructor(authService, router, routingState, _socioAuthServ) {
        this.authService = authService;
        this.router = router;
        this.routingState = routingState;
        this._socioAuthServ = _socioAuthServ;
        this.passwordText = '';
        this.emailText = '';
        this.confirmPassword = '';
        this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            passwordText: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("signupForm", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30),
                this.PasswordValidator
            ])),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("signupForm", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30),
                this.PasswordValidator
            ])),
            emailText: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("signupForm", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
        });
    }
    PasswordValidator(control) {
        if (/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(control.value)) {
            return { "signupForm": true };
        }
        return null;
    }
    singInGoogle(platform) {
        platform = angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginProvider"].PROVIDER_ID;
        console.log('PLATFORM', platform);
        this._socioAuthServ.signIn(platform).then((response) => {
            console.log('RESPONSE', response);
            console.log(platform + " logged in user data is= ", response);
            this.authService.Signup({ email: response.email, password: '' });
            this.authService.setUserEmail(response.email);
            this.router.navigate([`${this.previousRoute}`]);
        }, reject => {
            console.log(reject);
        });
    }
    signup() {
        console.log('REGISTER');
        if (this.confirmPassword !== this.passwordText) {
            this.passwordText = '';
            this.confirmPassword = '';
            return;
        }
        this.authService.Signup({
            email: this.emailText,
            password: this.passwordText
        }).subscribe(show => {
            console.log(show);
            this.authService.setUserEmail(this.emailText);
            this.router.navigate([`${this.previousRoute}`]);
        });
    }
    // Method to sign in with google.
    userNameValidator(control) {
        if (control.value === "нет") {
            return { "showName": true };
        }
        return null;
    }
    // signup(){
    //   this.homeService.postShows(this.showName).subscribe(show=>{
    //     console.log(show);
    //   });
    //   console.log(this.myForm);
    // }
    ngOnInit() {
        // this.authService.email.subscribe((email:string)=>{
        //   this.emailText = email;
        // })
        this.previousRoute = this.routingState.getPreviousUrl();
    }
};
SignupComponent.ctorParameters = () => [
    { type: _services_AuthService_auth_service__WEBPACK_IMPORTED_MODULE_3__["Auth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _services_RoutingHistory_routingState_service__WEBPACK_IMPORTED_MODULE_5__["RoutingState"] },
    { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html")).default,
        styles: ["input.ng-touched.ng-invalid {border:solid red 2px;}\n  input.ng-touched.ng-valid {border:solid green 2px;}", tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/signup/signup.module.ts":
/*!*****************************************!*\
  !*** ./src/app/signup/signup.module.ts ***!
  \*****************************************/
/*! exports provided: SignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");
/* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./signup.component */ "./src/app/signup/signup.component.ts");









const google_oauth_client_id = '261560799158-eeeftlbv3utboenfukvfve10iqdscl32.apps.googleusercontent.com';
let config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["AuthServiceConfig"]([
    {
        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["GoogleLoginProvider"].PROVIDER_ID,
        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["GoogleLoginProvider"](google_oauth_client_id)
    }
]);
let SignupModule = class SignupModule {
};
SignupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        declarations: [
            _signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"]
        ],
        imports: [
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["SocialLoginModule"].initialize(config)
        ],
        providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
        bootstrap: [_signup_component__WEBPACK_IMPORTED_MODULE_8__["SignupComponent"]]
    })
], SignupModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\courseWork\SerialsTracker\serialsTracker\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map