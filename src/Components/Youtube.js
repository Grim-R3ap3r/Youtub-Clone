import React from "react";
import thumb1 from "../Thumbnails/thumbnail-1.webp";
import thumb2 from "../Thumbnails/thumbnail-2.webp";
import thumb3 from "../Thumbnails/thumbnail-3.webp";
import thumb4 from "../Thumbnails/thumbnail-4.webp";
import thumb5 from "../Thumbnails/thumbnail-5.webp";
import thumb6 from "../Thumbnails/thumbnail-6.webp";
import channel1 from "../Thumbnails/channel-1.jpeg";
import channel2 from "../Thumbnails/channel-2.jpeg";
import channel3 from "../Thumbnails/channel-3.jpeg";
import channel4 from "../Thumbnails/channel-4.jpeg";
import channel5 from "../Thumbnails/channel-5.jpeg";
import hmenu from "../Thumbnails/hamburger-menu.svg";
import channel6 from "../Thumbnails/channel-6.jpeg";
import youtubelogo from "../Thumbnails/youtube-logo.svg";
import voiceicon from "../Thumbnails/voice-search-icon.svg";
import youtubeapps from "../Thumbnails/youtube-apps.svg";
import upload from "../Thumbnails/upload.svg";
import notify from "../Thumbnails/notifications.svg";
import channelpic from "../Thumbnails/my-channel.jpeg";
import search from "../Thumbnails/search.svg";

import "./Header.css";
import "./Youtube.css";
const Youtube = () => {
  return (
    <>
      <div className="header">
        <div className="left-section">
          <img className="hamburger" src={hmenu}></img>
          <img className="ytlogo" src={youtubelogo}></img>
        </div>
        <div className="middle-section">
          <input
            className="search-bar"
            type="text"
            placeholder="Search"
          ></input>
          <button className="search">
            <img className="search-icon" src={search}></img>
          </button>
          <button className="voiceicon">
            <img className="voices-icon" src={voiceicon}></img>
          </button>
        </div>
        <div className="right-section">
        <img className="upload-icon" src={upload}></img>
        <img className="youtubeapp-icon" src={youtubeapps}></img>
        <div className="notify-container">
        <img className="notify-icon" src={notify}></img>
        <div className="notification-count">3</div>
        </div>
        <img className="user-icon" src={channelpic}></img>


        </div>
      </div>

      <div className="sidebar">sidebar</div>

      <div className="video-grid">
        {/* thumb1 */}
        <div className="video-preview">
          <div className="thumbnail-row">
            <img className="thumbnail" src={thumb1}></img>
            <div className="video-time">14:20</div>
          </div>

          <div className="video-info-grid">
            <div className="channel-pic">
              <img className="profile-pic" src={channel1}></img>
            </div>

            <div className="video-info">
              <p className="video-titl">
                Talking Tech and AI with Google CEO Sundar Pichai!
              </p>
              <p className="video-autho">Marques Brownlee &#10003;</p>

              <p className="video-stat">3.4M views &#183; 6 months ago</p>
            </div>
          </div>
        </div>

        {/* thumb2 */}
        <div className="video-preview">
          <div className="thumbnail-row">
            <img className="thumbnail" src={thumb2}></img>
            <div className="video-time">8:22</div>
          </div>

          <div className="video-info-grid">
            <div className="channel-pic">
              <img className="profile-pic" src={channel2}></img>
            </div>

            <div className="video-info">
              <p className="video-titl">Try Not To Laugh Challenge #9</p>
              <p className="video-autho">Markiplier &#10003;</p>

              <p className="video-stat">19M views &#183; 4 years ago</p>
            </div>
          </div>
        </div>

        <div className="video-preview">
          <div className="thumbnail-row">
            <img className="thumbnail" src={thumb3}></img>
            <div className="video-time">9:13</div>
          </div>

          <div className="video-info-grid">
            <div className="channel-pic">
              <img className="profile-pic" src={channel3}></img>
            </div>

            <div className="video-info">
              <p className="video-titl">
                Crazy Tik Toks Taken Moments Before DISASTER
              </p>
              <p className="video-autho">SSSniperWolf &#10003;</p>

              <p className="video-stat">12M views &#183; 1 year ago</p>
            </div>
          </div>
        </div>

        {/* thumb2 */}
        <div className="video-preview">
          <div className="thumbnail-row">
            <img className="thumbnail" src={thumb4}></img>
            <div className="video-time">22:09</div>
          </div>

          <div className="video-info-grid">
            <div className="channel-pic">
              <img className="profile-pic" src={channel4}></img>
            </div>

            <div className="video-info">
              <p className="video-titl">
                The Simplest Math Problem No One Can Solve - Collatz Conjecture
              </p>
              <p className="video-autho">Veritasium &#10003;</p>

              <p className="video-stat">18M views &#183; 4 months ago</p>
            </div>
          </div>
        </div>

        <div className="video-preview">
          <div className="thumbnail-row">
            <img className="thumbnail" src={thumb5}></img>
            <div className="video-time">11:17</div>
          </div>

          <div className="video-info-grid">
            <div className="channel-pic">
              <img className="profile-pic" src={channel5}></img>
            </div>

            <div className="video-info">
              <p className="video-titl">
                Kadane's Algorithm to Maximum Sum Subarray Problem
              </p>
              <p className="video-autho">CS Dojo &#10003;</p>

              <p className="video-stat">519K views &#183; 5 years ago</p>
            </div>
          </div>
        </div>

        {/* thumb2 */}
        <div className="video-preview">
          <div className="thumbnail-row">
            <img className="thumbnail" src={thumb6}></img>
            <div className="video-time">19:59</div>
          </div>

          <div className="video-info-grid">
            <div className="channel-pic">
              <img className="profile-pic" src={channel6}></img>
            </div>

            <div className="video-info">
              <p className="video-titl">
                Anything You Can Fit In The Circle I’ll Pay For
              </p>
              <p className="video-autho">MrBeast &#10003;</p>

              <p className="video-stat">141M views &#183; 1 year ago</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Youtube;
