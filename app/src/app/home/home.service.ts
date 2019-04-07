import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"

const apiUrl = "http://localhost:8000" // backend server url
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
}

@Injectable({
  providedIn: "root"
})
export class HomeService {
  constructor(private http: HttpClient) {}

  // get request
  get() {
    return this.http.get(`${apiUrl}/tasks`)
  }

  // put request
  destroyCompleted() {
    return this.http.delete(`${apiUrl}/tasks`)
  }
}
