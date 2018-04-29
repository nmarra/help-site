import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meet-the-staff',
  templateUrl: './meet-the-staff.component.html',
  styleUrls: ['./meet-the-staff.component.scss']
})
export class MeetTheStaffComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  staff = [
    { image: 'assets/staff/StephaniePowell.jpg',
      name: 'Stephanie Powell, Executive Director',
      bio: '<p>Stephanie is a <strong>PATH International Registered Therapeutic Riding Instructor</strong>, <strong>Certified Equine Specialist in Mental Health and Learning</strong>, and a <strong>Certified Special Olympics Equestrian Coach</strong>. Starting at a young age she caught the horse-loving bug. Her riding education began early thanks to her Aunt Jerrie and continued with over 8 years of hunter/jumper lessons in Manor, Texas, including show experience in TSSA, CenTex, and CTHJA.Combining her love for horses and helping others, she became involved in therapeutic riding in 2009 at ROCK in Georgetown and earned her instructor certification in January 2010. Her time at ROCK led to opportunities working with at-risk youth, veterans, summer camps, and a chemical dependency program.</p>' +
      '<p>With a passion for partnering horses with humans and a focus on horsemanship, her teaching style encourages the connection between horse and rider from the first lesson onward.</p>' +
      '<p>In her spare time Stephanie enjoys time at the beaches of Texas and with her nearby family in Georgetown and Jarrell.</p>'
    },
    { image: 'assets/staff/MickiEubanks.jpg',
      name: 'Micki Eubanks',
      bio: '<p>Micki has volunteered at HELP since 2006, and served on the board since 2009. She and her mare, Shasta, enjoy riding trails around her home in Taylor.</p>'
    },
    {
    name: 'Kirk Zippe',
    image: 'assets/staff/KirkZippe.jpg',
      bio: '<p>Kirk has been a volunteer at HELP since 1999 and  President of the board since 2009. He welcomes you to HELP and looks forward to sharing the  wonderful and memorable experiences you and your child will have riding with  us.</p>' +
      '<p>His son Auggie started riding with HELP in 1999 at age 2, and rode there for 13 years. He has since graduated and continues to ride at an  equestrian center without assistance. Now 20, he continues to learn to ride English and is trotting and jumping on his own.</p>'
    },
    {
    name: 'Joshua Wilson',
    image: 'assets/staff/JoshuaWilson.jpg',
      bio: '<p>Joshua attended Texas A&amp;M University and graduated in 2005 with degrees in History and Psychology. Joshua has been practicing law in Travis and Williamson Counties since graduating St. Mary\'s University School of Law in 2013.  Joshua\'s focus is <a href="https://jdwilsonlawfirm.com/estate-planning-law/" target="_blank">Estate Planning</a>, <a href="https://jdwilsonlawfirm.com/probate-law/" target="_blank">Probate</a>, and <a href="https://jdwilsonlawfirm.com/business-law/" target="_blank">Small Business Services</a>. Joshua has an extensive background in insurance issues after working in corporate insurance for several years prior to law school and insurance coverage litigation prior to founding The J. D. Wilson Law Firm, PLLC. As a small business owner, Joshua understands the unique challenges facing small business owners. Joshua lives in Pflugerville with his wife and four dogs. In his free time, Joshua volunteers as a board member for HELP, a non-profit therapeutic riding center in Austin, enjoys outdoor activities, reading history, and shooting sports.</p>'
    },
    {
    name: 'Caitlin Admire',
    image: 'assets/staff/CaitlinAdmire.jpg',
      bio: '<p>Caitlin has been around horses for over 20 years. She grew up showing AQHA and hunter/jumpers with her big redheaded ex-racehorse, Dollar. Her passion for therapeutic riding began in college when she worked at a stable that also housed a therapeutic riding program. Along with riding for the stable, she began helping with the therapy classes, carrying out lesson plans provided by the PATH certified head trainer.</p> ' +
      '<p>She went to college at Kansas State University and earned her Master’s Degree in Landscape Architecture and a certificate in Pre-Veterinary Equine Science. Her first internship in the architecture world was with an equestrian architecture firm that focused solely on designing equestrian facilities throughout the country. She now works as an urban designer and campus planner for the local office of international architecture firm, Perkins+Will.</p>' +
      '<p>Caitlin has lived in Austin since 2014, currently serves as a board member for HELP and rides just around the corner at Manor Equestrian Center.  When she’s not at the barn, Caitlin can be found with her husband working on their renovated 1970’s bungalow in South Austin, spoiling their two rescue pups, and supporting the local food and beverage scene around town.</p>'
    },
    {
      name: 'Beau Whitaker, DVM',
      image: 'assets/staff/BeauWhitaker.jpg',
      bio: '<p>Dr. Beau Whitaker grew up near Nashville, Tennessee working on his family\'s farm. Prior to attending veterinary school, he trained halter horses professionally in north Texas. Beau graduated from Texas A&M University College of Veterinary Medicine in 2005. Upon graduation, he completed an internship at Arizona Equine in Gilbert, Arizona. Subsequently, Beau then worked as a veterinarian at the 6666\'s Ranch in Guthrie, Texas. Beau moved to Salado, Texas, and joined Dr. T’s Equine Clinic (now Brazos Valley Equine Hospital, Salado) in 2007, where he established a busy lameness and sports medicine clientele. Beau is interested in equine rehabilitation and received his Certification in Equine Rehabilitation Therapy (CERT) in 2014 from the University of Tennessee.</p>'
    }
  ]

}
