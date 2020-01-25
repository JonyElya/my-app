import React from "react";
import style from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={style.description_image}>
        <img
          src="https://www.decoidees.be/wp-content/uploads/2019/07/bleumajorelleslider-1000x650.jpg"
          alt=""
        />
      </div>
      <div className={style.description_block}>ava</div>
    </div>
  );
};
export default ProfileInfo;
