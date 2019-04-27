import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"

const apiUrl = "https://domeproject.herokuapp.com" // backend server url(hoseted by Heroku)
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
}

@Injectable({
  providedIn: "root"
})
export class HomeService {
  constructor(private http: HttpClient) {}

  // get request to server side
  get(sortOption) {
    return this.http.get(`${apiUrl}/tasks?sortQuery=${sortOption}`)
  }

  // post request to server side
  add(data) {
    return this.http.post(`${apiUrl}/tasks`, data.newTask, httpOptions)
  }

  // put request to server side
  put(data) {
    return this.http.put(`${apiUrl}/task/${data._id}/`, data, httpOptions)
  }

  // put request to server side
  destroyCompleted() {
    return this.http.delete(`${apiUrl}/tasks`)
  }
}
