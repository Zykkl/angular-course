import { Component } from '@angular/core';
import {ExternalRedirectDirective} from "../external-redirect.directive";

@Component({
  selector: 'app-learning-resources',
  templateUrl: './learning-resources.component.html',
  styleUrl: './learning-resources.component.css',
  standalone: true,
  imports: [
    ExternalRedirectDirective
  ]
})
export class LearningResourcesComponent {}
