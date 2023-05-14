import React, { useState } from "react";
import styled from "styled-components";
import Wish from "./Wish";
import profileImg from "../../assets/setting/profile-img.svg";
import bt21Img from "../../assets/setting/bt21-img.svg";
import appearBT21 from "../../assets/setting/appear-bt21.svg";
import appearProfile from "../../assets/setting/appear-profile.svg";
import appearWish from "../../assets/setting/appear-wish.svg";
import appearWishTata from "../../assets/setting/appear-wish-tata.svg";

const ImgBox = styled.div`
  width: 301px;
  height: 181px;
  border-radius: 12px;
  margin: 26px 0 0 39.5px;
  box-sizing: border-box;
  padding: 40px 0 0 28px;

  .profile-txt {
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    margin: -0.7px 0 0 6px;
    position: absolute;
    cursor: pointer;
  }

  .bt21-txt {
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    margin: -0.7px 0 0 6px;
    position: absolute;
    cursor: pointer;
  }

  .BT21-box {
    margin-top: 34px;
  }

  .blue-line {
    width: 282px;
    height: 0.2px;
    background-color: #51606e;
    filter: blur(0.7px);
    margin: 34px 0 0 -19px;
  }
`;

const WhiteBg = styled.div`
  width: 301px;
  height: 181px;
  background-color: #fff;
  opacity: 30%;
  border-radius: 12px;
  margin: -40px 0px 0px -27.5px;
  position: absolute;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.18);
`;

const AppearImgBox = styled.div`
  @keyframes opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  position: absolute;
  margin-top: 363px;

  .appear-profile {
    position: absolute;
    margin: 30px 0 0 126px;
    filter: drop-shadow(0 0 50px rgba(255, 255, 255, 0.5));
    animation: opacity 0.08s linear;
  }

  .appear-bT21 {
    position: absolute;
    filter: drop-shadow(0 0 60px rgba(255, 255, 255, 0.4));
    animation: opacity 0.08s linear;
  }

  .appear-wish {
    position: absolute;
    filter: drop-shadow(0 0 60px rgba(255, 255, 255, 0.25));
    animation: opacity 0.08s linear;
  }
  .wish-tata {
    position: absolute;
    margin: -80px 0 0 35px;
    filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.28));
  }
`;

const AppearBg = styled.div`
  @keyframes opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  position: absolute;
  margin-top: -363px;
  width: 380px;
  height: 831px;
  background-color: rgba(0, 0, 0, 0.65);
  animation: opacity 0.08s linear;
`;

const Profile = () => {
  const [imgOpen, setImgOpen] = useState(false);
  const [appearImg, setAppearImg] = useState("");

  const onAppearProfile = () => {
    setAppearImg("appearProfile");
    setImgOpen(!imgOpen);
  };
  const onAppearBT21 = () => {
    setAppearImg("appearBt21");
    setImgOpen(!imgOpen);
  };

  const onImgOpen = () => {
    setImgOpen(!imgOpen);
  };

  return (
    <>
      <ImgBox>
        <WhiteBg></WhiteBg>
        <div>
          <img src={profileImg} alt="profile" />
          <span className="profile-txt" onClick={onAppearProfile}>
            프로필 사진 보기
          </span>
        </div>
        <div className="blue-line"></div>
        <div className="BT21-box">
          <img src={bt21Img} alt="BT21" />
          <span className="bt21-txt" onClick={onAppearBT21}>
            BT21 캐릭터 모두 보기
          </span>
        </div>
      </ImgBox>

      <Wish setAppearImg={setAppearImg} setImgOpen={setImgOpen} imgOpen={imgOpen} />

      <AppearImgBox>
        {imgOpen ? <AppearBg onClick={onImgOpen}></AppearBg> : null}
        {imgOpen && appearImg === "appearProfile" ? (
          <div className="appear-profile">
            <img src={appearProfile} alt="profile-img" />
          </div>
        ) : null}
        {imgOpen && appearImg === "appearBt21" ? (
          <div className="appear-bT21">
            <img src={appearBT21} alt="Bt21-img" />
          </div>
        ) : null}
        {imgOpen && appearImg === "appearWish" ? (
          <div className="appear-wish">
            <img className="wish-tata" src={appearWishTata} alt="wish-img" />
            <img src={appearWish} alt="wish-img" />
          </div>
        ) : null}
      </AppearImgBox>
    </>
  );
};

export default Profile;
