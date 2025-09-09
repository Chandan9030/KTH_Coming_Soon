import React from "react";
import styled, { keyframes } from "styled-components";

// Full-screen overlay
const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// Stroke line drawing
const draw = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`;

// Fill fade-in
const fillIn = keyframes`
  from { fill: transparent; opacity: 0; }
  to { fill: #fb923c; opacity: 1; }
`;

const SvgText = styled.svg`
  width: 340px;
  height: 160px;
`;

const StrokeText = styled.text`
  font-size: 100px;
  font-weight: 900;
  letter-spacing: 15px;
  font-family: Arial, Helvetica, sans-serif;

  stroke: #fb923c;
  stroke-width: 3;
  stroke-linejoin: round;
  stroke-linecap: round;
  fill: transparent;

  stroke-dasharray: 1000;
  stroke-dashoffset: 1000;
  animation: ${draw} 2.5s ease forwards;
`;

const FillText = styled.text`
  font-size: 100px;
  font-weight: 900;
  letter-spacing: 15px;
  font-family: Arial, Helvetica, sans-serif;

  fill: #fb923c;
  opacity: 0;
  animation: ${fillIn} 1s ease forwards;
  animation-delay: 2.5s; /* stroke ke baad fill aayega */
`;

const Loader = () => {
  return (
    <Overlay>
      <SvgText viewBox="0 0 400 150">
        {/* Fill Layer (under) */}
        <FillText x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
          KTH
        </FillText>

        {/* Stroke Layer (on top) */}
        <StrokeText x="50%" y="50%" textAnchor="middle" dominantBaseline="middle">
          KTH
        </StrokeText>
      </SvgText>
    </Overlay>
  );
};

export default Loader;





// import React from "react";
// import styled, { keyframes } from "styled-components";

// // Full-screen overlay
// const Overlay = styled.div`
//   position: fixed;
//   inset: 0;
//   z-index: 9999;
//   background: #000;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// // Stroke line drawing animation
// const draw = keyframes`
//   to {
//     stroke-dashoffset: 0;
//   }
// `;

// // Fill fade-in animation
// const fillIn = keyframes`
//   from { fill: transparent; }
//   to { fill: #005BAC; }
// `;

// // Container for the logo
// const LogoContainer = styled.div`
//   width: 340px;
//   height: 190px;
//   position: relative;
// `;

// // SVG styling
// const StyledSVG = styled.svg`
//   width: 100%;
//   height: 100%;
  
//   // Animate the KTH letters
//   .kth-letter {
//     stroke: #005BAC;
//     stroke-width: 3;
//     stroke-linejoin: round;
//     stroke-linecap: round;
//     fill: transparent;
//     stroke-dasharray: 1000;
//     stroke-dashoffset: 1000;
//     animation: ${draw} 2.5s ease forwards;
//   }
  
//   // Animate the crown
//   .crown {
//     stroke: #005BAC;
//     stroke-width: 2;
//     stroke-linejoin: round;
//     stroke-linecap: round;
//     fill: transparent;
//     stroke-dasharray: 1500;
//     stroke-dashoffset: 1500;
//     animation: ${draw} 3s ease forwards;
//   }
  
//   // Fill animation for letters
//   .kth-fill {
//     fill: #005BAC;
//     opacity: 0;
//     animation: ${fillIn} 1s ease forwards;
//     animation-delay: 2.5s;
//   }
  
//   // Fill animation for crown
//   .crown-fill {
//     fill: #005BAC;
//     opacity: 0;
//     animation: ${fillIn} 1s ease forwards;
//     animation-delay: 3s;
//   }
// `;

// const Loader = () => {
//   return (
//     <Overlay>
//       <LogoContainer>
//         <StyledSVG viewBox="0 0 962 536" xmlns="http://www.w3.org/2000/svg">
//           {/* Crown outline */}
//           <path class="crown" d="M481,130L320,310l50-90L250,310l50-90L180,310l60-90L100,360h762L722,220l60,90-60-90l50,90-50-90l50,90-50-90L642,220l50,90L581,130" />
          
//           {/* Crown fill */}
//           <path class="crown-fill" d="M481,130L320,310l50-90L250,310l50-90L180,310l60-90L100,360h762L722,220l60,90-60-90l50,90-50-90l50,90-50-90L642,220l50,90L581,130" />
          
//           {/* K letter */}
//           <path class="kth-letter" d="M200,450V200h40v100h80L240,200l80,120l80-120l-80,120h80V200h40v250h-40V280h-80l80,120l-80-120l-80,120l80-120h-80v170h-40" />
          
//           {/* T letter */}
//           <path class="kth-letter" d="M400,450V200h160v40H440v210h-40" />
          
//           {/* H letter */}
//           <path class="kth-letter" d="M600,450V200h40v210h80v40h-120" />
          
//           {/* K fill */}
//           <path class="kth-fill" d="M200,450V200h40v100h80L240,200l80,120l80-120l-80,120h80V200h40v250h-40V280h-80l80,120l-80-120l-80,120l80-120h-80v170h-40" />
          
//           {/* T fill */}
//           <path class="kth-fill" d="M400,450V200h160v40H440v210h-40" />
          
//           {/* H fill */}
//           <path class="kth-fill" d="M600,450V200h40v210h80v40h-120" />
//         </StyledSVG>
//       </LogoContainer>
//     </Overlay>
//   );
// };

// export default Loader;