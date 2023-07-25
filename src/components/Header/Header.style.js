import { styled } from "styled-components";

export const StyledHeader = styled.div`

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.parent {
    display: grid;
    width:100%;
    }

    .div1 { grid-area: 1 / 1 / 4 / 4;
            /* background-image: url(https://admin.evos.uz/uploads/collage1_0859c4cd9c.png) ;
            background-repeat:no-repeat;
            background-position:center;
         */
    }
    .div2 { grid-area: 4 / 1 / 6 / 4;
            /* background-image: url(https://admin.evos.uz/uploads/collage4_17263ab10c.png) ;
            background-repeat:no-repeat;
            background-position:center; */
  
    }
    .div3 { grid-area: 1 / 4 / 4 / 6; 
            /* background-image: url(https://admin.evos.uz/uploads/collage2_5573572481.png) ;
            background-repeat:no-repeat;
            background-position:center; */
    }
    .div4 { grid-area: 4 / 4 / 6 / 6; 
            /* background-image: url(https://admin.evos.uz/uploads/collage4_17263ab10c.png) ;
            background-repeat:no-repeat;
            background-position:center; */
    }

`