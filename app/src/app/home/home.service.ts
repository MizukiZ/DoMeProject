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
  get(sortOption) {
    return this.http.get(`${apiUrl}/tasks?sortQuery=${sortOption}`)
  }

  // post request
  add(data) {
    return this.http.post(`${apiUrl}/tasks`, data.newTask, httpOptions)
  }

  // put request
  put(data) {
    return this.http.put(`${apiUrl}/task/${data._id}/`, data, httpOptions)
  }

  // put request
  destroyCompleted() {
    return this.http.delete(`${apiUrl}/tasks`)
  }
}
