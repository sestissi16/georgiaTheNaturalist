import Navigation from '../Components/navigation'
import flowerDivider from '../Media/blackFlowerDivider-Transparent-Cropped.png'
import flowerDivider2 from '../Media/blackFlowerThinDivider2-FullLine-Transparent.png'
import profilePic from '../Media/IDNR+Snake+Georgia.png'
import './About.css';

function Home() {
    
  return (
    <div className="About">
        <Navigation variant="light" />
        <div id="aboutContent">
            <div id="aboutMainDiv">
                <header className="aboutHeader">
                    <h1 id="aboutTitle">About Georgia</h1>
                    <img src={flowerDivider} id="aboutFlowerDivider" alt="Flowery dividing line" />
                </header>
                <div id="aboutProfilePicDiv">
                    <img src={profilePic} id="aboutProfilePic" alt="Georgia working for IDNR with a snake in their hands" />
                </div>
                <div id="aboutProfileTextDiv">
                    <p id="aboutParagraph1" className="aboutProfileParagraph">
                        My name is Georgia Tillotson and I am the creator of Georgia the Naturalist. 
                        I have had a passion for nature since I was very young. 
                        I would spend most of my summer days outside looking for snakes in my mother’s yard, and going on hikes with my older sister. 
                        People would often ask me who my hero was, or who I looked up to, and I would name the naturalist who would do programs on local T.V. 
                        I loved going to programming at our zoo and at the state park that was nearest to us, and thus grew my dream to one day become a naturalist myself. 
                    </p>
                    <img src={flowerDivider2} className="aboutParagraphDivider" alt="Different flowery dividing line" />
                    <p id="aboutParagraph2" className="aboutProfileParagraph">
                        I graduated from Earlham College with a Bachelor’s degree in Biology. 
                        I have worked in a museum, a science camp, 3 state parks, and at a nature center writing programs, interacting with the public, and learning. 
                        I have also worked at a small montessori-style school. 
                    </p>
                    <img src={flowerDivider2} className="aboutParagraphDivider" alt="Different flowery dividing line" />
                    <p id="aboutParagraph3" className="aboutProfileParagraph">
                        Being a naturalist means that I will never stop learning. My goal with every program is to get someone at least a little bit more excited about learning to love observing the world around them. 
                        I want to make sure that when I am leading a program, everyone feels heard and all questions are answered. 
                        A program should never be a lecture, but rather a conversation. 
                        I am so excited to be starting this business and to share my passion for nature with you! 
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Home;
