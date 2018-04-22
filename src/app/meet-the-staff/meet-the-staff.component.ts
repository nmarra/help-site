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
      bio: 'Stephanie is a PATH International Registered Therapeutic Riding Instructor, Certified Equine Specialist in Mental Health and Learning, and  a Certified  Special Olympics Equestrian Coach. Starting  at a young age she caught the horse-loving bug. Her riding education began early and continued with over 8 years of hunter/jumper lessons in Manor, Texas, including show experience in TSSA, CenTex, and CTHJA.  Combining her love for horses and helping others, she became involved in therapeutic riding. This led to opportunities to work with at-risk youth, Horses for Heroes, summer camps, and a chemical dependency program.  With a passion for  partnering horses with humans and a focus on horsemanship, her teaching style encourages  the connection between horse and rider from the very beginning.  Her herd includes an 18-year-old thoroughbred gelding  named Pencil and a cat.'
    },
    { image: 'assets/staff/MickiEubanks.jpg',
      name: 'Micki Eubanks',
      bio: 'Micki has volunteered at HELP since 2006, and served on the board since 2009. She and her mare, Shasta, enjoy riding trails around her home in Taylor.'
    },
    {
    name: 'Beau Whitaker, DVM',
    image: 'assets/staff/BeauWhitaker.jpg',
     bio: 'Dr. Beau Whitaker grew up near Nashville, Tennessee working on his family\'s farm. Prior to attending veterinary school, he trained halter horses professionally in north Texas. Beau graduated from Texas A&M University College of Veterinary Medicine in 2005. Upon graduation, he completed an internship at Arizona Equine in Gilbert, Arizona. Subsequently, Beau then worked as a veterinarian at the 6666\'s Ranch in Guthrie, Texas. Beau moved to Salado, Texas, and joined Dr. T’s Equine Clinic (now Brazos Valley Equine Hospital, Salado) in 2007, where he established a busy lameness and sports medicine clientele. Beau is interested in equine rehabilitation and received his Certification in Equine Rehabilitation Therapy (CERT) in 2014 from the University of Tennessee. '
    },
    {
    name: 'Kirk Zippe',
    image: 'assets/staff/KirkZippe.jpg',
      bio: 'Kirk has been a volunteer at HELP since 1999 and  President of the board since 2009. He welcomes you to HELP and looks forward to sharing the  wonderful and memorable experiences you and your child will have riding with  us.  His son Auggie started riding with HELP in 1999 at age 2, and rode there for 13 years. He has since graduated and continues to ride at an  equestrian center without assistance. Now 20, he continues to learn to ride English and is trotting and jumping on his own.'
    },
    {
    name: 'Joshua Wilson',
    image: 'assets/staff/JoshuaWilson.jpg',
      bio: 'Joshua attended Texas A&amp;M University and graduated in 2005 with degrees in History and Psychology. Joshua has been practicing law in Travis and Williamson Counties since graduating St. Mary\'s University School of Law in 2013. Joshua\'s focus is Estate Planning, Probate, and Small Business Services. Joshua has an extensive background in insurance issues after working in corporate insurance for several years prior to law school and insurance coverage litigation prior to founding The J. D. Wilson Law Firm, PLLC. As a small business owner, Joshua understands the unique challenges facing small business owners. Joshua lives in Pflugerville with his wife and four dogs. In his free time, Joshua volunteers as a board member for HELP, a non-profit therapeutic riding center in Austin, enjoys outdoor activities, reading history, and shooting sports.'
    },
    {
    name: 'Caitlin Admire',
    image: 'assets/staff/CaitlinAdmire.jpg',
      bio: 'Caitlin has been around horses for over 20 years. She grew up showing AQHA and hunter/jumpers with her big redheaded ex-racehorse, Dollar. Her passion for therapeutic riding began in college when she worked at a stable that also housed a therapeutic riding program. Along with riding for the stable, she began helping with the therapy classes, carrying out lesson plans provided by the PATH certified head trainer.  She went to college at Kansas State University and earned her Master’s Degree in Landscape Architecture and a certificate in Pre-Veterinary Equine Science. Her first internship in the architecture world was with an equestrian architecture firm that focused solely on designing equestrian facilities throughout the country. She now works as an urban designer and campus planner for the local office of international architecture firm, Perkins+Will.  Caitlin has lived in Austin since 2014, currently serves as a board member for HELP and rides just around the corner at Manor Equestrian Center.  When she’s not at the barn, Caitlin can be found with her husband working on their renovated 1970’s bungalow in South Austin, spoiling their two rescue pups, and supporting the local food and beverage scene around town.'
    }
  ]

}
