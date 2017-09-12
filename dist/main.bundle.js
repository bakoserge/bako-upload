webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n    <h1>\n        Welcome to {{title}}!\n    </h1>\n    <img width=\"300\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<div>\n    <bako-upload></bako-upload>\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n    <li>\n        <h2><a target=\"_blank\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n    </li>\n    <li>\n        <h2><a target=\"_blank\" href=\"https://github.com/angular/angular-cli/wiki\">CLI Documentation</a></h2>\n    </li>\n    <li>\n        <h2><a target=\"_blank\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n    </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_barrel__ = __webpack_require__("../../../../../src/app/services-barrel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bako_upload_bako_upload_module__ = __webpack_require__("../../../../../src/app/bako-upload/bako-upload.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_6__bako_upload_bako_upload_module__["a" /* BakoUploadModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__services_barrel__["c" /* ProgressService */],
            { provide: __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* BrowserXhr */], useClass: __WEBPACK_IMPORTED_MODULE_5__services_barrel__["a" /* CustomBrowserXhr */], deps: [__WEBPACK_IMPORTED_MODULE_5__services_barrel__["c" /* ProgressService */]] },
            __WEBPACK_IMPORTED_MODULE_5__services_barrel__["d" /* WebService */],
            __WEBPACK_IMPORTED_MODULE_5__services_barrel__["b" /* FileUploadService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/bako-upload/bako-upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <!--UPLOAD-->\n    <form #f=\"ngForm\" enctype=\"multipart/form-data\" novalidate *ngIf=\"currentStatus === STATUS_INITIAL || currentStatus === STATUS_SAVING\">\n        <h1>Upload images</h1>\n\n        <div *ngFor=\"let file of filesAdded\">\n            {{file.name}}<br />\n\n            <div>\n                <div class=\"progress\">\n                    <div class=\"progress-bar progress-bar-striped\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" [ngStyle]=\"{'width': file.progress+'%'}\">\n                        {{file.progress}}%\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n        <br />\n        <div class=\"dropbox\">\n            <input type=\"file\" multiple [name]=\"uploadFieldName\" (change)=\"save()\" [disabled]=\"currentStatus === STATUS_SAVING\" #photos>\n            <p *ngIf=\"currentStatus === STATUS_INITIAL\">\n                Drag your file(s) here to begin<br> or click to browse\n            </p>\n            <p *ngIf=\"currentStatus === STATUS_SAVING\">\n                Uploading {{ photos.files.length }} files...\n            </p>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/bako-upload/bako-upload.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropbox {\n  outline: 2px dashed grey;\n  /* the dash box */\n  outline-offset: -10px;\n  background: lightcyan;\n  color: dimgray;\n  padding: 10px 10px;\n  min-height: 200px;\n  /* minimum height */\n  position: relative;\n  cursor: pointer; }\n\n.dropbox:hover {\n  background: lightblue;\n  /* when mouse over to the drop zone, change color */ }\n\ninput[type=\"file\"] {\n  opacity: 0;\n  /* invisible but it's there! */\n  width: 100%;\n  height: 200px;\n  position: absolute;\n  cursor: pointer; }\n\n.dropbox p {\n  font-size: 1.2em;\n  text-align: center;\n  padding: 50px 0; }\n\n.uploaded {\n  padding: 0;\n  height: 14px;\n  border-radius: 10px;\n  background-image: -webkit-gradient(linear, left top, left bottom, from(#66cc00), to(#4b9500));\n  -o-border-image: initial;\n     border-image: initial; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bako-upload/bako-upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BakoUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_barrel__ = __webpack_require__("../../../../../src/app/services-barrel.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BakoUploadComponent = (function () {
    function BakoUploadComponent(_svc, _progressService, cdr) {
        var _this = this;
        this._svc = _svc;
        this._progressService = _progressService;
        this.cdr = cdr;
        this.uploadedFiles = [];
        this.uploadFieldName = 'photos';
        this.filesAdded = [];
        this.STATUS_INITIAL = 0;
        this.STATUS_SAVING = 1;
        this.STATUS_SUCCESS = 2;
        this.STATUS_FAILED = 3;
        this.outputFiles = [];
        this.reset(); // set initial state
        this._progressService.progressEvent$.subscribe(function (event) {
            console.log('event progress', event);
            _this.progress = event.percentCompleted;
            _this.speed = event.uploadSpeed;
            _this.timeRemaining = event.uploadTimeRemaining;
            _this.update();
            _this.cdr.detectChanges();
        });
    }
    BakoUploadComponent.prototype.ngOnInit = function () {
    };
    BakoUploadComponent.prototype.reset = function () {
        this.currentStatus = this.STATUS_INITIAL;
        this.uploadedFiles = [];
        this.uploadError = null;
    };
    BakoUploadComponent.prototype.update = function () {
        this.fileToUpload.progress = this.progress;
    };
    BakoUploadComponent.prototype.save = function () {
        var _this = this;
        var fi = this.fileInput.nativeElement;
        // upload data to the server
        this.currentStatus = this.STATUS_SAVING;
        if (fi.files && fi.files.length > 0) {
            //this.filesAdded =  fi.files;
            console.log('before outputFiles', this.outputFiles);
            console.log('fi.files', fi.files);
            if (this.outputFiles.length === 0) {
                this.outputFiles = Object.keys(fi.files).map(function (key) {
                    return fi.files[key]; //{ type: key, name: fi.files[key] };
                });
            }
            console.log('after outputFiles', this.outputFiles);
            this.fileToUpload = this.outputFiles.pop();
            this.fileToUpload.progress = 0;
            console.log('fileToUpload', this.fileToUpload);
            this.filesAdded.push(this.fileToUpload);
            this._svc.upload(this.fileToUpload)
                .subscribe(function (event) {
                console.log('event', event);
                _this.uploadedFiles = [].concat(event);
                _this.currentStatus = _this.STATUS_INITIAL;
            }, function (error) {
                console.log("Error saving");
                _this.currentStatus = _this.STATUS_FAILED;
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error);
            }, function () {
                console.log('complete');
                if (_this.outputFiles.length > 0) {
                    _this.save();
                }
                else {
                    _this.outputFiles = [];
                    return;
                }
            });
            console.log('my files', this.filesAdded);
        }
    };
    return BakoUploadComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])("photos"),
    __metadata("design:type", Object)
], BakoUploadComponent.prototype, "fileInput", void 0);
BakoUploadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'bako-upload',
        template: __webpack_require__("../../../../../src/app/bako-upload/bako-upload.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bako-upload/bako-upload.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_barrel__["b" /* FileUploadService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_barrel__["b" /* FileUploadService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_barrel__["c" /* ProgressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_barrel__["c" /* ProgressService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]) === "function" && _c || Object])
], BakoUploadComponent);

