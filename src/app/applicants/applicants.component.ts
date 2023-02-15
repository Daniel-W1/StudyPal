import { Component } from '@angular/core';
import { ApplicantProfile } from '../applicant-profile';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css']
})
export class ApplicantsComponent {

  Applicants:ApplicantProfile[] = [
    {
      picture:"assets/codeaddict.jpg",
      username:"@Dani",
      name:"Daniel",
      rating:"3",
      aboutme: "fjksdhfkjsdghifjriuthejifgykudfthfkjdh",
      phoneNumber:"67868709",
      email:"fjdjksfhks@gmial.com",
      expertise:["dsa","linkedList","graph"],
    }
   

  ]
}
