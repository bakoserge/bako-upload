import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class WebService {

    constructor(private http: Http) { }

    getRequest(route: string, params?: any) {
        console.log('server request', route);
        return this.http.get(route, params);
    }

    postRequest(route: string, params: any) {
        console.log('server request', route);
        return this.http.post(route, params);
    }

    putRequest(route: string, params: any) {
        console.log('server request', route);
        return this.http.put(route, params);
    }

    deleteRequest(route: string, params: any) {
        console.log('server request', route);
        return this.http.delete(route, params);
    }
}