var _a, _b, _c;
//# sourceMappingURL=bako-upload.component.js.map

/***/ }),

/***/ "../../../../../src/app/bako-upload/bako-upload.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BakoUploadModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bako_upload_component__ = __webpack_require__("../../../../../src/app/bako-upload/bako-upload.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular Imports



// This Module's Components

var BakoUploadModule = (function () {
    function BakoUploadModule() {
    }
    return BakoUploadModule;
}());
BakoUploadModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__bako_upload_component__["a" /* BakoUploadComponent */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__bako_upload_component__["a" /* BakoUploadComponent */],
        ]
    })
], BakoUploadModule);

//# sourceMappingURL=bako-upload.module.js.map

/***/ }),

/***/ "../../../../../src/app/services-barrel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_web_service__ = __webpack_require__("../../../../../src/app/shared/services/web.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__shared_services_web_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_file_upload_service__ = __webpack_require__("../../../../../src/app/shared/services/file-upload.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__shared_services_file_upload_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_customBrowserXhr_service__ = __webpack_require__("../../../../../src/app/shared/services/customBrowserXhr.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__shared_services_customBrowserXhr_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__shared_services_customBrowserXhr_service__["b"]; });



//# sourceMappingURL=services-barrel.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/customBrowserXhr.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ProgressService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomBrowserXhr; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProgressService = (function () {
    function ProgressService() {
        this.progressEventObservable = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Subject"]();
        this.progressEvent$ = this.progressEventObservable.asObservable();
    }
    return ProgressService;
}());
ProgressService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])()
], ProgressService);

var CustomBrowserXhr = (function (_super) {
    __extends(CustomBrowserXhr, _super);
    function CustomBrowserXhr(_service) {
        var _this = _super.call(this) || this;
        _this._service = _service;
        console.log('service', _this._service);
        return _this;
    }
    CustomBrowserXhr.prototype.build = function () {
        var _this = this;
        var xhr = _super.prototype.build.call(this);
        var startTime = Date.now();
        xhr.upload.onprogress = function (event) {
            var timeElapsed = Date.now() - startTime;
            var uploadSpeed = event.loaded / (timeElapsed / 1000);
            var timeRemaining = Math.ceil(((event.total - event.loaded) / uploadSpeed));
            event.uploadTimeRemaining = timeRemaining;
            event.uploadSpeed = (uploadSpeed / 1024 / 1024).toFixed(2);
            event.percentCompleted = ((event.loaded / event.total) * 100).toFixed(0);
            console.log(event, "event inside browser override");
            _this._service.progressEventObservable.next(event);
        };
        return (xhr);
    };
    return CustomBrowserXhr;
}(__WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* BrowserXhr */]));
CustomBrowserXhr = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [ProgressService])
], CustomBrowserXhr);

//# sourceMappingURL=customBrowserXhr.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/file-upload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileUploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { HttpRequest, HttpResponse, HttpEventType, HttpClient } from "@angular/commonhttp";


var FileUploadService = (function () {
    function FileUploadService(_http) {
        this._http = _http;
        this.baseUrl = ''; // our local Hapi Js API
    }
    FileUploadService.prototype.upload = function (fileToUpload) {
        //let headers = new Headers({ 'Content-Type': 'multipart/form-data' });
        //let options = new RequestOptions({ headers: headers });
        var input = new FormData();
        input.append("file", fileToUpload);
        return this._http.post("api/upload", input, {})
            .map(this.extractData)
            .catch(this._handlerError.bind(this));
    };
    FileUploadService.prototype._handlerError = function (err) {
        console.log(err);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(err);
    };
    FileUploadService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    return FileUploadService;
}());
FileUploadService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], FileUploadService);

var _a;
//# sourceMappingURL=file-upload.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/web.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WebService = (function () {
    function WebService(http) {
        this.http = http;
    }
    WebService.prototype.getRequest = function (route, params) {
        console.log('server request', route);
        return this.http.get(route, params);
    };
    WebService.prototype.postRequest = function (route, params) {
        console.log('server request', route);
        return this.http.post(route, params);
    };
    WebService.prototype.putRequest = function (route, params) {
        console.log('server request', route);
        return this.http.put(route, params);
    };
    WebService.prototype.deleteRequest = function (route, params) {
        console.log('server request', route);
        return this.http.delete(route, params);
    };
    return WebService;
}());
WebService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], WebService);

var _a;
//# sourceMappingURL=web.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map