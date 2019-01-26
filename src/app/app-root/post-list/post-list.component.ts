import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  post: {
    title: string,
    content: string,
    loveIts: number,
    created_at: Date
  } ;
  posts= [{
    title: 'Skint Dad',
    content: 'So when I talk about coming at a niche from a different angle, this example is exactly what I mean. Skint Dad is a site that helps young / new dads save money and be more frugal in their day to day living.',
    loveIts:0,
    created_at: '26/01/2019 , 11:29 AM'
  },
  {
    title: 'SolopreneurHour.com',
    content: 'A very well designed and slick blog that’s all about being your own boss and creating your own wealth. It’s a blog with a very active podcast feed. Their podcasts are insanely popular on itunes',
    loveIts:0,
    created_at: '26/01/2019 , 11:29 AM'
  },
  {
    title: 'Knowtechie.com',
    content: 'I’ve been following this site since it started and has seen its progression from just one guy writing about stuff he loves, to a site that get’s decent traffic and has a team of writers.',
    loveIts:0,
    created_at: '26/01/2019 , 11:29 AM'
  },
 ]
  constructor() { }

  ngOnInit() {

  }

  love(t){
    console.log("good")
   
   for (let item of this.posts)
   {
     if(item.title==t)
     item.loveIts++
   }
    this.ngOnInit();



  }

  dontlove(t){
   
    for (let item of this.posts)
    {
      if(item.title==t)
      item.loveIts--
    }
    this.ngOnInit()
 

  }


}
