
import React from "react";
import GitHubCalendar from "react-github-calendar";
import styled from 'styled-components'
const A = styled.div`
      border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    width: 80%;
    height: auto;
    margin: auto;
    gap: 20px;
    border: 0.1px solid #306EE8;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    @media only screen and (max-width: 768px){
        border:0px solid red;
        width: 80%;
        height: 700px;
        margin: auto;
    }
    
`

const B= styled.div`
      border:0px solid yellow;
    width: 100%;
    height: 200px;
    display: flex;
    margin-bottom: 40px;
    justify-content: space-evenly;
    @media screen and(max-width:768px){
        border:0px solid yellow;
        width: 50%;
        height: 300px;
    }
`
const Gitname= styled.h1`
    color: #f2f3f4;
    margin-left: 40%;
    margin-bottom: 20px;
`

const Cal= styled.div`
        border:1px solid white;
   display: flex;
    color: white;
    margin: auto;
    border-radius: 10px;
    padding: 10px;
    justify-content: center;
`
const S= styled.img`
    height: 200px;
    margin: auto;
    margin-top: 25px;
`

const Github = () => {
  return (
 <A>
         <Gitname>My Github Stats</Gitname>
         <div>
    <B>
        <S id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=gitusergb&show_icons=true&locale=en&theme=transparent&card_width=500px" alt="one" />
 
        <S id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com?user=gitusergb&theme=dark&border_radius=10&date_format=%5BY%20%5DM%20j&card_width=498&stroke=F2F3F4&ring=854CE6&fire=FF712A&currStreakLabel=FF712A" alt="two" />
    
    </B>
    <Cal className="react-activity-calendar">
    <GitHubCalendar
                username="gitusergb"
                blockSize={10}
                blockMargin={6}
                color={"#8148e6"}/> 
    </Cal>
    </div>
 </A>
  );
};

export default Github;