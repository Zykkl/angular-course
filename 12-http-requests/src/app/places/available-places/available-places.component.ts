import { Component, DestroyRef, inject, OnInit, signal } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { catchError, map, throwError } from "rxjs";
import { Place } from "../place.model";
import { PlacesContainerComponent } from "../places-container/places-container.component";
import { PlacesComponent } from "../places.component";

@Component({
  selector: "app-available-places",
  standalone: true,
  templateUrl: "./available-places.component.html",
  styleUrl: "./available-places.component.css",
  imports: [PlacesComponent, PlacesContainerComponent],
})
export class AvailablePlacesComponent implements OnInit {
  places = signal<Place[] | undefined>(undefined);
  isFetching = signal(false);
  errorMsg = signal("");
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.isFetching.set(true);
    const subscription = this.httpClient
      .get<{ places: Place[] }>("http://localhost:3000/places")
      .pipe(
        map((resData) => resData.places),
        // not needed, just for demo
        catchError(() => throwError(() => new Error("sum wrong aint right")))
      )
      .subscribe({
        next: (resData) => {
          this.places.set(resData);
        },
        error: (error: Error) => {
          console.log(error);
        },
        complete: () => {
          this.isFetching.set(false);
        },
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  onSelectPlaces(place: Place) {
    this.httpClient
      .put("http://localhost:3000/user-places", { placeId: place.id })
      .subscribe();
  }
}
