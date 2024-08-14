import { Routes } from "@angular/router";

import { NewTaskComponent } from "../tasks/new-task/new-task.component";
import { TasksComponent, resolveUserTasks } from "../tasks/tasks.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "tasks",
    pathMatch: "full",
  },
  {
    path: "tasks", // <your-domain>/users/<uid>/tasks
    component: TasksComponent,
    runGuardsAndResolvers: "paramsOrQueryParamsChange",
    resolve: {
      userTasks: resolveUserTasks,
    },
  },
  {
    path: "tasks/new",
    component: NewTaskComponent,
  },
];
