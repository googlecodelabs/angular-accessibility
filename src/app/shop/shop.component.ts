/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  quantity = 11;
  color = 'gold';

  // TODO: #7. Create selectable controls with Angular Material
  fillings: string[] = ['Bok Choy & Chili Crunch', 'Tofu & Mushroom', 'Chicken & Ginger', 'Impossible Meat & Spinach'];
  selectedFillings: string[] = [];

  // TODO: #11. Announce changes with LiveAnnouncer
  constructor(private liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void { }

  counter(i: number): Array<number> {
    return new Array(i);
  }

  public changeColor(color: string): void {
    this.color = color;
  }

  fauxPurchase(): void {
    let flavor = '';

    // TODO: #7. Create selectable controls with Angular Material
    this.selectedFillings.forEach(filling => {
      flavor = flavor + ' ' + filling;
    });

    const fakePurchase = `Purchase ${this.quantity} ${flavor}dumplings in the color ${this.color}!`;
    console.log(fakePurchase);

    // TODO: #11. Announce changes with LiveAnnouncer
    this.liveAnnouncer.announce(fakePurchase);
  }
}
