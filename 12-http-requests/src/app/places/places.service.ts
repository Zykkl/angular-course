import { inject, Injectable, signal } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { catchError, map, tap, throwError } from "rxjs";
import { Place } from "./place.model";

@Injectable({
  providedIn: "root",
})
export class PlacesService {
  private userPlaces = signal<Place[]>([]);
  private httpClient = inject(HttpClient);

  loadedUserPlaces = this.userPlaces.asReadonly();

  loadAvailablePlaces() {
    return this.fetchPlaces(
      "http://localhost:3000/places",
      "Could not fetch available places"
    );
  }

  loadUserPlaces() {
    return this.fetchPlaces(
      "http://localhost:3000/user-places",
      "Could not fetch user places"
    ).pipe(tap({ next: (userPlaces) => this.userPlaces.set(userPlaces) }));
  }

  addPlaceToUserPlaces(place: Place) {
    this.userPlaces.update((oldPlaces) => [...oldPlaces, place]);
    return this.httpClient.put("http://localhost:3000/user-places", {
      placeId: place.id,
    });
  }

  removeUserPlace(place: Place) {}

  private fetchPlaces(url: string, errorMsg: string) {
    return this.httpClient.get<{ places: Place[] }>(url).pipe(
      map((resData) => resData.places),
      catchError(() => throwError(() => new Error(errorMsg)))
    );
  }
}
