import styled from "styled-components";

export const Description = styled.section`
  font-size: 1.2rem;
  line-height: 1.5;
`;

export const PageSection = styled.section`
  font-size: 1.2rem;
  line-height: 1.5;
  padding-top: 1px;
`;

export const PageTitle = styled.h2`
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 1rem 0;
`;

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const ListItem = styled.li`
  margin: 0 0 1.25rem;
`;

export const LightText = styled.small`
  color: #999;
`;

export const ProfileImage = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 9999px;
`;

export const Heading2x1 = styled.h1`
  font-size: 2.5rem;
  line-height: 1.2;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
`;

  
//   .headingXl {
//     font-size: 2rem;
//     line-height: 1.3;
//     font-weight: 800;
//     letter-spacing: -0.05rem;
//     margin: 1rem 0;
//   }
  
//   .headingLg {
//     font-size: 1.5rem;
//     line-height: 1.4;
//     margin: 1rem 0;
//   }
  
//   .colorInherit {
//     color: inherit;
//   }
  
//   .padding1px {
//     padding-top: 1px;
//   }

//   /* About me styles */

//   .skills {
//     list-style-type: none;
//   }

//   .aboutme {
//     font-size: 18px;
//   }


// @media(max-width: 560px){
//   .heading2Xl{
//     font-size: 1.5rem;
//   }
// }

// /* Contato */

export const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const ContactItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
`;

export const ContactLink = styled.a`
  text-align: center;
  font-size: 18px;
  color: black;
`;