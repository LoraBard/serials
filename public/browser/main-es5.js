(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<section class=\"section-about\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-8 col-sm-8\">\n                <div class=\"about-box\">\n                    <h2 class=\"box-title\">What is Show Tracker?</h2>\n                    <div class=\"tiny-border\"></div>\n                    <p>Show Tracker is a platform that does many things, but primarily keeps track of  <strong> TV shows and movies </strong> you watch.\n                      It integrates with your media center or home theater PC to enable scrobbling, so everything is automatic. Some people like to check in from their phone, so we enable that too.\n                        We also make it easy to find where to watch movies and TV shows on hundreds of streaming sources such as Netflix, Amazon, Hulu, and iTunes. Check out our complete feature list.\n                        Trakt is free to use and powers thousands of apps, most free to use! If you enjoy Trakt, please consider upgrading your account to VIP\n                        to help pay for servers and unlock some awesome VIP features like no ads, year in review, iCal feeds, advanced filtering, list cloning, and widgets.\n                         Stop reading and <strong> sign up now! </strong></p>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n<h2><strong>Frequently asked questions</strong></h2>\n<section class=\"acc-flex\">\n<div class=\"accordion\" id=\"accordionExample\">\n    <div class=\"card navbar-dark\">\n      <div class=\"card-header\" id=\"headingOne\">\n        <h2 class=\"mb-0\">\n          <button class=\"btn btn-link box-title\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"false\" aria-controls=\"collapseOne\">\n            <strong>How do I watch a TV show or movie?</strong>\n          </button>\n        </h2>\n      </div>\n\n      <div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\n        <div class=\"card-body\">\n            We don’t stream any TV shows or movies to watch on Trakt. However, we make it easy to find where to watch TV & movies on hundreds of\n            streaming services like Netflix, Amazon, Hulu, and iTunes in 38 countries.\n            Just click a Watch Now button or icon, choose your favorite service, and start watching.\n            Most media centers will also have streaming plugins that will scrobble what you’re watching to Trakt.\n            However, these are configured in your media center, and not on Trakt. Please reach out to the plugin developers directly if you have any questions about them.\n        </div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-header\" id=\"headingTwo\">\n        <h2 class=\"mb-0\">\n          <button class=\"btn btn-link collapsed box-title\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n            <strong>How do I add a missing TV show?</strong>\n          </button>\n        </h2>\n      </div>\n      <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionExample\">\n        <div class=\"card-body\">\n            We use a combination of TMDB and TVDB for TV show information. TMDB is used for the top level show info like title, year, genres, and country.\n             It is also used for high quality posters, fanart, and episode screenshots. TVDB is used for all season and episode info and as a fall back for info missing on TMDB.\n            <ol>\n              <li> Make sure the TV show exists on TMDB and TVDB with English information filled out.</li>\n              <li>On TMDB, make sure the correct TVDB ID is entered in the external IDs section.</li>\n              <li>On the Trakt website, click the Import TV Show link in the footer.</li>\n              <li>Type in the TVDB ID and click the Import button.</li>\n            </ol>\n        </div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-header\" id=\"headingThree\">\n        <h2 class=\"mb-0\">\n          <button class=\"btn btn-link collapsed box-title\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\n            <strong>How do I add a missing movie?</strong>\n          </button>\n        </h2>\n      </div>\n      <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionExample\">\n        <div class=\"card-body\">\n            We use TMDB for all movie information. It's free for anyone to sign up and edit info at TMDB.\n            <ol>\n              <li>Make sure the movie exists on TMDB with English information filled out.</li>\n              <li>On the Trakt website, click the Import Movie link in the footer.</li>\n              <li>Type in the TMDB ID and click the Import button.</li>\n            </ol>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add/add.component.html": 
        /*!******************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add/add.component.html ***!
          \******************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container add-bg\">\n  <p class=\"headingTitle\">Add TV Show</p>\n  <div class=\"panel panel-default\">\n    <div class=\"panel-body\">\n      <form [formGroup]=\"myForm\" novalidate method=\"post\" (ngSubmit)=\"addShow()\" name=\"addForm\">\n        <div class=\"form-group\">\n          <input class=\"form-control\" type=\"text\" name=\"showName\" [(ngModel)]=\"showName\" formControlName=\"showName\" placeholder=\"Enter TV show name\" required autofocus>\n            <div class=\"alert alert-danger\" *ngIf=\"myForm.controls['showName'].invalid && myForm.controls['showName'].touched\">\n                TV show name is required.\n            </div>\n          </div>\n        <button class=\"join add\" type=\"submit\" [disabled]=\"myForm.invalid\" >Add</button>\n      </form>\n    </div>\n  </div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n<header ng-controller=\"DropdownController as vm\">\n    <nav class=\"navbar navbar-expand-lg navbar-dark\">\n        <a class=\"navbar-brand\" [routerLink]=\"['/']\"><span class=\"glyphicon glyphicon-film\"></span>Favoute<strong> Tracker</strong></a>\n        <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggleNavbar = !toggleNavbar\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse  justify-content-between\" [ngbCollapse]=\"!toggleNavbar\">\n          <ul class=\"navbar-nav\">\n            <li class=\"nav-item active\" mdbWavesEffect>\n              <a class=\"nav-link waves-light\" [routerLink]=\"['/']\" >Home <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li  class=\"nav-item\" mdbWavesEffect>\n              <a class=\"nav-link waves-light\" [routerLink]=\"['/add']\" >Add</a>\n            </li>\n            <li  class=\"nav-item\" mdbWavesEffect>\n              <a class=\"nav-link waves-light\" [routerLink]=\"['/about']\" >About</a>\n            </li>\n            <li  class=\"nav-item\" *ngIf=\"user\" routerLink=\"/myShows\" mdbWavesEffect>\n              <a class=\"nav-link waves-light\" [routerLink]=\"['/myShows']\" >My shows</a>\n            </li>\n          </ul>\n          <ul class=\"nav md-auto navbar-nav navbar-right\">\n              <ul *ngIf=\"!user; then thenBlock else elseBlock\"></ul>\n              <ng-template #thenBlock>\n                  <li  class=\"nav-item\" mdbWavesEffect><a [routerLink]=\"['/login']\" class=\"nav-link waves-light\" mdbWavesEffect>Login</a></li>\n                  <li  class=\"nav-item\"><a [routerLink]=\"['/signup']\" class=\"nav-link waves-light\" mdbWavesEffect>Sign up</a></li>\n              </ng-template>\n              <ng-template #elseBlock>\n                  <li class=\"navbar-text\" class=\"nav-item\"  (bind)=\"user.email\" class=\"nav-link waves-light\" mdbWavesEffect></li>\n                  <li class=\"nav-item\" ><a (click)=\"logout()\" class=\"nav-link waves-light\" mdbWavesEffect>Logout</a></li>\n              </ng-template>\n          </ul>\n        </div>\n      </nav>\n  </header>\n  <router-outlet></router-outlet>\n\n\n  <!-- <app-home></app-home> -->\n\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content above * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * End of Placeholder * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n\n\n\n\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" *ngIf=\"show && show.genre.length && show.genre.length > 0\">\n  <div class=\"panel panel-default\">\n    <div class=\"panel-body\">\n      <div class=\"media\">\n        <div class=\"pull-left\">\n          <img class=\"media-object img-rounded\" [src]=\"show.poster || show.banner\" onerror=\"this.src='../../assets/placeholder.jpg';\">\n          <div class=\"text-center\" *ngIf=\"user\">\n            <div *ngIf = \"!isSubscribed && show.status === 'Continuing'\">\n              <button (click)=\"subscribe()\" class=\"btn btn-block btn-success\">\n                <span class=\"glyphicon glyphicon-plus\"></span> Subscribe\n              </button>\n            </div>\n            <div *ngIf = \"isSubscribed && show.status === 'Continuing'\">\n              <button (click)=\"unsubscribe()\" class=\"btn btn-block btn-danger\">\n                <span class=\"glyphicon glyphicon-minus\"></span> Unsubscribe\n              </button>\n            </div>\n          </div>\n          <div class=\"text-center\" *ngIf=\"!user && !isSubscribed && show.status === 'Continuing'\">\n            <a class=\"btn btn-block btn-primary\" [routerLink]=\"['/login']\">Login to Subscribe</a>\n          </div>\n        </div>\n        <div class=\"media-body\">\n          <h2 class=\"media-heading\">\n            {{show.name}}\n            <span class=\"pull-right text-danger\">{{show.rating}}</span>\n          </h2>\n          <h4 *ngIf=\"show.status === 'Continuing'\">\n            <span class=\"glyphicon glyphicon-calendar text-danger\"></span>\n            {{show.airsDayOfWeek}} <em>{{show.airsTime}}</em> on\n            {{show.network}}\n          </h4>\n          <h4 *ngIf=\"show.status === 'Ended'\">\n            Status: <span class=\"text-danger\">Ended</span>\n          </h4>\n          <p>{{show.overview}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading episodes\">\n      <span class=\"glyphicon glyphicon-play\"></span> Episodes\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"episode\" *ngFor=\"let episode of show.episodes\">\n        <h4>{{episode.episodeName}}\n        <img class=\"media-object img-rounded\" [src]=\"episode.filename\" onerror=\"this.src='../../assets/placeholder.jpg';\">\n        <p>Season {{episode.season}}, Episode {{episode.episodeNumber}}</p>\n        </h4>\n        <p>\n          <span class=\"glyphicon glyphicon-calendar\"></span>\n          {{episode.firstAired | date: 'short'}}\n        </p>\n        <p>{{episode.overview}}</p>\n      </div>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"board\">\n  <p id=\"error\">\n    error\n  </p>\n  <p id=\"code\">\n    404\n  </p>\n  <div class=\"subtitle\">Oops. Looks like you took a wrong turn.</div>\n<button>Go back</button>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html": 
        /*!********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
          \********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <p class=\"auto\">Autamatically track what you watch</p> -->\n<div class=\"minion\">\n  <button class=\"join\">Join us</button>\n</div>\n<div class=\"jumbotron\">\n    <div class=\"container\">\n      <ul class=\"alphabet\">\n        <li *ngFor=\"let char of alphabet;\">\n          <span (click)=\"filterByAlphabet(char)\">{{char}}</span>\n        </li>\n      </ul>\n      <ul class=\"genres\">\n        <li *ngFor=\"let genre of genres;\">\n          <span (click)=\"filterByGenre(genre)\">{{genre}}</span>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <div class=\"container\">\n      <p class=\"headingTitle\">{{headingTitle}}</p>\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n        <div class=\"pull-right\">\n          <input class=\"search\" type=\"text\" ng-model=\"query.name\" placeholder=\"Search...\" (keyup.enter)=\"filterByAlphabet($event.target.value)\">\n        </div>\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"row show-list\">\n          <div class=\"col-xs-4 col-md-3\" *ngFor=\"let show of shows\">\n            <a [routerLink]=\"['/shows/',show._id]\">\n              <img [src]=\"show.poster || show.banner\" onerror=\"this.src='../../assets/placeholder.jpg';\" class=\"img-rounded\" width=\"100%\"/><!---[attr.src]=\"{{show.poster}}\"-->\n            </a>\n            <div class=\"text-center\">\n              <a [routerLink]=\"['/shows/',show._id]\">{{show.name}}</a>\n              <p class=\"text-muted\">Episodes: {{show.episodes.length}}</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html": 
        /*!**********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
          \**********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<div class=\"container login-bg\">\n  <div class=\"row\">\n    <div class=\"center-form panel\">\n      <div class=\"panel-body\">\n        <h2 class=\"text-center\">Login</h2>\n\n        <form [formGroup]=\"loginForm\" method=\"post\" (submit)=\"login()\" name=\"loginForm\">\n          <div class=\"form-group\">\n            <input class=\"form-control input-lg\" type=\"text\" name=\"email\" [(ngModel)]=\"email\" placeholder=\"Email\" formControlName=\"email\" required autofocus>\n          </div>\n          <div class=\"form-group\">\n            <input class=\"form-control input-lg\" type=\"password\" name=\"password\" [(ngModel)]=\"password\" formControlName=\"password\" placeholder=\"Password\" required>\n          </div>\n\n          <button type=\"submit\" [disabled]=\"loginForm.invalid\" class=\"btn btn-lg btn-block btn-danger\">\n            Sign In\n          </button>\n          <button (click)=\"singInGoogle('Google');\" [hidden]=\"user\" class=\"google-sign\"><i class=\"fa fa-google\"></i></button><br /><br />\n          <button (click)=\"signOutGoogle();\" [hidden]=\"!user\"><i class=\"fa fa-google\"></i>Sign out</button><br /><br />\n          <!-- <div *ngIf=\"user\">\n              <img src=\"{{ user.photoUrl }}\">\n              <h4>{{ user.name }}</h4>\n              <p>{{ user.email }}</p>\n          </div> -->\n        </form>\n      </div>\n    </div>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-shows/my-shows.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-shows/my-shows.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <p class=\"headingTitle\">{{headingTitle}}</p>\n<div class=\"panel panel-default\">\n  <div class=\"panel-body\">\n    <div class=\"row show-list\">\n      <div class=\"col-sm\" *ngFor=\"let show of shows\">\n        <a [routerLink]=\"['/shows/',show._id]\">\n          <img [src]=\"show.poster || show.banner\" class=\"img-rounded\" width=\"100%\"/>\n          <h4 *ngIf=\"show.status === 'Continuing'\">\n            <span class=\"glyphicon glyphicon-calendar text-danger\"></span>\n            {{show.airsDayOfWeek}} <em>{{show.airsTime}}</em>\n          </h4>\n        </a>\n        <div class=\"text-center\">\n          <a [routerLink]=\"['/shows/',show._id]\">{{show.name}}</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container login-bg\">\n    <br/>\n    <div class=\"row\">\n      <div class=\"center-form panel\">\n        <form [formGroup]=\"signupForm\" novalidate method=\"post\" (ngSubmit)=\"signup()\" name=\"signupForm\">\n          <div class=\"panel-body\">\n            <h2 class=\"text-center\">Sign up</h2>\n            <div class=\"form-group\">\n              <input class=\"form-control input-lg\" type=\"email\" id=\"email\" name=\"email\" [(ngModel)]=\"emailText\" formControlName=\"emailText\" placeholder=\"Email\" required autofocus>\n\n              <div class=\"alert alert-danger\" *ngIf=\"signupForm.controls['emailText'].invalid && signupForm.controls['emailText'].touched\">\n                Email is required.\n            </div>\n            </div>\n\n            <div class=\"form-group\">\n              <input class=\"form-control input-lg\" type=\"password\" name=\"password\"\n              [(ngModel)]=\"passwordText\" formControlName=\"passwordText\" placeholder=\"Password\" required>\n\n              <div class=\"alert alert-danger\" *ngIf=\"signupForm.controls['passwordText'].invalid && signupForm.controls['passwordText'].touched\">\n                Password is required.\n            </div>\n              </div>\n\n            <div class=\"form-group\">\n              <input class=\"form-control input-lg\" type=\"password\"\n                     name=\"confirmPassword\" [(ngModel)]=\"confirmPassword\" formControlName=\"confirmPassword\"\n                     placeholder=\"Confirm Password\"\n                     required>\n\n              <div class=\"help-block text-danger my-special-animation\"\n                   *ngIf=\"signupForm.confirmPassword.$dirty\"\n                   ng-messages=\"signupForm.confirmPassword.$error\">\n                <div ng-message=\"required\">You must confirm password.</div>\n                <div ng-message=\"repeat\">Passwords do not match.</div>\n              </div>\n            </div>\n\n            <button type=\"submit\" [disabled]=\"signupForm.$invalid\"\n                    class=\"btn btn-lg btn-block btn-danger\">Create Account\n            </button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/about/about.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/about/about.component.ts ***!
          \******************************************/
        /*! exports provided: AboutComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function () { return AboutComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AboutComponent = /** @class */ (function () {
                function AboutComponent() {
                }
                AboutComponent.prototype.ngOnInit = function () {
                };
                return AboutComponent;
            }());
            AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-about',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css")).default]
                })
            ], AboutComponent);
            /***/ 
        }),
        /***/ "./src/app/add/add.component.ts": 
        /*!**************************************!*\
          !*** ./src/app/add/add.component.ts ***!
          \**************************************/
        /*! exports provided: AddComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function () { return AddComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _services_HomeService_home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/HomeService/home.service */ "./src/app/services/HomeService/home.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AddComponent = /** @class */ (function () {
                function AddComponent(homeService, router, renderer) {
                    this.homeService = homeService;
                    this.router = router;
                    this.renderer = renderer;
                    this.showName = '';
                    console.log('ROUTER ADD', this.router);
                    this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        "showName": new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("Show", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.userNameValidator])
                    });
                }
                AddComponent.prototype.userNameValidator = function (control) {
                    if (control.value === "нет") {
                        return { "showName": true };
                    }
                    return null;
                };
                AddComponent.prototype.addShow = function () {
                    this.homeService.postShows(this.showName).subscribe(function (show) {
                        console.log(show);
                    });
                    console.log(this.myForm);
                };
                AddComponent.prototype.ngOnInit = function () {
                    // this.renderer.setStyle(document.body, 'background-color', 'yellow');
                    // console.log('ROUTER ADD',this.router);
                };
                return AddComponent;
            }());
            AddComponent.ctorParameters = function () { return [
                { type: _services_HomeService_home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
            ]; };
            AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-add',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add/add.component.html")).default,
                    styles: ["input.ng-touched.ng-invalid {border:solid red 2px;}\n  input.ng-touched.ng-valid {border:solid green 2px;}", tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css")).default]
                })
            ], AddComponent);
            /***/ 
        }),
        /***/ "./src/app/add/add.module.ts": 
        /*!***********************************!*\
          !*** ./src/app/add/add.module.ts ***!
          \***********************************/
        /*! exports provided: AddModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddModule", function () { return AddModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add.component */ "./src/app/add/add.component.ts");
            var AddModule = /** @class */ (function () {
                function AddModule() {
                }
                return AddModule;
            }());
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
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
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
            var routes = [
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
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: true })],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.scss": 
        /*!************************************!*\
          !*** ./src/app/app.component.scss ***!
          \************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("::ng-deep body {\n  background-color: #000;\n  margin: 0;\n  padding-bottom: 20px;\n  color: #f4f6f8;\n}\n\n.minion {\n  width: 100%;\n  height: 90vh;\n  box-shadow: inset 0px 0px 130px 152px black;\n  background-image: url(\"http://avatars.mds.yandex.net/get-ott/200035/2a00000168eff6f4136b915c4555f04f597c/orig\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  justify-content: center;\n  display: flex;\n  flex-direction: row;\n}\n\nsection {\n  margin-top: 5rem;\n}\n\nem {\n  font-style: normal;\n  text-decoration: underline;\n}\n\n.alphabet {\n  cursor: pointer;\n  font-size: 22px;\n  text-align: center;\n}\n\n.alphabet li {\n  display: inline-block;\n  padding-left: 5px;\n  padding-right: 5px;\n  color: #f4f6f8;\n}\n\n.alphabet li:hover {\n  color: #cc0000;\n}\n\n.login-bg {\n  box-shadow: inset 0px 0px 49px 58px black;\n  background-image: url(\"https://musicart.xboxlive.com/6/cfa3597b-0000-0000-0000-000000000009/504/image.jpg?w=1920&h=1080\");\n}\n\n.add {\n  top: 36%;\n  height: 5%;\n}\n\n.google-sign {\n  margin-top: 2rem;\n  background-color: #f4f6f8;\n  border: 1px solid #ced4da;\n  padding: 1rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n\n.google-sign i {\n  font-size: 2rem;\n}\n\n.google-sign:hover {\n  background-color: #cc0000;\n}\n\n.google-sign:hover i {\n  color: #f4f6f8;\n}\n\n.genres {\n  cursor: pointer;\n}\n\n.genres li {\n  font-size: 1rem !important;\n  margin-right: 5px;\n}\n\n.genres li:active {\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.25);\n}\n\n.jumbotron {\n  margin-top: -20px;\n  border-bottom: 1px solid #000;\n  background-color: #000 !important;\n}\n\n.media-object {\n  max-width: 200px;\n  margin-bottom: 10px;\n}\n\n.episode {\n  border-left: 5px solid #111;\n  padding-left: 10px;\n}\n\n.episodes {\n  margin-top: 2rem !important;\n  padding: 10px !important;\n  margin-bottom: 2rem !important;\n}\n\n.alert-info {\n  margin-top: 2rem;\n}\n\n.media-body {\n  margin-left: 2rem !important;\n}\n\n.alert {\n  box-shadow: 0 0px 5px rgba(0, 0, 0, 0.3);\n}\n\n.add-bg {\n  margin-top: 8rem;\n}\n\n.btn {\n  border-radius: 2px;\n}\n\n.btn-lg {\n  font-size: 14px;\n}\n\n.btn [class^=ion-] {\n  margin-right: 6px;\n}\n\n.btn-facebook {\n  color: #fff;\n  background-color: #3b5998;\n  border: 1px solid #37538d;\n}\n\n.btn-facebook:hover {\n  color: #fff;\n  background-color: #314a7e;\n}\n\n.btn-google-plus {\n  color: #fff;\n  background-color: #dd4b39;\n  border: 1px solid #db3f2c;\n}\n\n.btn-google-plus:hover {\n  color: #fff;\n  background-color: #cf3624;\n}\n\n.center-form {\n  width: 330px;\n  margin: 10% auto;\n  padding: 2rem;\n  background-color: #f4f6f8;\n}\n\n.center-form input {\n  border-radius: 0;\n}\n\n.headingTitle {\n  font-weight: bold;\n  font-size: 1.5rem;\n  color: #fff;\n}\n\n.search {\n  color: #f4f6f8;\n  font-weight: 300;\n  font-size: 1.5em;\n  padding: 20px;\n  border: 0;\n  background-color: transparent;\n  outline: none;\n  -webkit-appearance: none;\n}\n\n.search:focus {\n  transition: all 0.4s ease;\n}\n\n.search::-webkit-input-placeholder {\n  color: #f4f6f8;\n}\n\n.search::-moz-placeholder {\n  color: #f4f6f8;\n}\n\n.search::-ms-input-placeholder {\n  color: #f4f6f8;\n}\n\n.search::placeholder {\n  color: #f4f6f8;\n}\n\n.pull-right {\n  background-color: #cc0000;\n  margin-bottom: 10%;\n}\n\n.join {\n  background-color: #cc0000;\n  position: absolute;\n  color: #f4f6f8;\n  bottom: 11%;\n  font-size: 1.5rem;\n  font-weight: bold;\n  border: 10px;\n  padding: 0.5rem 3rem;\n}\n\n.join:hover {\n  background-color: #990000;\n}\n\n.password-strength-indicator {\n  position: absolute;\n  right: 0;\n  top: 10px;\n  width: 5px;\n  padding: 0 15px;\n}\n\n.password-strength-indicator span {\n  display: block;\n  height: 5px;\n  margin-bottom: 2px;\n  width: 5px;\n  border-radius: 5px;\n  background: #ebeef1;\n}\n\n.panel {\n  border-color: #cfd9D7;\n  border-radius: 2px;\n  box-shadow: 0 8px 17px rgba(0, 0, 0, 0.2);\n}\n\n.panel-default > .panel-heading {\n  color: #444;\n  border-color: #cfd9db;\n  font-weight: bold;\n  font-size: 85%;\n  text-transform: uppercase;\n  background-color: #f6f6f6;\n}\n\n.label, .genres li {\n  display: inline-block;\n  margin-bottom: 5px;\n  padding: 4px 8px;\n  border: 0;\n  border-radius: 3px;\n  font-size: 12px;\n  transition: 0.1s all;\n  -webkit-font-smoothing: antialiased;\n}\n\n.label-default, .genres li {\n  background-color: #e4e7ec;\n  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.7);\n  color: #90939a;\n}\n\n.label-default:hover, .genres li:hover {\n  background-color: #90939a;\n  color: #f4f6f8;\n  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2);\n}\n\n.navbar {\n  border: 0;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n}\n\n.navbar-header {\n  float: left;\n  padding-left: 30px;\n}\n\n.navbar-brand {\n  transition: 0.25s all;\n  padding-right: 30px;\n}\n\n.navbar-nav {\n  float: left;\n  margin: 0;\n}\n\n.navbar-nav > li {\n  float: left;\n}\n\n.navbar-nav > li > a {\n  padding: 15px;\n}\n\n.alert-material {\n  font-family: \"Roboto\", sans-serif;\n  outline: none;\n  display: inline-block;\n  background: #323232;\n  color: #f1f1f1;\n  min-height: 48px;\n  padding: 13px 24px 12px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  z-index: 1;\n  border-radius: 2px;\n  cursor: default;\n  position: fixed;\n  bottom: 12px;\n  right: 12px;\n}\n\n.alert-dismissable .close {\n  line-height: 19px;\n  top: 0;\n  right: -11px;\n  color: #eeff41;\n  cursor: pointer;\n  float: right;\n  opacity: 1;\n  text-shadow: none;\n  font-weight: normal;\n}\n\n.signup-or-separator {\n  background: none;\n  height: 34px;\n  position: relative;\n  text-align: center;\n}\n\n.signup-or-separator hr {\n  border-top: 1px solid #dce0e0;\n  margin: -16px auto 10px auto;\n  width: 90%;\n}\n\n.signup-or-separator .text {\n  background-color: #fff;\n  display: inline-block;\n  margin: 0;\n  padding: 8px;\n}\n\n.has-feedback .form-control-feedback {\n  top: 0;\n  left: 0;\n  width: 46px;\n  height: 46px;\n  line-height: 46px;\n  color: #555;\n}\n\n.has-feedback .form-control {\n  padding-left: 42.5px;\n}\n\n[class^=ion-] {\n  font-size: 1.2em;\n}\n\n.fade-repeat.ng-enter {\n  -webkit-animation: fadeIn 0.2s;\n  animation: fadeIn 0.2s;\n}\n\n.fadeZoom.ng-enter {\n  -webkit-animation-name: fadeIn, zoomIn;\n  -webkit-animation-duration: 0.6s, 0.2s;\n  animation-name: fadeIn, zoomIn;\n  animation-duration: 0.6s, 0.2s;\n}\n\n.fadeZoomFadeDown.ng-leave {\n  -webkit-animation: fadeOutDown 0.6s;\n  animation: fadeOutDown 0.6s;\n}\n\n@-webkit-keyframes zoomIn {\n  0% {\n    opacity: 0;\n    transform: scale3d(0.8, 0.8, 0.8);\n  }\n  50% {\n    opacity: 1;\n  }\n}\n\n@keyframes zoomIn {\n  0% {\n    opacity: 0;\n    transform: scale3d(0.8, 0.8, 0.8);\n  }\n  50% {\n    opacity: 1;\n  }\n}\n\n/* ABOUT PAGE */\n\n.section-about {\n  background-image: url(https://images.unsplash.com/photo-1515089836358-4c06e3b50c80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1890&q=80);\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-height: 83vh;\n  box-shadow: inset 116px 146px 130px 300px black;\n}\n\n.section-about .about-box {\n  font-size: 1.2rem;\n}\n\np strong, .box-title, h2 {\n  color: #cc0000;\n  font-weight: bold;\n}\n\nh2 {\n  text-align: center;\n}\n\n.acc-flex {\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  color: #000;\n}\n\n.acc-flex .accordion, .acc-flex .accordion > .card {\n  min-width: 1280px;\n  margin-bottom: 20px;\n}\n\n.acc-flex .accordion .btn-link, .acc-flex .accordion > .card .btn-link {\n  color: #cc0000;\n  text-decoration: none;\n}\n\n/* ERROR PAGE */\n\n.board {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 150px;\n  width: 500px;\n  margin: -258px 0 0 -250px;\n  padding: 20px;\n  font: 7rem Monoton, cursive;\n  text-align: center;\n  text-transform: uppercase;\n  text-shadow: 0 0 80px #cc0000, 0 0 30px FireBrick, 0 0 6px DarkRed;\n  color: #cc0000;\n}\n\n.board button {\n  background-color: transparent;\n  color: #f4f6f8;\n  font-size: 2rem;\n  padding: 20px;\n  border: 0px;\n  text-shadow: 0 0 80px #ffffff, 0 0 30px #008000, 0 0 6px #0000ff;\n}\n\n.board button:hover {\n  background-color: #cc0000;\n}\n\n.board #error {\n  color: #fff;\n  text-shadow: 0 0 80px #ffffff, 0 0 30px #008000, 0 0 6px #0000ff;\n}\n\n.board .subtitle {\n  font-size: 25px;\n  margin-top: 1.5em;\n  font-family: Monoton, cursive;\n  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXGNvdXJzZVdvcmtcXFNlcmlhbHNUcmFja2VyXFxzZXJpYWxzVHJhY2tlci9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkhBO0VBQ0Usc0JBcERRO0VBcURSLFNBQUE7RUFDQSxvQkFBQTtFQUNBLGNBdkJhO0FDckdmOztBRCtIQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkNBQUE7RUFDQSwrR0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQzVIRjs7QUQ4SEE7RUFDRSxnQkFBQTtBQzNIRjs7QUQ4SEE7RUFDRSxrQkFBQTtFQUNBLDBCQUFBO0FDM0hGOztBRDhIQTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUMzSEY7O0FENkhFO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0F2RFc7QUNwRWY7O0FENkhJO0VBQ0UsY0F6Rk07QUNsQ1o7O0FEZ0lBO0VBQ0UseUNBQUE7RUFDQSx5SEFBQTtBQzdIRjs7QURnSUE7RUFDRSxRQUFBO0VBQ0EsVUFBQTtBQzdIRjs7QURnSUE7RUFDRSxnQkFBQTtFQUNBLHlCQTNFYTtFQTRFYix5QkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQzdIRjs7QUQ4SEU7RUFDRSxlQUFBO0FDNUhKOztBRDhIRTtFQUNFLHlCQXBIUTtBQ1JaOztBRDZISTtFQUNFLGNBdkZTO0FDcENmOztBRGdJQTtFQUNFLGVBQUE7QUM3SEY7O0FEK0hFO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtBQzdISjs7QURpSUk7RUFDRSwrQ0FBQTtBQy9ITjs7QURvSUE7RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUNBQUE7QUNqSUY7O0FEb0lBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQ2pJRjs7QURvSUE7RUFDRSwyQkFBQTtFQUNBLGtCQUFBO0FDaklGOztBRG9JQTtFQUNFLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSw4QkFBQTtBQ2pJRjs7QURtSUE7RUFDRSxnQkFBQTtBQ2hJRjs7QURrSUE7RUFDRSw0QkFBQTtBQy9IRjs7QURrSUE7RUFDRSx3Q0FBQTtBQy9IRjs7QURrSUE7RUFDRSxnQkFBQTtBQy9IRjs7QURtSUE7RUFDRSxrQkFBQTtBQ2hJRjs7QURtSUE7RUFDRSxlQUFBO0FDaElGOztBRG1JQTtFQUNFLGlCQUFBO0FDaElGOztBRG1JQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FDaElGOztBRGtJRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtBQ2hJSjs7QURvSUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQ2pJRjs7QURtSUU7RUFDRSxXQUFBO0VBQ0EseUJBQUE7QUNqSUo7O0FEcUlBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQXRMYTtBQ29EZjs7QURvSUU7RUFDRSxnQkFBQTtBQ2xJSjs7QURzSUE7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0E3TWtCO0FDMEVwQjs7QURzSUE7RUFDRSxjQXBNYTtFQXFNYixnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQ25JRjs7QURxSUU7RUFFRSx5QkFBQTtBQ25JSjs7QURxSUk7RUFDRSxjQWxOUztBQytFZjs7QURrSUk7RUFDRSxjQWxOUztBQytFZjs7QURrSUk7RUFDRSxjQWxOUztBQytFZjs7QURrSUk7RUFDRSxjQWxOUztBQytFZjs7QUR1SUE7RUFDRSx5QkF0UFU7RUF1UFYsa0JBQUE7QUNwSUY7O0FEdUlBO0VBQ0UseUJBM1BVO0VBNFBWLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDcElGOztBRHFJRTtFQUNFLHlCQUFBO0FDbklKOztBRGlKQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQzlJRjs7QURpSkE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUM5SUY7O0FEaUpBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0FDOUlGOztBRGlKQTtFQUNFLFdBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUM5SUY7O0FEaUpBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUNBQUE7QUM5SUY7O0FEaUpBO0VBQ0UseUJBQUE7RUFDQSw2Q0FBQTtFQUNBLGNBQUE7QUM5SUY7O0FEZ0pFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0Esd0NBQUE7QUM5SUo7O0FEa0pBO0VBQ0UsU0FBQTtFQUNBLDJDQUFBO0FDL0lGOztBRGtKQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQy9JRjs7QURtSkE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FDaEpGOztBRG1KQTtFQUNFLFdBQUE7RUFDQSxTQUFBO0FDaEpGOztBRGtKRTtFQUNFLFdBQUE7QUNoSko7O0FEa0pJO0VBQ0UsYUFBQTtBQ2hKTjs7QURzSkE7RUFDRSxpQ0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQ0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNuSkY7O0FEc0pBO0VBQ0UsaUJBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDbkpGOztBRHNKQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNuSkY7O0FEcUpFO0VBQ0UsNkJBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7QUNuSko7O0FEc0pFO0VBQ0Usc0JBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FDcEpKOztBRHdKQTtFQUNFLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNySkY7O0FEd0pBO0VBQ0Usb0JBQUE7QUNySkY7O0FEd0pBO0VBQ0UsZ0JBQUE7QUNySkY7O0FEd0pBO0VBQ0UsOEJBQUE7RUFDQSxzQkFBQTtBQ3JKRjs7QUR3SkE7RUFDRSxzQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtBQ3JKRjs7QUQ0SkE7RUFDRSxtQ0FBQTtFQUNBLDJCQUFBO0FDekpGOztBRDRKQTtFQUNFO0lBQ0UsVUFBQTtJQUVBLGlDQUFBO0VDekpGO0VENEpBO0lBQ0UsVUFBQTtFQzFKRjtBQUNGOztBRDZKQTtFQUNFO0lBQ0UsVUFBQTtJQUdBLGlDQUFBO0VDM0pGO0VEOEpBO0lBQ0UsVUFBQTtFQzVKRjtBQUNGOztBRCtKQSxlQUFBOztBQUVBO0VBQ0UsNkpBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0FBQTtBQzlKRjs7QUQrSkU7RUFDRSxpQkFBQTtBQzdKSjs7QURnS0E7RUFDRSxjQXBlVTtFQXFlVixpQkFBQTtBQzdKRjs7QURnS0E7RUFDRSxrQkFBQTtBQzdKRjs7QURnS0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBbGVXO0FDcVViOztBRDhKRTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUM1Sko7O0FEK0pJO0VBQ0UsY0F2Zk07RUF3Zk4scUJBQUE7QUM3Sk47O0FEa0tBLGVBQUE7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrRUFBQTtFQUNBLGNBNWdCVTtBQzJXWjs7QURrS0U7RUFDRSw2QkFBQTtFQUNBLGNBaGZXO0VBaWZYLGVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdFQUFBO0FDaEtKOztBRGlLSTtFQUNFLHlCQXJoQk07QUNzWFo7O0FEbUtFO0VBQ0UsV0FBQTtFQUNBLGdFQUFBO0FDaktKOztBRG9LRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkNBQUE7QUNsS0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi8vIC5uYXZiYXItZGVmYXVsdCB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzRmYjRjYztcclxuLy8gICBib3JkZXI6IG5vbmU7XHJcbi8vICAgYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwwLDAsLjE3NSk7XHJcbi8vICAgLmJ0bi1kZWZhdWx0IHtcclxuLy8gICAgIGNvbG9yOiAjNGZiNGNjO1xyXG4vLyAgICAgJjpob3ZlciB7XHJcbi8vICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkN2VlZjQ7XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyAgIC5kcm9wZG93bi1tZW51IHtcclxuLy8gICAgIGJvcmRlcjogbm9uZTtcclxuLy8gICAgIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsMCwwLC4xNzUpO1xyXG4vLyAgICAgbGk+YSB7XHJcbi8vICAgICAgICY6aG92ZXIge1xyXG4vLyAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdlZWY0O1xyXG4vLyAgICAgIH1cclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vICAgLm5hdmJhci1icmFuZCB7XHJcbi8vICAgICBjb2xvcjogI2ZmZjtcclxuLy8gICAgICY6aG92ZXIge1xyXG4vLyAgICAgICBjb2xvcjogIzAwMDtcclxuLy8gICAgIH1cclxuLy8gICAgICY6Zm9jdXMge1xyXG4vLyAgICAgICBjb2xvcjogI2Q3ZWVmNDtcclxuLy8gICAgIH1cclxuLy8gICB9XHJcbi8vICAgLm5hdmJhci1uYXY+bGk+YSB7XHJcbi8vICAgICBjb2xvcjogI2ZmZjtcclxuLy8gICB9XHJcbi8vICAgLm5hdmJhci1uYXY+LmFjdGl2ZT5hIHtcclxuLy8gICAgIGNvbG9yOiAjNGZiNGNjO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuLy8gICB9XHJcbi8vICAgLm5hdmJhci1uYXY+LmFjdGl2ZT5hOmZvY3VzIHtcclxuLy8gICAgIGNvbG9yOiAjNGZiNGNjO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuLy8gICB9XHJcbi8vICAgLm5hdmJhci1uYXY+LmFjdGl2ZT5hOmhvdmVyIHtcclxuLy8gICAgIGNvbG9yOiAjNGZiNGNjO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZWVmNDtcclxuLy8gICB9XHJcbi8vICAgLm5hdmJhci1uYXY+Lm9wZW4+YSB7XHJcbi8vICAgICBjb2xvcjogIzRmYjRjYztcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbi8vICAgfVxyXG4vLyAgIC5uYXZiYXItbmF2Pi5vcGVuPmE6Zm9jdXMge1xyXG4vLyAgICAgY29sb3I6ICM0ZmI0Y2M7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4vLyAgIH1cclxuLy8gICAubmF2YmFyLW5hdj4ub3Blbj5hOmhvdmVyIHtcclxuLy8gICAgIGNvbG9yOiAjNGZiNGNjO1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q3ZWVmNDtcclxuLy8gICB9XHJcbi8vICAgLm5hdmJhci10b2dnbGUge1xyXG4vLyAgICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xyXG4vLyAgICAgLmljb24tYmFyIHtcclxuLy8gICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuLy8gICAgIH1cclxuLy8gICAgICY6aG92ZXIge1xyXG4vLyAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdlZWY0O1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbi8vICAgLm5hdmJhciB7XHJcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4kYm9keS1iZzogIzAwMDtcclxuJGJyaWdodC1yZWQ6I2NjMDAwMDtcclxuXHJcbiRmb250LWZhbWlseS1iYXNlOiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuJGhlYWRpbmdzLWNvbG9yOiAjMTExO1xyXG5cclxuJGhlYWRpbmdzLWZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiRoZWFkaW5ncy1mb250LXdlaWdodDogYm9sZDtcclxuXHJcbiRicmFuZC1zdWNjZXNzOiAjMjJhZTVmO1xyXG4kYnJhbmQtcHJpbWFyeTogIzFkN2NmNDtcclxuJGJyYW5kLWRhbmdlcjogI2IzMDAxNTtcclxuJGJyYW5kLXdhcm5pbmc6ICNmZmQ2NmE7XHJcblxyXG4kdGV4dC1tdXRlZDogIzkwOTM5YTtcclxuJGxpbmstY29sb3I6ICMwMDA7XHJcblxyXG4kbmF2YmFyLWRlZmF1bHQtbGluay1hY3RpdmUtYmc6ICNmN2Y3Zjc7XHJcbiRuYXZiYXItZGVmYXVsdC1saW5rLWNvbG9yOiAjODQ4NDg0O1xyXG4kbmF2YmFyLWRlZmF1bHQtYmc6ICNmZmY7XHJcbiRuYXZiYXItZGVmYXVsdC1ib3JkZXI6ICNlM2U5ZWM7XHJcblxyXG4kbmF2YmFyLWRlZmF1bHQtYnJhbmQtY29sb3I6ICMzMzM7XHJcbiRuYXZiYXItZGVmYXVsdC1icmFuZC1ob3Zlci1jb2xvcjogI2ZmZTkzOTtcclxuJG5hdmJhci1kZWZhdWx0LWJyYW5kLWhvdmVyLWJnOiAjMzMzO1xyXG5cclxuJGJ0bi1zdWNjZXNzLWJnOiAkYnJhbmQtc3VjY2VzcztcclxuJGJ0bi1zdWNjZXNzLWJvcmRlcjogZGFya2VuKCRidG4tc3VjY2Vzcy1iZywgMyUpO1xyXG4kYnRuLXByaW1hcnktYmc6ICRicmFuZC1wcmltYXJ5O1xyXG4kYnRuLXByaW1hcnktYm9yZGVyOiBkYXJrZW4oJGJ0bi1wcmltYXJ5LWJnLCAzJSk7XHJcblxyXG4kanVtYm90cm9uLXBhZGRpbmc6IDE2cHg7XHJcbiRqdW1ib3Ryb24tYmc6ICNmNGY2Zjg7XHJcblxyXG4kYWxlcnQtYm9yZGVyLXJhZGl1czogMDtcclxuJGlucHV0LWJvcmRlci1yYWRpdXM6IDA7XHJcblxyXG4kYWxlcnQtc3VjY2Vzcy10ZXh0OiAjZmZmO1xyXG4kYWxlcnQtc3VjY2Vzcy1iZzogIzYwYzA2MDtcclxuJGFsZXJ0LXN1Y2Nlc3MtYm9yZGVyOiBkYXJrZW4oJGFsZXJ0LXN1Y2Nlc3MtYmcsIDMlKTtcclxuXHJcbiRhbGVydC1kYW5nZXItdGV4dDogI2ZmZjtcclxuJGFsZXJ0LWRhbmdlci1iZzogJGJyYW5kLWRhbmdlcjtcclxuJGFsZXJ0LWRhbmdlci1ib3JkZXI6IGRhcmtlbigkYWxlcnQtZGFuZ2VyLWJnLCAzJSk7XHJcblxyXG4kYWxlcnQtaW5mby1iZzogI2U1ZjdmZDtcclxuJGFsZXJ0LWluZm8tYm9yZGVyOiAjYmNmOGYzO1xyXG4kYWxlcnQtaW5mby10ZXh0OiAjMjU0ODRlO1xyXG5cclxuJGJ0bi1mb250LXdlaWdodDogYm9sZDtcclxuXHJcbjo6bmctZGVlcCBib2R5e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRib2R5LWJnO1xyXG4gIG1hcmdpbjowO1xyXG4gIHBhZGRpbmctYm90dG9tOjIwcHg7XHJcbiAgY29sb3I6JGp1bWJvdHJvbi1iZztcclxufVxyXG5cclxuLm1pbmlvbntcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDkwdmg7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAxMzBweCAxNTJweCBibGFjaztcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHA6Ly9hdmF0YXJzLm1kcy55YW5kZXgubmV0L2dldC1vdHQvMjAwMDM1LzJhMDAwMDAxNjhlZmY2ZjQxMzZiOTE1YzQ1NTVmMDRmNTk3Yy9vcmlnJyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbnNlY3Rpb257XHJcbiAgbWFyZ2luLXRvcDo1cmVtO1xyXG59XHJcblxyXG5lbSB7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4uYWxwaGFiZXQge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIGNvbG9yOiRqdW1ib3Ryb24tYmc7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGNvbG9yOiAkYnJpZ2h0LXJlZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5sb2dpbi1iZ3tcclxuICBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDQ5cHggNThweCBibGFjaztcclxuICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9tdXNpY2FydC54Ym94bGl2ZS5jb20vNi9jZmEzNTk3Yi0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDkvNTA0L2ltYWdlLmpwZz93PTE5MjAmaD0xMDgwJyk7XHJcbn1cclxuXHJcbi5hZGQge1xyXG4gIHRvcDozNiU7XHJcbiAgaGVpZ2h0OjUlO1xyXG59XHJcblxyXG4uZ29vZ2xlLXNpZ257XHJcbiAgbWFyZ2luLXRvcDoycmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6JGp1bWJvdHJvbi1iZztcclxuICBib3JkZXI6MXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgcGFkZGluZzoxcmVtO1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgaXtcclxuICAgIGZvbnQtc2l6ZToycmVtO1xyXG4gIH1cclxuICAmOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJyaWdodC1yZWQ7XHJcbiAgICBpe1xyXG4gICAgICBjb2xvcjokanVtYm90cm9uLWJnO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmdlbnJlcyB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICBsaSB7XHJcbiAgICBmb250LXNpemU6MXJlbSFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIEBleHRlbmQgLmxhYmVsO1xyXG4gICAgQGV4dGVuZCAubGFiZWwtZGVmYXVsdDtcclxuXHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgM3B4IDVweCByZ2JhKDAsIDAsIDAsIDAuMjUwKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5qdW1ib3Ryb24ge1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9keS1iZztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiRib2R5LWJnIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1lZGlhLW9iamVjdCB7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uZXBpc29kZSB7XHJcbiAgYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCAjMTExO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuLmVwaXNvZGVze1xyXG4gIG1hcmdpbi10b3A6IDJyZW0haW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDEwcHghaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDJyZW0haW1wb3J0YW50O1xyXG59XHJcbi5hbGVydC1pbmZve1xyXG4gIG1hcmdpbi10b3A6MnJlbTtcclxufVxyXG4ubWVkaWEtYm9keXtcclxuICBtYXJnaW4tbGVmdDoycmVtIWltcG9ydGFudDtcclxufVxyXG5cclxuLmFsZXJ0IHtcclxuICBib3gtc2hhZG93OiAwIDBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcblxyXG4uYWRkLWJne1xyXG4gIG1hcmdpbi10b3A6OHJlbTtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOnVybCgnaHR0cHM6Ly9vY2MtMC0xNzIzLTkyLjEubmZseHNvLm5ldC9kbm0vYXBpL3Y2L0U4dkRjX1c4Q0x2Ny15TVF1OEtNRUM3UnJyOC9BQUFBQlJ0MTFIZVAzT3hIN2wzd3VSclh3bHp5YW9uRlVvQ1VTNWpTcXgtUl9YZ09LYkpnQ05iZGh2ejhlN0Ezd0FaTlF3YzYwUm1UdTJ6czd4ek9SVUJNb2VUMmlDemUuanBnP3I9OThhJyk7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxufVxyXG5cclxuLmJ0bi1sZyB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uYnRuIFtjbGFzc149J2lvbi0nXSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbn1cclxuXHJcbi5idG4tZmFjZWJvb2sge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzYjU5OTg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCMzYjU5OTgsIDMlKTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigjM2I1OTk4LCA3JSk7XHJcbiAgfVxyXG59XHJcblxyXG4uYnRuLWdvb2dsZS1wbHVzIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGQ0YjM5O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtlbigjZGQ0YjM5LCAzJSk7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oI2RkNGIzOSwgNyUpO1xyXG4gIH1cclxufVxyXG5cclxuLmNlbnRlci1mb3JtIHtcclxuICB3aWR0aDogMzMwcHg7XHJcbiAgbWFyZ2luOiAxMCUgYXV0bztcclxuICBwYWRkaW5nOjJyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjokanVtYm90cm9uLWJnO1xyXG5cclxuICBpbnB1dCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLmhlYWRpbmdUaXRsZXtcclxuICBmb250LXdlaWdodDpib2xkO1xyXG4gIGZvbnQtc2l6ZToxLjVyZW07XHJcbiAgY29sb3I6JG5hdmJhci1kZWZhdWx0LWJnO1xyXG59XHJcblxyXG4uc2VhcmNoIHtcclxuICBjb2xvcjogJGp1bWJvdHJvbi1iZztcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2U7XHJcbiAgfVxyXG4gICAgJjo6cGxhY2Vob2xkZXJ7XHJcbiAgICAgIGNvbG9yOiRqdW1ib3Ryb24tYmc7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wdWxsLXJpZ2h0e1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRicmlnaHQtcmVkO1xyXG4gIG1hcmdpbi1ib3R0b206MTAlO1xyXG59XHJcblxyXG4uam9pbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnJpZ2h0LXJlZDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29sb3I6ICNmNGY2Zjg7XHJcbiAgYm90dG9tOiAxMSU7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAzcmVtO1xyXG4gICY6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmRhcmtlbigkY29sb3I6ICNjYzAwMDAsICRhbW91bnQ6IDEwKVxyXG4gIH1cclxufVxyXG5cclxuLy8gLmF1dG97XHJcbi8vICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuLy8gICBmb250LXNpemU6MnJlbTtcclxuLy8gICBjb2xvcjokanVtYm90cm9uLWJnO1xyXG4vLyAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4vLyAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4vLyAgIGJvdHRvbToyMCU7XHJcbi8vICAgbGVmdDozNSU7XHJcbi8vIH1cclxuXHJcbi5wYXNzd29yZC1zdHJlbmd0aC1pbmRpY2F0b3Ige1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDEwcHg7XHJcbiAgd2lkdGg6IDVweDtcclxuICBwYWRkaW5nOiAwIDE1cHg7XHJcbn1cclxuXHJcbi5wYXNzd29yZC1zdHJlbmd0aC1pbmRpY2F0b3Igc3BhbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gIHdpZHRoOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNlYmVlZjE7XHJcbn1cclxuXHJcbi5wYW5lbCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjY2ZkOUQ3O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBib3gtc2hhZG93OiAwIDhweCAxN3B4IHJnYmEoMCwwLDAsLjIpO1xyXG59XHJcblxyXG4ucGFuZWwtZGVmYXVsdCA+IC5wYW5lbC1oZWFkaW5nIHtcclxuICBjb2xvcjogIzQ0NDtcclxuICBib3JkZXItY29sb3I6ICNjZmQ5ZGI7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiA4NSU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgcGFkZGluZzogNHB4IDhweDtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0cmFuc2l0aW9uOiAwLjFzIGFsbDtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxufVxyXG5cclxuLmxhYmVsLWRlZmF1bHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGU3ZWM7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xyXG4gIGNvbG9yOiAjOTA5MzlhO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MDkzOWE7XHJcbiAgICBjb2xvcjogI2Y0ZjZmODtcclxuICAgIHRleHQtc2hhZG93OiAwIC0xcHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgfVxyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICBib3JkZXI6IDA7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLDAsMCwuMjYpO1xyXG59XHJcblxyXG4ubmF2YmFyLWhlYWRlciB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG5cclxufVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgdHJhbnNpdGlvbjogMC4yNXMgYWxsO1xyXG4gIHBhZGRpbmctcmlnaHQ6MzBweDtcclxufVxyXG5cclxuLm5hdmJhci1uYXYge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbjogMDtcclxuXHJcbiAgPiBsaSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuXHJcbiAgICA+IGEge1xyXG4gICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi5hbGVydC1tYXRlcmlhbCB7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQ6ICMzMjMyMzI7XHJcbiAgY29sb3I6ICNmMWYxZjE7XHJcbiAgbWluLWhlaWdodDogNDhweDtcclxuICBwYWRkaW5nOiAxM3B4IDI0cHggMTJweDtcclxuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIC4yNik7XHJcbiAgei1pbmRleDogMTtcclxuICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDEycHg7XHJcbiAgcmlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbi5hbGVydC1kaXNtaXNzYWJsZSAuY2xvc2Uge1xyXG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xyXG4gIHRvcDogMDtcclxuICByaWdodDogLTExcHg7XHJcbiAgY29sb3I6ICNlZWZmNDE7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRleHQtc2hhZG93OiBub25lO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuXHJcbi5zaWdudXAtb3Itc2VwYXJhdG9yIHtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGhlaWdodDogMzRweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBociB7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RjZTBlMDtcclxuICAgIG1hcmdpbjogLTE2cHggYXV0byAxMHB4IGF1dG87XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxuXHJcbiAgLnRleHQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDhweDtcclxuICB9XHJcbn1cclxuXHJcbi5oYXMtZmVlZGJhY2sgLmZvcm0tY29udHJvbC1mZWVkYmFjayB7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDQ2cHg7XHJcbiAgaGVpZ2h0OiA0NnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0NnB4O1xyXG4gIGNvbG9yOiAjNTU1O1xyXG59XHJcblxyXG4uaGFzLWZlZWRiYWNrIC5mb3JtLWNvbnRyb2wge1xyXG4gIHBhZGRpbmctbGVmdDogNDIuNXB4O1xyXG59XHJcblxyXG5bY2xhc3NePSdpb24tJ10ge1xyXG4gIGZvbnQtc2l6ZTogMS4yZW07XHJcbn1cclxuXHJcbi5mYWRlLXJlcGVhdC5uZy1lbnRlciB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiAwLjJzO1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDAuMnM7XHJcbn1cclxuXHJcbi5mYWRlWm9vbS5uZy1lbnRlciB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluLCB6b29tSW47XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNnMsIDAuMnM7XHJcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbiwgem9vbUluO1xyXG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMC42cywgMC4ycztcclxufVxyXG5cclxuLy8gLmZhZGVab29tRmFkZURvd24ubmctZW50ZXIge1xyXG4vLyAgIEBleHRlbmQgLmZhZGVab29tLm5nLWVudGVyO1xyXG4vLyB9XHJcblxyXG4uZmFkZVpvb21GYWRlRG93bi5uZy1sZWF2ZSB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVPdXREb3duIDAuNnM7XHJcbiAgYW5pbWF0aW9uOiBmYWRlT3V0RG93biAwLjZzO1xyXG59XHJcblxyXG5ALXdlYmtpdC1rZXlmcmFtZXMgem9vbUluIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjgsIC44LCAuOCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjgsIC44LCAuOCk7XHJcbiAgfVxyXG5cclxuICA1MCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgem9vbUluIHtcclxuICAwJSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoLjgsIC44LCAuOCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZTNkKC44LCAuOCwgLjgpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC44LCAuOCwgLjgpO1xyXG4gIH1cclxuXHJcbiAgNTAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBBQk9VVCBQQUdFICovXHJcblxyXG4uc2VjdGlvbi1hYm91dHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTUwODk4MzYzNTgtNGMwNmUzYjUwYzgwP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xODkwJnE9ODApO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBtaW4taGVpZ2h0OiA4M3ZoO1xyXG4gIGJveC1zaGFkb3c6IGluc2V0IDExNnB4IDE0NnB4IDEzMHB4IDMwMHB4IGJsYWNrO1xyXG4gICYgLmFib3V0LWJveHtcclxuICAgIGZvbnQtc2l6ZToxLjJyZW07XHJcbiAgfVxyXG59XHJcbnAgc3Ryb25nLC5ib3gtdGl0bGUsIGgye1xyXG4gIGNvbG9yOiRicmlnaHQtcmVkO1xyXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbn1cclxuXHJcbmgye1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcblxyXG4uYWNjLWZsZXh7XHJcbiAgZGlzcGxheTpmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgY29sb3I6JGxpbmstY29sb3I7XHJcbiAgLmFjY29yZGlvbiwuYWNjb3JkaW9uID4gLmNhcmR7XHJcbiAgICBtaW4td2lkdGg6MTI4MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbToyMHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjokbmF2YmFyLWRlZmF1bHQtYnJhbmQtaG92ZXItYmc7XHJcbiAgICAvLyBib3JkZXI6MXB4IHNvbGlkICNmZmY7XHJcbiAgICAuYnRuLWxpbmt7XHJcbiAgICAgIGNvbG9yOiRicmlnaHQtcmVkO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vKiBFUlJPUiBQQUdFICovXHJcblxyXG5cclxuLmJvYXJkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIG1hcmdpbjogLTI1OHB4IDAgMCAtMjUwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBmb250OiA3cmVtIE1vbm90b24sIGN1cnNpdmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgdGV4dC1zaGFkb3c6IDAgMCA4MHB4ICRicmlnaHQtcmVkLCAwIDAgMzBweCBGaXJlQnJpY2ssIDAgMCA2cHggRGFya1JlZDtcclxuICBjb2xvcjogJGJyaWdodC1yZWQ7XHJcbiAgYnV0dG9ue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjokanVtYm90cm9uLWJnO1xyXG4gICAgZm9udC1zaXplOjJyZW07XHJcbiAgICBwYWRkaW5nOjIwcHg7XHJcbiAgICBib3JkZXI6MHB4O1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA4MHB4ICNmZmZmZmYsIDAgMCAzMHB4ICMwMDgwMDAsIDAgMCA2cHggIzAwMDBmZjtcclxuICAgICY6aG92ZXJ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRicmlnaHQtcmVkO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgI2Vycm9yIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMCA4MHB4ICNmZmZmZmYsIDAgMCAzMHB4ICMwMDgwMDAsIDAgMCA2cHggIzAwMDBmZjtcclxuICB9XHJcblxyXG4gIC5zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjVlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBNb25vdG9uLCBjdXJzaXZlO1xyXG4gICAgdGV4dC1zaGFkb3c6IDRweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB9XHJcbn1cclxuLy8gYnV0dG9uIHtcclxuLy8gXHRmb250LXNpemU6IDIycHg7XHJcbi8vIFx0bWFyZ2luLXRvcDogMS41ZW07XHJcbi8vIFx0cGFkZGluZzogMC41ZW0gMWVtO1xyXG4vLyBcdGxldHRlci1zcGFjaW5nOjFweDtcclxuLy8gXHRmb250LWZhbWlseTogTW9ub3RvbiwgY3Vyc2l2ZTtcclxuLy8gXHRjb2xvcjp3aGl0ZTtcclxuLy8gXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuLy8gXHRib3JkZXI6MDtcclxuLy8gXHRjdXJzb3I6cG9pbnRlcjtcclxuLy8gXHR6LWluZGV4Ojk5OTtcclxuLy8gXHRib3JkZXI6MnB4IHNvbGlkIHdoaXRlO1xyXG4vLyBcdGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gXHR0ZXh0LXNoYWRvdzogNHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4vLyBcdHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlO1xyXG4vLyBcdCY6aG92ZXIge1xyXG4vLyBcdFx0b3BhY2l0eTowLjc7XHJcbi8vIFx0fVxyXG4vLyBcdCY6Zm9jdXMge1xyXG4vLyBcdFx0b3V0bGluZTowO1xyXG4vLyBcdH1cclxuLy8gfVxyXG5cclxuIiwiOjpuZy1kZWVwIGJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBjb2xvcjogI2Y0ZjZmODtcbn1cblxuLm1pbmlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDkwdmg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMTMwcHggMTUycHggYmxhY2s7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHA6Ly9hdmF0YXJzLm1kcy55YW5kZXgubmV0L2dldC1vdHQvMjAwMDM1LzJhMDAwMDAxNjhlZmY2ZjQxMzZiOTE1YzQ1NTVmMDRmNTk3Yy9vcmlnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDVyZW07XG59XG5cbmVtIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmFscGhhYmV0IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDIycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hbHBoYWJldCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgY29sb3I6ICNmNGY2Zjg7XG59XG4uYWxwaGFiZXQgbGk6aG92ZXIge1xuICBjb2xvcjogI2NjMDAwMDtcbn1cblxuLmxvZ2luLWJnIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA0OXB4IDU4cHggYmxhY2s7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vbXVzaWNhcnQueGJveGxpdmUuY29tLzYvY2ZhMzU5N2ItMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDA5LzUwNC9pbWFnZS5qcGc/dz0xOTIwJmg9MTA4MFwiKTtcbn1cblxuLmFkZCB7XG4gIHRvcDogMzYlO1xuICBoZWlnaHQ6IDUlO1xufVxuXG4uZ29vZ2xlLXNpZ24ge1xuICBtYXJnaW4tdG9wOiAycmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNmY4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICBwYWRkaW5nOiAxcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5nb29nbGUtc2lnbiBpIHtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuLmdvb2dsZS1zaWduOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjMDAwMDtcbn1cbi5nb29nbGUtc2lnbjpob3ZlciBpIHtcbiAgY29sb3I6ICNmNGY2Zjg7XG59XG5cbi5nZW5yZXMge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZ2VucmVzIGxpIHtcbiAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLmdlbnJlcyBsaTphY3RpdmUge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDNweCA1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcbn1cblxuLmp1bWJvdHJvbiB7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuXG4ubWVkaWEtb2JqZWN0IHtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmVwaXNvZGUge1xuICBib3JkZXItbGVmdDogNXB4IHNvbGlkICMxMTE7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuLmVwaXNvZGVzIHtcbiAgbWFyZ2luLXRvcDogMnJlbSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDJyZW0gIWltcG9ydGFudDtcbn1cblxuLmFsZXJ0LWluZm8ge1xuICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4ubWVkaWEtYm9keSB7XG4gIG1hcmdpbi1sZWZ0OiAycmVtICFpbXBvcnRhbnQ7XG59XG5cbi5hbGVydCB7XG4gIGJveC1zaGFkb3c6IDAgMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5cbi5hZGQtYmcge1xuICBtYXJnaW4tdG9wOiA4cmVtO1xufVxuXG4uYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xufVxuXG4uYnRuLWxnIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYnRuIFtjbGFzc149aW9uLV0ge1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cblxuLmJ0bi1mYWNlYm9vayB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I1OTk4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzc1MzhkO1xufVxuLmJ0bi1mYWNlYm9vazpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzE0YTdlO1xufVxuXG4uYnRuLWdvb2dsZS1wbHVzIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZDRiMzk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYjNmMmM7XG59XG4uYnRuLWdvb2dsZS1wbHVzOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZjM2MjQ7XG59XG5cbi5jZW50ZXItZm9ybSB7XG4gIHdpZHRoOiAzMzBweDtcbiAgbWFyZ2luOiAxMCUgYXV0bztcbiAgcGFkZGluZzogMnJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjZmODtcbn1cbi5jZW50ZXItZm9ybSBpbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG5cbi5oZWFkaW5nVGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uc2VhcmNoIHtcbiAgY29sb3I6ICNmNGY2Zjg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cbi5zZWFyY2g6Zm9jdXMge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG59XG4uc2VhcmNoOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjZjRmNmY4O1xufVxuXG4ucHVsbC1yaWdodCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYzAwMDA7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbn1cblxuLmpvaW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2MwMDAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiAjZjRmNmY4O1xuICBib3R0b206IDExJTtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXI6IDEwcHg7XG4gIHBhZGRpbmc6IDAuNXJlbSAzcmVtO1xufVxuLmpvaW46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTkwMDAwO1xufVxuXG4ucGFzc3dvcmQtc3RyZW5ndGgtaW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMDtcbiAgdG9wOiAxMHB4O1xuICB3aWR0aDogNXB4O1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cbi5wYXNzd29yZC1zdHJlbmd0aC1pbmRpY2F0b3Igc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICB3aWR0aDogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNlYmVlZjE7XG59XG5cbi5wYW5lbCB7XG4gIGJvcmRlci1jb2xvcjogI2NmZDlENztcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3gtc2hhZG93OiAwIDhweCAxN3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnBhbmVsLWRlZmF1bHQgPiAucGFuZWwtaGVhZGluZyB7XG4gIGNvbG9yOiAjNDQ0O1xuICBib3JkZXItY29sb3I6ICNjZmQ5ZGI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDg1JTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcbn1cblxuLmxhYmVsLCAuZ2VucmVzIGxpIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRyYW5zaXRpb246IDAuMXMgYWxsO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuLmxhYmVsLWRlZmF1bHQsIC5nZW5yZXMgbGkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlN2VjO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNyk7XG4gIGNvbG9yOiAjOTA5MzlhO1xufVxuLmxhYmVsLWRlZmF1bHQ6aG92ZXIsIC5nZW5yZXMgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTA5MzlhO1xuICBjb2xvcjogI2Y0ZjZmODtcbiAgdGV4dC1zaGFkb3c6IDAgLTFweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLm5hdmJhciB7XG4gIGJvcmRlcjogMDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI2KTtcbn1cblxuLm5hdmJhci1oZWFkZXIge1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xufVxuXG4ubmF2YmFyLWJyYW5kIHtcbiAgdHJhbnNpdGlvbjogMC4yNXMgYWxsO1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuXG4ubmF2YmFyLW5hdiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW46IDA7XG59XG4ubmF2YmFyLW5hdiA+IGxpIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ubmF2YmFyLW5hdiA+IGxpID4gYSB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5hbGVydC1tYXRlcmlhbCB7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBvdXRsaW5lOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQ6ICMzMjMyMzI7XG4gIGNvbG9yOiAjZjFmMWYxO1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuICBwYWRkaW5nOiAxM3B4IDI0cHggMTJweDtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgei1pbmRleDogMTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxMnB4O1xuICByaWdodDogMTJweDtcbn1cblxuLmFsZXJ0LWRpc21pc3NhYmxlIC5jbG9zZSB7XG4gIGxpbmUtaGVpZ2h0OiAxOXB4O1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAtMTFweDtcbiAgY29sb3I6ICNlZWZmNDE7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBvcGFjaXR5OiAxO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnNpZ251cC1vci1zZXBhcmF0b3Ige1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBoZWlnaHQ6IDM0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnNpZ251cC1vci1zZXBhcmF0b3IgaHIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RjZTBlMDtcbiAgbWFyZ2luOiAtMTZweCBhdXRvIDEwcHggYXV0bztcbiAgd2lkdGg6IDkwJTtcbn1cbi5zaWdudXAtb3Itc2VwYXJhdG9yIC50ZXh0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuLmhhcy1mZWVkYmFjayAuZm9ybS1jb250cm9sLWZlZWRiYWNrIHtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNDZweDtcbiAgaGVpZ2h0OiA0NnB4O1xuICBsaW5lLWhlaWdodDogNDZweDtcbiAgY29sb3I6ICM1NTU7XG59XG5cbi5oYXMtZmVlZGJhY2sgLmZvcm0tY29udHJvbCB7XG4gIHBhZGRpbmctbGVmdDogNDIuNXB4O1xufVxuXG5bY2xhc3NePWlvbi1dIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLmZhZGUtcmVwZWF0Lm5nLWVudGVyIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiAwLjJzO1xuICBhbmltYXRpb246IGZhZGVJbiAwLjJzO1xufVxuXG4uZmFkZVpvb20ubmctZW50ZXIge1xuICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmYWRlSW4sIHpvb21JbjtcbiAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuNnMsIDAuMnM7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW4sIHpvb21JbjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjZzLCAwLjJzO1xufVxuXG4uZmFkZVpvb21GYWRlRG93bi5uZy1sZWF2ZSB7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlT3V0RG93biAwLjZzO1xuICBhbmltYXRpb246IGZhZGVPdXREb3duIDAuNnM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyB6b29tSW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUzZCgwLjgsIDAuOCwgMC44KTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC44LCAwLjgsIDAuOCk7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHpvb21JbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZTNkKDAuOCwgMC44LCAwLjgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlM2QoMC44LCAwLjgsIDAuOCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDAuOCwgMC44LCAwLjgpO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuLyogQUJPVVQgUEFHRSAqL1xuLnNlY3Rpb24tYWJvdXQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MTUwODk4MzYzNTgtNGMwNmUzYjUwYzgwP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0xODkwJnE9ODApO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBtaW4taGVpZ2h0OiA4M3ZoO1xuICBib3gtc2hhZG93OiBpbnNldCAxMTZweCAxNDZweCAxMzBweCAzMDBweCBibGFjaztcbn1cbi5zZWN0aW9uLWFib3V0IC5hYm91dC1ib3gge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxucCBzdHJvbmcsIC5ib3gtdGl0bGUsIGgyIHtcbiAgY29sb3I6ICNjYzAwMDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5oMiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFjYy1mbGV4IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGNvbG9yOiAjMDAwO1xufVxuLmFjYy1mbGV4IC5hY2NvcmRpb24sIC5hY2MtZmxleCAuYWNjb3JkaW9uID4gLmNhcmQge1xuICBtaW4td2lkdGg6IDEyODBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5hY2MtZmxleCAuYWNjb3JkaW9uIC5idG4tbGluaywgLmFjYy1mbGV4IC5hY2NvcmRpb24gPiAuY2FyZCAuYnRuLWxpbmsge1xuICBjb2xvcjogI2NjMDAwMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiBFUlJPUiBQQUdFICovXG4uYm9hcmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgbWFyZ2luOiAtMjU4cHggMCAwIC0yNTBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgZm9udDogN3JlbSBNb25vdG9uLCBjdXJzaXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtc2hhZG93OiAwIDAgODBweCAjY2MwMDAwLCAwIDAgMzBweCBGaXJlQnJpY2ssIDAgMCA2cHggRGFya1JlZDtcbiAgY29sb3I6ICNjYzAwMDA7XG59XG4uYm9hcmQgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjZjRmNmY4O1xuICBmb250LXNpemU6IDJyZW07XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlcjogMHB4O1xuICB0ZXh0LXNoYWRvdzogMCAwIDgwcHggI2ZmZmZmZiwgMCAwIDMwcHggIzAwODAwMCwgMCAwIDZweCAjMDAwMGZmO1xufVxuLmJvYXJkIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYzAwMDA7XG59XG4uYm9hcmQgI2Vycm9yIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtc2hhZG93OiAwIDAgODBweCAjZmZmZmZmLCAwIDAgMzBweCAjMDA4MDAwLCAwIDAgNnB4ICMwMDAwZmY7XG59XG4uYm9hcmQgLnN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW4tdG9wOiAxLjVlbTtcbiAgZm9udC1mYW1pbHk6IE1vbm90b24sIGN1cnNpdmU7XG4gIHRleHQtc2hhZG93OiA0cHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_AuthService_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/AuthService/auth.service */ "./src/app/services/AuthService/auth.service.ts");
            /* harmony import */ var _services_RoutingHistory_routingState_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/RoutingHistory/routingState.service */ "./src/app/services/RoutingHistory/routingState.service.ts");
            var AppComponent = /** @class */ (function () {
                function AppComponent(authService, routingState) {
                    this.authService = authService;
                    this.user = null;
                    this.title = 'Favourite Tracker';
                    routingState.loadRouting();
                    this.user = routingState.getUser();
                }
                AppComponent.prototype.logout = function () {
                    this.authService.setUserEmail(null);
                };
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.authService.email.subscribe(function (email) {
                        _this.user = email;
                    });
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _services_AuthService_auth_service__WEBPACK_IMPORTED_MODULE_2__["Auth"] },
                { type: _services_RoutingHistory_routingState_service__WEBPACK_IMPORTED_MODULE_3__["RoutingState"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
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
            var google_oauth_client_id = '261560799158-eeeftlbv3utboenfukvfve10iqdscl32.apps.googleusercontent.com';
            var config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["AuthServiceConfig"]([
                {
                    id: angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginProvider"].PROVIDER_ID,
                    provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginProvider"](google_oauth_client_id)
                }
            ]);
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
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
            /***/ 
        }),
        /***/ "./src/app/detail/detail.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/detail/detail.component.ts ***!
          \********************************************/
        /*! exports provided: DetailComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function () { return DetailComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_HomeService_home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/HomeService/home.service */ "./src/app/services/HomeService/home.service.ts");
            /* harmony import */ var _services_AuthService_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/AuthService/auth.service */ "./src/app/services/AuthService/auth.service.ts");
            /* harmony import */ var _services_RoutingHistory_routingState_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/RoutingHistory/routingState.service */ "./src/app/services/RoutingHistory/routingState.service.ts");
            var DetailComponent = /** @class */ (function () {
                function DetailComponent(route, homeService, authService, routingState) {
                    this.route = route;
                    this.homeService = homeService;
                    this.authService = authService;
                    this.user = routingState.getUser();
                    console.log('DETAIL_USER', this.user);
                }
                // isSubscribed(){
                //   console.log('isSUBSCRIBED ',this.show.subscribers.includes(this.user));
                //   return this.show.subscribers.includes(this.user);
                // };
                DetailComponent.prototype.convertDate = function (dateString) {
                    var date = new Date(dateString);
                    return date.getUTCFullYear() + "-" + date.getMonth() + "-" + date.getDay();
                };
                DetailComponent.prototype.subscribe = function () {
                    var _this = this;
                    this.homeService.subscribed(this.show._id, this.user).subscribe(function (isSub) {
                        _this.isSubscribed = true;
                        console.log('ISSUB', isSub);
                    });
                };
                ;
                DetailComponent.prototype.unsubscribe = function () {
                    var _this = this;
                    this.homeService.unsubscribed(this.show._id, this.user).subscribe(function (isUnSub) {
                        _this.isSubscribed = false;
                        console.log('ISUNSUB', isUnSub);
                    });
                };
                ;
                DetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.homeService.getCertainShow(this.route.snapshot.params['id']).subscribe(function (shows) {
                        _this.show = shows.body;
                        console.log('Certain Show GET', _this.show);
                        _this.nextEpisode = _this.show.episodes.filter(function (episode) {
                            return episode.firstAired >= new Date().toISOString();
                        })[0];
                        console.log('NEXT_EPISODE', _this.nextEpisode);
                        console.log('Email maybe');
                        _this.isSubscribed = _this.show.subscribers.includes(_this.user);
                    });
                    this.authService.email.subscribe(function (email) {
                        console.log('DETAIL_SUBSCRIBE', email);
                        _this.user = email;
                        console.log('USER', email);
                    });
                };
                return DetailComponent;
            }());
            DetailComponent.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _services_HomeService_home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"] },
                { type: _services_AuthService_auth_service__WEBPACK_IMPORTED_MODULE_4__["Auth"] },
                { type: _services_RoutingHistory_routingState_service__WEBPACK_IMPORTED_MODULE_5__["RoutingState"] }
            ]; };
            DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-detail',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/detail/detail.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css")).default]
                })
            ], DetailComponent);
            /***/ 
        }),
        /***/ "./src/app/detail/detail.module.ts": 
        /*!*****************************************!*\
          !*** ./src/app/detail/detail.module.ts ***!
          \*****************************************/
        /*! exports provided: DetailModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailModule", function () { return DetailModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./detail.component */ "./src/app/detail/detail.component.ts");
            var DetailModule = /** @class */ (function () {
                function DetailModule() {
                }
                return DetailModule;
            }());
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
            /***/ 
        }),
        /***/ "./src/app/error/error.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/error/error.component.ts ***!
          \******************************************/
        /*! exports provided: ErrorComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () { return ErrorComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ErrorComponent = /** @class */ (function () {
                function ErrorComponent() {
                }
                ErrorComponent.prototype.ngOnInit = function () {
                };
                return ErrorComponent;
            }());
            ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-error',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/error/error.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css")).default]
                })
            ], ErrorComponent);
            /***/ 
        }),
        /***/ "./src/app/home/home.component.ts": 
        /*!****************************************!*\
          !*** ./src/app/home/home.component.ts ***!
          \****************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_HomeService_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/HomeService/home.service */ "./src/app/services/HomeService/home.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_AuthService_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/AuthService/auth.service */ "./src/app/services/AuthService/auth.service.ts");
            // const mongoose = require('mongoose');
            // const showSchema = require('../../../server/models/Show');
            // var Show = mongoose.model('Show', showSchema);
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(homeService, router, authService) {
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
                    // console.log('lalalal');
                    // this.user = 'false';
                    // this.authService.email.subscribe((email:string)=>{
                    //   this.user = 'true';
                    //   console.log('VVVV',this.user);
                    // });
                }
                HomeComponent.prototype.filterByGenre = function (genre) {
                    var _this = this;
                    this.homeService.getAllPosts({ genre: genre }).subscribe(function (shows) {
                        _this.shows = shows.body;
                        console.log('SHOWSGET', _this.shows);
                    });
                    // this.shows = Show.query({ genre: genre });
                    this.headingTitle = genre;
                };
                ;
                HomeComponent.prototype.filterByAlphabet = function (char) {
                    var _this = this;
                    this.homeService.getAllPosts({ alphabet: char }).subscribe(function (shows) {
                        _this.shows = shows.body;
                        console.log('SHOWSGET', _this.shows);
                    });
                    this.headingTitle = char;
                };
                ;
                HomeComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                    this.homeService.getAllPosts({ day: days[new Date().getDay()] }).subscribe(function (shows) {
                        _this.shows = shows.body;
                        console.log(days[new Date().getDay()]);
                        console.log('SHOWSGET', _this.shows);
                    });
                    // this.filterByGenre('action');
                    // console.log(this.shows);
                    // console.log(this.homeService.getAllPosts());
                    console.log('LDKDKKDKKDK', this.router);
                    // this.homeService.getAllPosts().subscribe(shows => {
                    //   // this.shows = {...shows.body};
                    //   console.log('SHOWS',shows);
                    // });
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: _services_HomeService_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _services_AuthService_auth_service__WEBPACK_IMPORTED_MODULE_4__["Auth"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/home/home.module.ts": 
        /*!*************************************!*\
          !*** ./src/app/home/home.module.ts ***!
          \*************************************/
        /*! exports provided: HomeModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function () { return HomeModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
            var HomeModule = /** @class */ (function () {
                function HomeModule() {
                }
                return HomeModule;
            }());
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
            /***/ 
        }),
        /***/ "./src/app/login/login.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/login/login.component.ts ***!
          \******************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _services_AuthService_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/AuthService/auth.service */ "./src/app/services/AuthService/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");
            /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
            /* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
            /* harmony import */ var _services_RoutingHistory_routingState_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/RoutingHistory/routingState.service */ "./src/app/services/RoutingHistory/routingState.service.ts");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(authService, _socioAuthServ, router, route, routingState) {
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
                LoginComponent.prototype.singInGoogle = function (platform) {
                    var _this = this;
                    platform = angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["GoogleLoginProvider"].PROVIDER_ID;
                    this._socioAuthServ.signIn(platform).then(function (response) {
                        console.log(platform + " logged in user data is= ", response);
                        _this.user = response;
                        _this.email = response.email;
                        _this.authService.SignInGoogle({ id: Object(lodash__WEBPACK_IMPORTED_MODULE_6__["uniqueId"])(), email: _this.user.email });
                        _this.authService.setUserEmail(response.email);
                        _this.router.navigate(["" + _this.previousRoute]);
                    });
                };
                // Method to log out.
                LoginComponent.prototype.signOutGoogle = function () {
                    this._socioAuthServ.signOut();
                    this.user = null;
                    this.authService.setUserEmail(null);
                    console.log('User signed out.');
                };
                LoginComponent.prototype.login = function () {
                    var _this = this;
                    this.authService.login({
                        email: this.email,
                        password: this.password
                    }).subscribe(function (user) {
                        console.log('user');
                        _this.authService.setUserEmail(_this.email);
                        _this.router.navigate(["" + _this.previousRoute]);
                        console.log('ROUTER', _this.returnUrl);
                    });
                };
                LoginComponent.prototype.logout = function () {
                    this.authService.setUserEmail(null);
                };
                LoginComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.authService.email.subscribe(function (email) {
                        _this.email = email;
                        _this.returnUrl = '/Home';
                        console.log(_this.route);
                        console.log(_this.router);
                        _this.previousRoute = _this.routingState.getPreviousUrl();
                        console.log('PREVIOUSE', _this.routingState.getPreviousUrl());
                    });
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _services_AuthService_auth_service__WEBPACK_IMPORTED_MODULE_3__["Auth"] },
                { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
                { type: _services_RoutingHistory_routingState_service__WEBPACK_IMPORTED_MODULE_7__["RoutingState"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/login/login.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/login/login.module.ts ***!
          \***************************************/
        /*! exports provided: LoginModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function () { return LoginModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularx-social-login */ "./node_modules/angularx-social-login/angularx-social-login.js");
            /* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
            var google_oauth_client_id = '261560799158-eeeftlbv3utboenfukvfve10iqdscl32.apps.googleusercontent.com';
            var config = new angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["AuthServiceConfig"]([
                {
                    id: angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["GoogleLoginProvider"].PROVIDER_ID,
                    provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_7__["GoogleLoginProvider"](google_oauth_client_id)
                }
            ]);
            var LoginModule = /** @class */ (function () {
                function LoginModule() {
                }
                return LoginModule;
            }());
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
            /***/ 
        }),
        /***/ "./src/app/my-shows/my-shows.component.scss": 
        /*!**************************************************!*\
          !*** ./src/app/my-shows/my-shows.component.scss ***!
          \**************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LXNob3dzL215LXNob3dzLmNvbXBvbmVudC5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/my-shows/my-shows.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/my-shows/my-shows.component.ts ***!
          \************************************************/
        /*! exports provided: MyShowsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyShowsComponent", function () { return MyShowsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_RoutingHistory_routingState_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/RoutingHistory/routingState.service */ "./src/app/services/RoutingHistory/routingState.service.ts");
            /* harmony import */ var _services_HomeService_home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/HomeService/home.service */ "./src/app/services/HomeService/home.service.ts");
            var MyShowsComponent = /** @class */ (function () {
                function MyShowsComponent(routingState, homeService) {
                    this.homeService = homeService;
                    this.user = routingState.getUser();
                }
                MyShowsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.homeService.getUsersShows({ user: this.user }).subscribe(function (shows) {
                        _this.shows = shows.body;
                        console.log('USERS_SHOWS', _this.shows);
                    });
                };
                return MyShowsComponent;
            }());
            MyShowsComponent.ctorParameters = function () { return [
                { type: _services_RoutingHistory_routingState_service__WEBPACK_IMPORTED_MODULE_2__["RoutingState"] },
                { type: _services_HomeService_home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"] }
            ]; };
            MyShowsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-my-shows',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-shows.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/my-shows/my-shows.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-shows.component.scss */ "./src/app/my-shows/my-shows.component.scss")).default]
                })
            ], MyShowsComponent);
            /***/ 
        }),
        /***/ "./src/app/services/AuthService/auth.service.ts": 
        /*!******************************************************!*\
          !*** ./src/app/services/AuthService/auth.service.ts ***!
          \******************************************************/
        /*! exports provided: Auth */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Auth", function () { return Auth; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var Auth = /** @class */ (function () {
                function Auth(http) {
                    this.http = http;
                    this.email = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
                    this.email.next('');
                }
                Auth.prototype.setUserEmail = function (email) {
                    console.log('SET_USER_EMAIL', email);
                    this.email.next(email);
                };
                Auth.prototype.SignInGoogle = function (params) {
                    var httpParams = {
                        profile: params
                    };
                    var config = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json') };
                    console.log('SIGNINGOOGLE');
                    return this.http.post('/auth/google', JSON.stringify(httpParams), config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
                };
                Auth.prototype.login = function (params) {
                    var config = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json') };
                    console.log('LOGIIN');
                    return this.http.post('/auth/login', JSON.stringify(params), config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
                };
                Auth.prototype.Signup = function (params) {
                    var config = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json') };
                    console.log('SIGNUP');
                    return this.http.post('/auth/signup', JSON.stringify(params), config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
                };
                Auth.prototype.errorHandler = function (error) {
                    var errorMessage = '';
                    if (error.error instanceof ErrorEvent) {
                        // Get client-side error
                        errorMessage = error.error.message;
                    }
                    else {
                        // Get server-side error
                        errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
                    }
                    console.log(errorMessage);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(errorMessage);
                };
                return Auth;
            }());
            Auth.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            Auth = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], Auth);
            /***/ 
        }),
        /***/ "./src/app/services/HomeService/home.service.ts": 
        /*!******************************************************!*\
          !*** ./src/app/services/HomeService/home.service.ts ***!
          \******************************************************/
        /*! exports provided: HomeService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function () { return HomeService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            // import { HttpClient,HttpResponse } from '@angular/common/http';
            var HomeService = /** @class */ (function () {
                function HomeService(http) {
                    this.http = http;
                    this.httpOptions = {
                        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                            'Content-Type': 'application/json'
                        })
                    };
                }
                // Get all posts from the API
                HomeService.prototype.getAllPosts = function (param) {
                    return this.http.get('/api/shows', {
                        params: param,
                        observe: 'response'
                    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
                };
                HomeService.prototype.getCertainShow = function (id) {
                    return this.http.get("/api/shows/" + id, { observe: 'response' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
                };
                HomeService.prototype.errorHandler = function (error) {
                    var errorMessage = '';
                    if (error.error instanceof ErrorEvent) {
                        // Get client-side error
                        errorMessage = error.error.message;
                    }
                    else {
                        // Get server-side error
                        errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
                    }
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
                };
                HomeService.prototype.postShows = function (show) {
                    var httpParams = {
                        showName: show
                    };
                    var config = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json') };
                    return this.http.post('/api/shows', JSON.stringify(httpParams), config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
                };
                HomeService.prototype.subscribed = function (showId, user) {
                    var httpParams = {
                        showId: showId,
                        user: user
                    };
                    var config = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json') };
                    return this.http.post('/api/subscribe', JSON.stringify(httpParams), config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
                };
                HomeService.prototype.unsubscribed = function (showId, user) {
                    var httpParams = {
                        showId: showId,
                        user: user
                    };
                    var config = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set('Content-Type', 'application/json') };
                    return this.http.post('/api/unsubscribe', JSON.stringify(httpParams), config).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
                };
                HomeService.prototype.getUsersShows = function (userEmail) {
                    return this.http.get('/api/userShows', {
                        params: userEmail,
                        observe: 'response'
                    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.errorHandler));
                };
                return HomeService;
            }());
            HomeService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
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
            /***/ 
        }),
        /***/ "./src/app/services/RoutingHistory/routingState.service.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/services/RoutingHistory/routingState.service.ts ***!
          \*****************************************************************/
        /*! exports provided: RoutingState */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingState", function () { return RoutingState; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _AuthService_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AuthService/auth.service */ "./src/app/services/AuthService/auth.service.ts");
            var RoutingState = /** @class */ (function () {
                function RoutingState(router, authService) {
                    var _this = this;
                    this.router = router;
                    this.authService = authService;
                    this.history = [];
                    this.authService.email.subscribe(function (email) {
                        _this.user = email;
                    });
                }
                RoutingState.prototype.loadRouting = function () {
                    var _this = this;
                    this.router.events
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]; }))
                        .subscribe(function (_a) {
                        var urlAfterRedirects = _a.urlAfterRedirects;
                        _this.history = _this.history.concat([urlAfterRedirects]);
                    });
                };
                RoutingState.prototype.getHistory = function () {
                    return this.history;
                };
                RoutingState.prototype.getUser = function () {
                    return this.user;
                };
                RoutingState.prototype.getPreviousUrl = function () {
                    return this.history[this.history.length - 2] || '/';
                };
                return RoutingState;
            }());
            RoutingState.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _AuthService_auth_service__WEBPACK_IMPORTED_MODULE_4__["Auth"] }
            ]; };
            RoutingState = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], RoutingState);
            /***/ 
        }),
        /***/ "./src/app/signup/signup.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/signup/signup.component.ts ***!
          \********************************************/
        /*! exports provided: SignupComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function () { return SignupComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _services_AuthService_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/AuthService/auth.service */ "./src/app/services/AuthService/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_RoutingHistory_routingState_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/RoutingHistory/routingState.service */ "./src/app/services/RoutingHistory/routingState.service.ts");
            var SignupComponent = /** @class */ (function () {
                function SignupComponent(authService, router, routingState) {
                    this.authService = authService;
                    this.router = router;
                    this.routingState = routingState;
                    this.passwordText = '';
                    this.emailText = '';
                    this.confirmPassword = '';
                    this.signupForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        passwordText: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("signupForm"),
                        confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("signupForm"),
                        emailText: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("signupForm"),
                    });
                }
                SignupComponent.prototype.signup = function () {
                    var _this = this;
                    this.authService.Signup({
                        email: this.emailText,
                        password: this.passwordText
                    }).subscribe(function (show) {
                        console.log(show);
                        _this.authService.setUserEmail(_this.emailText);
                    });
                    this.router.navigate(["" + this.previousRoute]);
                };
                // Method to sign in with google.
                SignupComponent.prototype.userNameValidator = function (control) {
                    if (control.value === "нет") {
                        return { "showName": true };
                    }
                    return null;
                };
                // signup(){
                //   this.homeService.postShows(this.showName).subscribe(show=>{
                //     console.log(show);
                //   });
                //   console.log(this.myForm);
                // }
                SignupComponent.prototype.ngOnInit = function () {
                    // this.authService.email.subscribe((email:string)=>{
                    //   this.emailText = email;
                    // })
                    this.previousRoute = this.routingState.getPreviousUrl();
                };
                return SignupComponent;
            }());
            SignupComponent.ctorParameters = function () { return [
                { type: _services_AuthService_auth_service__WEBPACK_IMPORTED_MODULE_3__["Auth"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
                { type: _services_RoutingHistory_routingState_service__WEBPACK_IMPORTED_MODULE_5__["RoutingState"] }
            ]; };
            SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-signup',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html")).default,
                    styles: ["input.ng-touched.ng-invalid {border:solid red 2px;}\n  input.ng-touched.ng-valid {border:solid green 2px;}", tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../app.component.scss */ "./src/app/app.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ../../../node_modules/bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css")).default]
                })
            ], SignupComponent);
            /***/ 
        }),
        /***/ "./src/app/signup/signup.module.ts": 
        /*!*****************************************!*\
          !*** ./src/app/signup/signup.module.ts ***!
          \*****************************************/
        /*! exports provided: SignupModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function () { return SignupModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./signup.component */ "./src/app/signup/signup.component.ts");
            var SignupModule = /** @class */ (function () {
                function SignupModule() {
                }
                return SignupModule;
            }());
            SignupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
                    declarations: [
                        _signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"]
                    ],
                    imports: [
                        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                        _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    ],
                    providers: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
                    bootstrap: [_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"]]
                })
            ], SignupModule);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
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
            document.addEventListener('DOMContentLoaded', function () {
                Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                    .catch(function (err) { return console.error(err); });
            });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! D:\courseWork\SerialsTracker\serialsTracker\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map