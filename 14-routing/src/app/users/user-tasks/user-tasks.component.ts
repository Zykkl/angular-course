import { Component, inject, input } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterLink,
  RouterOutlet,
  RouterStateSnapshot,
} from "@angular/router";
import { UsersService } from "../users.service";

@Component({
  selector: "app-user-tasks",
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: "./user-tasks.component.html",
  styleUrl: "./user-tasks.component.css",
})
export class UserTasksComponent {
  userName = input.required<string>();
  userId = input.required<string>();
}

export const resolveUserName: ResolveFn<string> = (
  activatedRoute: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const usersService = inject(UsersService);
  const userName =
    usersService.users.find(
      (user) => user.id === activatedRoute.paramMap.get("userId")
    )?.name ?? "";
  return userName;
};

export const resolveTitle: ResolveFn<string> = (
  activatedRoute,
  routerState
) => {
  return resolveUserName(activatedRoute, routerState) + "'s Tasks";
};
