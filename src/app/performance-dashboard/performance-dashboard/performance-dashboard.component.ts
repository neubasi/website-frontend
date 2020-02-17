import { Component, OnInit } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import {Chart} from 'chart.js'

@Component({
  selector: 'app-performance-dashboard',
  templateUrl: './performance-dashboard.component.html',
  styleUrls: ['./performance-dashboard.component.scss']
})
export class PerformanceDashboardComponent implements OnInit {

  data;

  //subject = webSocket("ws://78.47.103.10:5000");
  subject = webSocket('ws://78.47.103.10:5001');

    constructor() { 
  }
  
  ngOnInit() {
    this.build();
   }

  addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets[0].data.push(data)
    chart.update();

}

 removeData(chart) {
   if(chart.data.labels.length >= 100){
  chart.data.labels.shift();
  chart.data.datasets[0].data.shift();
  chart.update();
}
}

build() {
  const ctx = document.getElementById('myChart')
  const simon = new Chart(ctx, {
  type: 'line',
  labels: [],
  data: {
      datasets: [{
          label: 'CPU Auslasting in %',
          data: [],
          backgroundColor: [
              'rgba(0, 99, 255, 0.2)',
          ],
          borderColor: [
              'rgba(0, 99, 255, 1)',
          ],
          borderWidth: 1
      }]
  },
  options: {
    tooltips: {
         enabled: false
    },
    scales:{
      xAxes: [{
          display: false //this will remove all the x-axis grid lines
      }]
  }
}
});

this.subject.subscribe(
  msg => {
    this.data = msg;
   // this.dataArray.push(parseInt(this.data.cpu,10))
      this.addData(simon, new Date().getHours() +':' +  new Date().getMinutes()+':' +  new Date().getSeconds(), parseFloat(this.data.cpu))
      this.removeData(simon)
  },
  // Called whenever there is a message from the server    
  err => console.log(err),
  // Called if WebSocket API signals some kind of error    
  () => console.log('complete')
  // Called when connection is closed (for whatever reason)  
);


}

 
}
