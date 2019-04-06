import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"

const apiUrl = "http://localhost:8000" // backend server url
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
}

@Injectable({
  providedIn: "root"
})
export class TaskService {
  constructor(private http: HttpClient) {}

  // get request
  get() {
    return this.http.get(`${apiUrl}/tasks`)
  }

  // put request
  put(data, taskID) {
    return this.http.put(`${apiUrl}/task/${taskID}/`, data, httpOptions)
  }
}