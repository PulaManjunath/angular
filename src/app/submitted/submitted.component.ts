import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-submitted',
  templateUrl: './submitted.component.html',
  styleUrls: ['./submitted.component.css']
})
export class SubmittedComponent implements OnInit {

  clients = [{
    "view": "view",
    "owner": "David",
    "reference": "1234",
    "receiptDate": "01-01-2018",
    "subject": "Implementation of the script Standard",
    "source": "CMS",
    "product": "MA,MAPD"

  }];

  ngOnInit() {

  }
}
