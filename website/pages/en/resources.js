/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

const React = require("react");
const CompLibrary = require("../../core/CompLibrary.js");
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */

const CWD = process.cwd();
const siteConfig = require(CWD + '/siteConfig.js');
const versions = require(CWD + '/versions.json');

const docsUrl = siteConfig.url + siteConfig.baseUrl;
const repoUrl = siteConfig.repoUrl;

const textContent = {
  introtext: `
  `,
};

class Resources extends React.Component {
  render() {

    let currentVersion = versions.length > 0 ? versions[0] : null;
    let latestVersions = ['next'].concat(
      versions.filter(version => version.indexOf('-RC') !== -1)
    );
    const stableVersions = versions.filter(
      version => version.indexOf('-RC') === -1
    );

    const { config: siteConfig, language = "" } = this.props;
    const { baseUrl } = siteConfig;

    const VideoCardItem = ({ videolength, videotitle, videotype, videodifficulty, speakername, imgurl, videodisc}) => (

        <div className="videocard large">
            <div style={{position: 'relative'}}>
              <div style={{maxWidth: '100%', maxHeight: '100%'}}>
                <img src={imgurl} alt="videoimg"/>
              </div>
              <div className="videocardlengthtip">
                <div>
                  <div className="videocardtipbackground">
                    <div>
                        <img src="./img/homepage/timeicon.png" alt="timeicon"/>
                    </div>
                    <div>
                      <p style={{color: '#fff', marginLeft: 8, marginTop: 4, fontSize: 14}}>{videolength}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="videocardcontent">
              <div className="videocardheader">
                <p style={{fontsize: 46, fontWeight: 700}}>{videotitle}</p>
                <div className="videocardinfo">
                  <p style={{fontSize: 14}}>{videotype}</p>
                  <div className="subtitledot"/>
                  <p style={{fontSize: 14}}>{videodifficulty}</p>
                </div>
                <p className="discriptionadjust" style={{textOverflow: 'ellipsis', maxWidth: '100%', display: 'block', overflow: 'hidden', whiteSpace: 'normal'}}>{videodisc}</p>
              </div>
              <div className="videocarddriverinfo" style={{color: '#0e53bd'}}>
                <a href={"https://twitter.com/" + speakername}>
                  <div className="row">
                    <div style={{display: 'inline-block'}}>
                        <img style={{borderRadius: '50%', width: '32px', height: '32px'}} src={"https://avatars.io/twitter/" + speakername} alt="speakericon"/>
                    </div>
                    <div style={{display: 'inline-block', marginLeft: 5}}>
                      <div>@{speakername}</div>
                    </div>
                  </div>

                </a>
              </div>
            </div>
        </div>
    );

    const Section = ({ children, className, background = "light" }) => (
      <section className={`Section ${className} ${background}`}>
        {children}
      </section>
    );

    const VideoCardList = () => (
      <Section background="tint">
        <div className="content">
          <MarkdownBlock>{textContent.introtext}</MarkdownBlock>
          <div className="row">
              <VideoCardItem
                videolength="10 mins"
                videotitle="Community Modules for Mac"
                videotype="Walkthrough"
                videodifficulty="Beginner"
                speakername="alloy"
                imgurl="./img/homepage/eloy_rn4m_preview_full.png"
                videodisc="Set up your Mac environment to build React Native for MacOS apps, as well as how to install community modules."/>
              <VideoCardItem
                videolength="0 mins"
                videotitle="Example Card"
                videotype="Type of Video"
                videodifficulty="Difficulty"
                speakername="reactwindows"
                imgurl="./img/homepage/video_learning_image-small.png"
                videodisc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
          </div>
        </div>
      </Section>
    );

    return (
      <div className="homepage">
        <Section background="tint">
          <div className="content">
            <h2>Compehensive resources list coming soon!</h2>
          </div>
        </Section>
      </div>
    );
  }
}

module.exports = Resources;
