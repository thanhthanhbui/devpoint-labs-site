import React from "react";
import {
  Button,
  Image,
  Icon
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import { media } from "../../theme/media";
import styled from "styled-components";
import teamimage from "../../assets/images/teamphoto.png";

const Topimages = () => {
  return (
    <>
      <OvrP>
        <TeamImage src={teamimage} />
        <TagText>DEVPOINT LABS | WEB DEVELOPMENT</TagText>
        <TeamText>Part-time Web Development</TeamText>
        <TeamMeta>
          Learn why we're the best at what we do and why we're regarded <br />{" "}
          as one of the best in the edtech industry today.
        </TeamMeta>
        <ButtonStyle primary size="big">
          <ButtLink href="/ApplicationsForm">Apply Now</ButtLink>
        </ButtonStyle>
      </OvrP>
      <BannerTwo>
        <Icon name="radio" size="huge" />
        <BTHead>DevPoint lab's 11 week</BTHead>
        <BTFont>
          More than just code. Whether you’re a local or coming from
          out-of-state <br /> we blend students into a vibrant developer
          community <br />
          building life long friendships.
        </BTFont>
      </BannerTwo>
      <BECont>
        <BEHead>
          A Day in the life at <br /> DevPoint Labs
        </BEHead>
        <Link
          to="/ApplicationsForm"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "16px",
            fontWeight: "600"
          }}
        >
          Apply Now >
        </Link>
      </BECont>
    </>
  );
};

const BECont = styled.div`
  background: #26abff;
  opacity: 0.8;
  height: 580px;
  padding-left: 100px;
  padding-top: 100px;
  ${media.phone`
    margin: auto
  `}
`;

const BEHead = styled.p`
  font-size: 42px;
  font-weight: 600;
  color: white;
`;

const BTFont = styled.p`
  font-size: 16px;
  font-weight: 200;
  line-height: 1.5;
`;

const BTHead = styled.p`
  font-size: 34px;
  font-weight: 600;
`;

const BannerTwo = styled.div`
  height: 350px;
  display: block;
  padding: 70px;
  text-align: center;
  ${media.phone`
    margin-bottom: 200px
  `}
`;

const ButtLink = styled.a`
  text-decoration: none;
  color: white;
  ${media.tablet`
    font-size: 1em

  `}
  ${media.phone`
    font-size: 1em;
  `}
`;

const TagText = styled.text`
  font-size: 20px;
  color: white;
  font-weight: 600;
  position: absolute;
  text-align: center;
  top: 32%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${media.tablet`
    font-size: 1em
  `}
  ${media.phone`
    font-size: 1em
    padding-bottom: 50px
  `}
  ${media.desktop`
    font-size: 1em
    padding-top: 0
  `}
  ${media.giant`
    font-size: 1em
    padding-top: 0
  `}
`;

const TeamMeta = styled.text`
  font-size: 24px;
  color: white;
  font-weight: 400;
  position: absolute;
  text-align: center;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  ${media.tablet`
    font-size: 1em
    line-spacing: 1.5
    top: 300px
  `}
  ${media.phone`
    font-size: 1em
    line-spacing: 1.5
    top: 300px
  `}
  ${media.desktop`
    font-size: 55px
    padding-top: 0
  `}
  ${media.giant`
    font-size: 1.2em
    padding-top: 0
  `}
`;

const TeamText = styled.text`
  z-index: 0;
  font-size: 55px;
  font-weight: 600;
  position: absolute;
  text-align: center;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  ${media.tablet`
    font-size: 1em
  `}
  ${media.phone`
    font-size: 1em
    padding-bottom: 40px
  `}
  ${media.desktop`
    font-size: 55px
    padding-top: 0
  `}
  ${media.giant`
    font-size: 1.5em
    padding-top: 0
  `}
`;

const OvrP = styled.div`
  position: relative;
  background: #141414;
  opacity: 0.9;
  ${media.tablet`
  height: 500px;
  width: auto;
  opacity: 1
  `}
  ${media.phone`
    height: 500px;
    width: auto;
  `}
`;

const TeamImage = styled(Image)`
  position: absolute
  width: 100%;
  height: auto;
  opacity: .3;
  z-index: -1;
  ${media.phone`
    position: relative
    display: none;
  `}
`;

const ButtonStyle = styled(Button)`
  color: white;
  font-weight: 400;
  position: absolute;
  text-align: center;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Topimages;
