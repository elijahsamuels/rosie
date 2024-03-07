import React from "react";
import "./styles.css";


const introParagraph = `Welcome to Rosie's corner of the internet! Rosie is not just any ordinary pup; she's a charismatic canine with a heart of gold and a bundle of energy that never seems to wane. Let us introduce you to the wonderful world of Rosie.`;

const closingParagraph = `So come along and join Rosie on her adventures! Follow her journey as she navigates the world one wag of her tail at a time, and prepare to be captivated by the charm and charisma of this extraordinary pup.`;

const aboutRosie = `
Name: Rosie
Breed: Australian Cattle Dog, Husky, Catahoula Leopard Dog mix
Coat: Rosie boasts a sleek black coat adorned with striking brindle white boots and a chest that catches the eye of all who meet her. With her short hair, she's both stylish and low-maintenance, the perfect combination for an active lifestyle.
Tricks: Rosie is not your average dog when it comes to intelligence. She has mastered over twenty tricks, showcasing her sharp mind and eagerness to learn. Whether it's playing fetch with her ChuckIt wheel, rolling over, or even sleeping in the sun, Rosie is always ready to impress with her extensive repertoire of tricks.
Personality: What truly sets Rosie apart is her vibrant personality. She radiates love and affection, making friends wherever she goes. Her playful nature knows no bounds, and she's always up for a game of fetch or a romp in the park. But don't be fooled by her energetic demeanor; Rosie also has a gentle and nurturing side, making her the perfect cuddle buddy after a long day.
Mission: Rosie's mission is simple: to spread joy and positivity wherever she roams. Whether she's brightening up your Instagram feed with her adorable antics or bringing a smile to your face during a visit to the local dog park, Rosie is here to remind us all of the simple pleasures in life.`;



const About = () => {
  return (
    <div className='container'>
      <div className='title'>About Rosie</div>
			<p>{introParagraph}</p>
			<p>{aboutRosie}</p>
			<p>{closingParagraph}</p>
    </div>
  );
};

export default About;
