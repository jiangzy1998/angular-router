import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.less']
})
export class ChildAComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    console.log("this is childA")
    const id = this.route.snapshot.paramMap.get('id');
    console.log("id"+id);
  }



}
