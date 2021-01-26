import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { SampleServiceService } from "../sample-service.service";

/**
 * @title Display value autocomplete
 */
@Component({
  selector: "app-component",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"],
  providers: [SampleServiceService]
})
export class AutocompleteDisplayExample implements OnInit {
  constructor(
    private http: HttpClient,
    private sampleServiceService: SampleServiceService
  ) {
    this.getUsers();
    this.getDepot();
  }

  ngOnInit() {
    this.firstSampleHttpCall();
    this.secondSampleHttpCall();
  }

  users: User[] = [];
  getUsers() {
    this.http
      .get<User[]>("assets/users.json")
      .subscribe((data: User[]) => (this.users = data));
  }
  depot: string[] = [];
  getDepot() {
    this.http
      .get<string[]>("assets/depot.json")
      .subscribe((data: string[]) => (this.depot = data));
  }
  textAreaValue:string = '';
  firstSampleHttpCall() {
    this.sampleServiceService
      .getNumber()
      .subscribe(result => {
        this.textAreaValue += `\n${result}`
        });
  }

  secondSampleHttpCall() {
    this.sampleServiceService
      .getText()
      .subscribe(result => {
        console.log(result);
        this.textAreaValue += `\n${result}`;
        });
  }
}

export class User {
  public UserName: string;
  public Timezone: number;
}

export class UserDepot {
  public UserName: string;
  public Depot: string;
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
