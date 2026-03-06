import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard-home.html',
  styleUrls: ['./dashboard-home.css']
})
export class Dashboard implements AfterViewInit {

  ngAfterViewInit(): void {
    // Line Chart: Stock Trend
    const ctx1 = (document.getElementById('stockTrendChart') as HTMLCanvasElement).getContext('2d');
    new Chart(ctx1!, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Stock Level',
          data: [1200, 1150, 1300, 1250, 1400, 1350],
          backgroundColor: 'rgba(30,144,255,0.2)',
          borderColor: '#1E90FF',
          borderWidth: 2,
          tension: 0.3,
          fill: true
        }]
      },
      options: { responsive: true, plugins: { legend: { display: false } } }
    });

    // Pie Chart: Warehouse Usage
    const ctx2 = (document.getElementById('warehousePieChart') as HTMLCanvasElement).getContext('2d');
    new Chart(ctx2!, {
      type: 'pie',
      data: {
        labels: ['Vendor A', 'Vendor B', 'Vendor C', 'Vendor D'],
        datasets: [{
          label: 'Warehouse Usage',
          data: [30, 25, 20, 25],
          backgroundColor: ['#1E90FF', '#3A8DFF', '#6AB0FF', '#B3D7FF'],
        }]
      },
      options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
    });
  }
}