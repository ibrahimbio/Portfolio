import profile from '../image/profile.jpeg'
import styled from 'styled-components';


const Image = styled.img`

border: 1px solid #D8D9DA;
border-top-right-radius: 50px;
border-bottom-left-radius: 50px;
padding-top: 20px;

`

const Paragraph = styled.p`
    padding: 16px;
    text-align: justify;
    /* width: 680px; */
    width: clamp(0px, 95vw, 680px);
    margin: auto;
    box-sizing: border-box;
  
`

const About = () => {
    return (
<div className="about-container">
        <h2>About:</h2>

      <div className='image-contaner'>
        <Image src={profile} width="200" height="200" alt="photo" />
      </div>
      <section>
      <Paragraph>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
       nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
       reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
       pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
       qui officia deserunt mollit anim id est laborum."
      </Paragraph>
      </section>
      </div>
      );
}
 
export default About ;