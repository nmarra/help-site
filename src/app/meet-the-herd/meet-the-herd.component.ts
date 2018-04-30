import { Component } from '@angular/core';

@Component({
  selector: 'app-meet-the-herd',
  templateUrl: './meet-the-herd.component.html',
  styleUrls: ['./meet-the-herd.component.scss']
})
export class MeetTheHerdComponent {

  herd = [
    {
      image: 'assets/herd/Regal.png',
      name: 'Regal',
      bio: 'Regal is our longest standing and oldest herd member at HELP.  He was donated to  HELP in September 2002 by Kay Smith. He is a 25 year old registered American Quarter Horse (AQHA) gelding whose full name is Lucky\'s Regal Cresent. He\'s our "steady Eddy," with a solid stance to hold any unbalanced rider. Regal is our go to for beginner clients as he also has incredible patience.  Regal loves his clients and turns it on to help them gain their independence. He loves to roll in the mud and scratch his belly while laying on the ground. Most days, he enjoys munching on grass and napping. Regal is sponsored now by Debbie and Paul Trylko.'
    },
    {
      image: 'assets/herd/Jake.png',
      name: 'Jake',
      bio: ' Jake is a black bay Percheron cross gelding who came to HELP in April 2010. He has a sweet personality and is eager to please. At 16.3 hands and 1400 pounds, he is the tallest and largest of our horses. While Jake\'s height makes him quite intimidating, he is truly a gentle giant. Jake is sponsored by Kristen Carey.'
},
    {
      image: 'assets/herd/Rooster.png',
      name: 'Rooster',
      bio: 'Rooster joined HELP in April of 2010, along with Jake. Friends of a HELP client understood how much HELP made a difference in our riders lives, so when they rescued Rooster and Jake, and had them rehabilitated and trained to be therapy horses, they donated them to the organization. Rooster loves to play jollyball with his buddy Jake. Don\'t let his small size fool you, he rules the pasture!'
    },
    {
      image: 'assets/herd/Mistee.jpg',
      name: 'Mistee',
      bio: 'Mistee was donated to HELP in November 2015 by Erin Snyder and her daughter. She is a registered American Quarter Horse (AQHA) mare whose full name is Miss Tee Dee Bar. She is 23 years old now, but does not seem to know it. Her forward and smooth gait helps riders at the walk and trot work on their riding skills.  She\'s sensitive to her rider and volunteers and knows just how much patience from her they need. Mistee is looking for a sponsor!  Click above to start HELPing today.'
    },
    {
      image: 'assets/herd/jacktess.jpg',
      name: 'Jack and Tess',
      bio: 'Jack and Tess were rescues from the Alvin, TX area in 2005 and came to HELP in 2008.  They have since become the resident herd protectors.  As progress closes in around us, coyotes are common visitors at night. Jack and Tess run them out of the field as part of their natural instincts. Jack  thinks of himself as the official welcoming committee and will let out a loud bray to welcome you to his home.'
    }
  ]
}
