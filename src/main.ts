import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import "zone.js";
import { QuizQuestionComponent } from "./app/my-app/quiz/quiz-question/quiz-question.component";
import { QuizComponent } from "./app/my-app/quiz/quiz.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [QuizComponent, QuizQuestionComponent],
  templateUrl: "./main.html",
})
export class App {
  name = "Angular";
}

bootstrapApplication(App);
