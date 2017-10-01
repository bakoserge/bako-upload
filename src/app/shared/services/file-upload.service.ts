import { Injectable } from '@angular/core';
//import { HttpRequest, HttpResponse, HttpEventType, HttpClient } from "@angular/commonhttp";
import { Headers, Http, Response, RequestOptions, Request } from '@angular/http';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class FileUploadService {

    baseUrl = ''; // our local Hapi Js API

    constructor(private _http: Http) { }

    upload(route: string,fileToUpload: any) {

        let input = new FormData();
        input.append("file", fileToUpload);

        return this._http.post(route, input, {

        })
        .map(this.extractData)
        .catch(this._handlerError.bind(this));
    }

    _handlerError(err: any) {
        console.log(err);
        return Observable.throw(err);
    }
    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }
}
