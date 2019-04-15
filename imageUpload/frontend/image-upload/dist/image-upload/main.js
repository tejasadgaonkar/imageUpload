(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ex3 {\r\n    background-color: lightblue;\r\n    width: 110px;\r\n    height: 110px;\r\n    overflow: auto;\r\n  }\r\n  .btnclass{\r\n    padding-top: 10px;height: 25px;margin:20px auto;\r\n    border-radius:10px;\r\n    -webkit-border-radius:10px;\r\n    box-shadow:0 1px 2px #5e5d5b;\r\n    text-align: center;\r\n    line-height: 65px; \r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    color:\"black\"\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLGFBQWE7SUFDYixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCO0lBQy9DLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4MyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG4gIC5idG5jbGFzc3tcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O2hlaWdodDogMjVweDttYXJnaW46MjBweCBhdXRvO1xyXG4gICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgICBib3gtc2hhZG93OjAgMXB4IDJweCAjNWU1ZDViO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDY1cHg7IFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGNvbG9yOlwiYmxhY2tcIlxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n        \n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                <ul class=\"nav navbar-nav\">\n                    <li><a>File Upload</a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</nav>\n<div class=\"container\">\n       \n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <form>\n                <div class=\"form-group\">\n                    <label for=\"multiple\">Multiple</label>\n                    <input type=\"file\" class=\"form-control\" name=\"multiple\" ng2FileSelect [uploader]=\"uploader\"\n                        multiple />\n                </div>\n                <!-- <div class=\"form-group\">\n                    <label for=\"single\">single</label>\n                    <input type=\"file\" class=\"form-control\" name=\"single\" ng2FileSelect [uploader]=\"uploader\" />\n                </div> -->\n            </form>\n        </div>\n        <div class=\"col-md-8\">\n            Queue length: {{ uploader?.queue?.length }}\n\n            <table class=\"table\">\n                <thead>\n                    <tr>\n                        <th width=\"50%\">Name</th>\n                        <th>Size</th>\n                        <th>Progress</th>\n                        <th>Status</th>\n                        <th>Actions</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let item of uploader.queue\">\n                        <td><strong>{{ item.file.name }}</strong></td>\n                        <td nowrap>{{ item.file.size/1024/1024 | number:'.2' }} MB</td>\n                        <td>\n                            <div class=\"progress\" style=\"margin-bottom: 0;\">\n                                <div class=\"progress-bar\" role=\"progressbar\"\n                                    [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n                            </div>\n                        </td>\n                        <td class=\"text-center\">\n                            <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\n                            <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\n                            <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\n                        </td>\n                        <td nowrap>\n                            <button type=\"button\" class=\"btn btn-success btn-xs\" (click)=\"item.upload()\"\n                                [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                                <span class=\"glyphicon glyphicon-upload\"></span> Upload\n                            </button>\n                            <button type=\"button\" class=\"btn btn-warning btn-xs\" (click)=\"item.cancel()\"\n                                [disabled]=\"!item.isUploading\">\n                                <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n                            </button>\n                            <button type=\"button\" class=\"btn btn-danger btn-xs\" (click)=\"item.remove()\">\n                                <span class=\"glyphicon glyphicon-trash\"></span> Remove\n                            </button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n\n            <div>\n                <div>\n                    Queue progress:{{uploader.progress}}\n                    <div class=\"progress\" style=\"\">\n                        <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\">\n                        </div>\n                    </div>\n                </div>\n                <button type=\"button\" class=\"btn btn-success btn-s\"\n                    (click)=\"uploader.uploadAll()\"\n                    [disabled]=\"!uploader.getNotUploadedItems().length\">\n                    <span class=\"glyphicon glyphicon-upload\"></span> Upload all\n                </button>\n                <button type=\"button\" class=\"btn btn-warning btn-s\" (click)=\"uploader.cancelAll()\"\n                    [disabled]=\"!uploader.isUploading\">\n                    <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel all\n                </button>\n                <button type=\"button\" class=\"btn btn-danger btn-s\" (click)=\"uploader.clearQueue()\"\n                    [disabled]=\"!uploader.queue.length\">\n                    <span class=\"glyphicon glyphicon-trash\"></span> Remove all\n                </button>\n                <button type=\"button\" class=\"btn btn-warning btn-s\" (click)=\"getAllImages()\"\n                    [disabled]=\"!uploader.queue.length\">\n                    <span class=\"glyphicon glyphicon-trash\"></span> Refresh Images\n                </button>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\" style=\"margin-top: 10px;\">\n        <div class=\"col-sm-12\"></div>\n        <div class=\"card col-sm-2\" style=\"width: 15rem;margin-left: 17px;margin-top: 20px;height: 100%;\"\n            *ngFor=\"let imagePath of images\">\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"removeImage(imagePath)\">Remove</button>\n            <img class=\"col-sm-12\" src={{imagePath}} alt=\"Girl in a jacket\" width=\"100%\" height=\"100px\">\n        </div>\n\n    </div>\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-file-upload/ng2-file-upload */ "./node_modules/ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _imageupload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imageupload.service */ "./src/app/imageupload.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(imageuploadService) {
        this.imageuploadService = imageuploadService;
        this.images = [];
        this.uploader = new ng2_file_upload_ng2_file_upload__WEBPACK_IMPORTED_MODULE_2__["FileUploader"]({ url: 'http://localhost:3001/upload' });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getAllImages();
    };
    AppComponent.prototype.getAllImages = function () {
        var _this = this;
        this.imageuploadService.getIds().subscribe(function (data) {
            _this.images = data;
            _this.falg = true;
        }),
            (function (error) {
            });
    };
    AppComponent.prototype.removeImage = function (item) {
        var _this = this;
        var res = item.split("/")[4];
        console.log(res);
        this.imageuploadService.deleteImage(res).subscribe(function (data) {
            _this.getAllImages();
        }),
            (function (error) {
            });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_imageupload_service__WEBPACK_IMPORTED_MODULE_3__["ImageuploadService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _imageupload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imageupload.service */ "./src/app/imageupload.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileSelectDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
            ],
            providers: [_imageupload_service__WEBPACK_IMPORTED_MODULE_6__["ImageuploadService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/imageupload.service.ts":
/*!****************************************!*\
  !*** ./src/app/imageupload.service.ts ***!
  \****************************************/
/*! exports provided: ImageuploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageuploadService", function() { return ImageuploadService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");






var ImageuploadService = /** @class */ (function () {
    function ImageuploadService(http) {
        this.http = http;
        this.url = 'http://localhost:3001/';
    }
    ImageuploadService.prototype.getIds = function () {
        return this.http.get(this.url + 'getAllIds')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return console.log('fetched ids'); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getHeroes', [])));
    };
    ImageuploadService.prototype.deleteImage = function (id) {
        var url1 = this.url + "deleteImage/" + id;
        console.log(id);
        // DELETE api/heroes/42
        return this.http.get('http://localhost:3001/deleteImage/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('deleteHero')));
        /* return this.http.post<any>('http://localhost:3001/deleteImage', id)
          .pipe(
            catchError(this.handleError('deleteImage', id))
          ); */
    };
    ImageuploadService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            // this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    ImageuploadService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ImageuploadService);
    return ImageuploadService;
}());



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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! e:\imageUpload\frontend\image-upload\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map