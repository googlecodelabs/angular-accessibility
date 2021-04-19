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
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

export interface ColorDialogData {
  color: string;
}

@Component({
  selector: 'app-color-picker-dialog',
  templateUrl: './color-picker-dialog.component.html',
  styleUrls: ['./color-picker-dialog.component.scss']
})
export class ColorPickerDialogComponent implements OnInit {
  @Output() recolor = new EventEmitter();
  color = '#fff';

  public defaultColors: string[] = [
    'white',
    'tomato',
    'hotpink',
    'coral',
    'gold',
    'greenyellow',
    'lightgreen',
    'turquoise',
    'skyblue',
    'royalblue',
    'plum',
  ];

  // TODO: #11. Announce changes with LiveAnnouncer
  constructor(public dialogRef: MatDialogRef<ColorPickerDialogComponent>,
    private liveAnnouncer: LiveAnnouncer) { }

  ngOnInit(): void { }

  public changeColor(color: string): void {
    if (color) {
      this.recolor.emit(color);
    }

    // TODO: #11. Announce changes with LiveAnnouncer
    this.liveAnnouncer.announce(`Select color: ${color}`);
    this.dialogRef.close();
  }

  public closeDialog(): void {
    this.dialogRef.close();
  }
}
