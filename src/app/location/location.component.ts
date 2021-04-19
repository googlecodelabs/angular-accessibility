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
import { Component } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {
  center: google.maps.LatLngLiteral = {
    lat: 37.759767,
    lng: -122.427121,
  };

  options: google.maps.MapOptions = {
    center: this.center,
    zoom: 20,
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
    styles: [
      {
        featureType: 'all',
        stylers: [
          { color: '#C0C0C0' }
        ]
      }, {
        featureType: 'road.arterial',
        elementType: 'geometry',
        stylers: [
          { color: '#CCFFFF' }
        ]
      }, {
        featureType: 'landscape',
        elementType: 'labels',
        stylers: [
          { visibility: 'off' }
        ]
      }
    ]
  };

  markerPosition: google.maps.LatLngLiteral = this.center;
  markerOptions: google.maps.MarkerOptions = {draggable: false};
}
