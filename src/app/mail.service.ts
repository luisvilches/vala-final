import {Injectable} from "@angular/core";
import {HttpClient,HttpHeaders} from "@angular/common/http";

import { catchError, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';


const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable()
export class MailService {
    type:any;
    constructor( private http: HttpClient) { }
    getResponseEmail(_body: any ): Observable<any>{
    // this.http.post('/send.php',_body).subscribe(data =>{
    //   console.log(data);
    //   this.type = JSON.stringify(data);
    // });
        return this.http.post('/mail.php',_body);
    }
}