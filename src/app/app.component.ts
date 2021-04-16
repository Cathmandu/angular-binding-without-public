import { Component, OnInit } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { startWith } from "rxjs/operators";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  private _data: Observable<string>;

  ngOnInit(): void {
    this._data = new Subject<string>().pipe(startWith("xq00"));
    //or
    //this._data = new BehaviorSubject<string>('xq00')
  }

  get data(): Observable<string> {
    return this._data;
  }
}
