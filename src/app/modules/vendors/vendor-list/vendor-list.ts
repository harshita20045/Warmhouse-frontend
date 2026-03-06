import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { VendorService } from '../../../core/services/vendor';
import { Vendor } from '../../../models/vendor';

@Component({
  selector: 'app-vendor-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './vendor-list.html',
  styleUrl: './vendor-list.css',
})
export class VendorList implements OnInit {

  vendors: Vendor[] = [];
  searchText: string = '';

  constructor(private vendorService: VendorService) {}

  ngOnInit(): void {
    this.loadVendors();
  }

  loadVendors() {
    this.vendorService.getVendors().subscribe({
      next: (data) => {
        this.vendors = data;
        console.log('Vendors loaded successfully', this.vendors);
      },
      error: (err) => {
        console.error('Error loading vendors', err);
      }
    });
  }
}