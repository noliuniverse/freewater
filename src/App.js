// https://github.com/lhz516/react-h5-audio-player#readme
// https://www.bensound.com/
import "./styles.css";
import { useState, useEffect } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import lyricsRawData from "./data/lyrics.json"
// songs
import MAG_IL from "./music/ARTIST_ILLIT/illit1/Magnetic.mp3"
import MYW_IL from "./music/ARTIST_ILLIT/illit1/My World.mp3"
import MID_IL from "./music/ARTIST_ILLIT/illit1/Midnight Fiction.mp3"
import LUC_IL from "./music/ARTIST_ILLIT/illit1/Lucky Girl Syndrome.mp3"

import TEL_FI from "./music/ARTIST_FIFTYFIFTY/fiftyfifty1/Fifty Fifty - Tell Me.mp3"
import LOV_FI from "./music/ARTIST_FIFTYFIFTY/fiftyfifty1/Fifty Fifty - Lovin-' Me.mp3"
import HIG_FI from "./music/ARTIST_FIFTYFIFTY/fiftyfifty1/Fifty Fifty - Higher.mp3"
import LOG_FI from "./music/ARTIST_FIFTYFIFTY/fiftyfifty1/Fifty Fifty - Log in.mp3"
import CUP_FI from "./music/ARTIST_FIFTYFIFTY/fiftyfifty2/Fifty Fifty - Cupid.mp3"
import CUPT_FI from "./music/ARTIST_FIFTYFIFTY/fiftyfifty2/Fifty Fifty - Cupid (Twin Ver.).mp3"

import COO_NE from "./music/ARTIST_NEWJEANS/newjeans1/NewJeans - Cookie.mp3"
import HUR_NE from "./music/ARTIST_NEWJEANS/newjeans1/NewJeans - Hurt.mp3"
import HYP_NE from "./music/ARTIST_NEWJEANS/newjeans1/NewJeans - Hype Boy.mp3"
import ATT_NE from "./music/ARTIST_NEWJEANS/newjeans1/NewJeans - Attention.mp3"
import OMG_NE from "./music/ARTIST_NEWJEANS/newjeans2/NewJeans - OMG.mp3"
import DIT_NE from "./music/ARTIST_NEWJEANS/newjeans2/NewJeans - Ditto.mp3"
import GET_NE from "./music/ARTIST_NEWJEANS/newjeans3/NewJeans - Get Up.mp3"
import COO1_NE from "./music/ARTIST_NEWJEANS/newjeans3/NewJeans - Cool With You.mp3"
import SUP_NE from "./music/ARTIST_NEWJEANS/newjeans3/NewJeans - Super Shy.mp3"
import NEW_NE from "./music/ARTIST_NEWJEANS/newjeans3/NewJeans - New Jeans.mp3"
import ASA_NE from "./music/ARTIST_NEWJEANS/newjeans3/NewJeans - ASAP.mp3"
import ETA_NE from "./music/ARTIST_NEWJEANS/newjeans3/NewJeans - ETA.mp3"

import ILL_TX from "./music/ARTIST_TXT/txt31/I’ll See You There Tomorrow.mp3"
import MIR_TX from "./music/ARTIST_TXT/txt31/Miracle.mp3"
import QUA_TX from "./music/ARTIST_TXT/txt31/Quarter Life.mp3"
import DASH_TX from "./music/ARTIST_TXT/txt31/- --- -- --- .-. .-. --- .--.mp3"
import DEJR_TX from "./music/ARTIST_TXT/txt31/Deja Vu (Anemoia Remix).mp3"
import THE_TX from "./music/ARTIST_TXT/txt31/The Killa (I Belong to You).mp3"
import DEJ_TX from "./music/ARTIST_TXT/txt31/Deja Vu.mp3"


import YO_IL from "./music/etc/YoYo.mp3"


export default function App() {
  const [lyricsOpen, setLyricOpen] = useState(false);

  const [lyricsData, setLyricData] = useState([]);
  const [streams, setStreams] = useState({});
  useEffect(() => {
    setLyricData(lyricsRawData);
    if (JSON.parse(localStorage.getItem("streams")) == null) {
      localStorage.setItem("streams", JSON.stringify({}))
      setStreams({})
    }
  }, []);
  
  const albumsStylized = {
    "super real me (1)" : "Super Real Me",
    "the fifty (1)" : "THE FIFTY",
    "the beginning: cupid (1)" : "The Beginning: Cupid"
  };
  const musicTracks = [
    {
      name: "My World",
      artist: "ILLIT",
      album: "Super Real Me (1)",
      uiid: "MA_1_IL_1",
      src: MYW_IL
    },
    {
      name: "Magnetic",
      artist: "ILLIT",
      album: "Super Real Me (1)",
      uiid: "MA_1_IL_2",
      src: MAG_IL
    },
    {
      name: "Midnight Fiction",
      artist: "ILLIT",
      album: "Super Real Me (1)",
      uiid: "MA_1_IL_3",
      src: MID_IL
    },
    {
      name: "Lucky Girl Syndrome",
      artist: "ILLIT",
      album: "Super Real Me (1)",
      uiid: "MA_1_IL_4",
      src: LUC_IL
    },
    {
      name: "Tell Me",
      artist: "FIFTY FIFTY",
      album: "The Fifty (1)",
      uiid: "TH_1_FI_1",
      src: TEL_FI
    },
    {
      name: "Lovin' Me",
      artist: "FIFTY FIFTY",
      album: "The Fifty (1)",
      uiid: "TH_1_FI_2",
      src: LOV_FI
    },
    {
      name: "Higher",
      artist: "FIFTY FIFTY",
      album: "The Fifty (1)",
      uiid: "TH_1_FI_3",
      src: HIG_FI
    },
    {
      name: "Log In",
      artist: "FIFTY FIFTY",
      album: "The Fifty (1)",
      uiid: "TH_1_FI_4",
      src: LOG_FI
    },
    {
      name: "Cupid",
      artist: "FIFTY FIFTY",
      album: "The Beginning: Cupid (1)",
      uiid: "TH_2_FI_1",
      src: CUP_FI
    },
    {
      name: "Cupid (Twin Ver.)",
      artist: "FIFTY FIFTY",
      album: "The Beginning: Cupid (1)",
      uiid: "TH_2_FI_2",
      src: CUPT_FI
    },
    {
      name: "Attention",
      artist: "NewJeans",
      album: "NEWJEANS (1)",
      uiid: "NE_1_NE_4",
      src: ATT_NE
    },
    {
      name: "Hype Boy",
      artist: "NewJeans",
      album: "NEWJEANS (1)",
      uiid: "NE_1_NE_3",
      src: HYP_NE
      },
    {
      name: "Cookie",
      artist: "NewJeans",
      album: "NEWJEANS (1)",
      uiid: "NE_1_NE_1",
      src: COO_NE
      },
    {
      name: "Hurt",
      artist: "NewJeans",
      album: "NEWJEANS (1)",
      uiid: "NE_1_NE_2",
      src: HUR_NE
      },
      {
        name: "OMG",
        artist: "NewJeans",
        album: "OMG (1)",
        uiid: "OM_1_NE_1",
        src: OMG_NE
        },
        {
        name: "Ditto",
        artist: "NewJeans",
        album: "OMG (1)",
        uiid: "OM_1_NE_2",
        src: DIT_NE
        },
        {
          name: "Get Up",
          artist: "NewJeans",
          album: "Get Up (1)",
          uiid: "GE_1_NE_1",
          src: GET_NE
          },
          {
          name: "Cool With You",
          artist: "NewJeans",
          album: "Get Up (1)",
          uiid: "GE_1_NE_2",
          src: COO1_NE
          },
          {
          name: "Super Shy",
          artist: "NewJeans",
          album: "Get Up (1)",
          uiid: "GE_1_NE_3",
          src: SUP_NE
          },
          {
          name: "New Jeans",
          artist: "NewJeans",
          album: "Get Up (1)",
          uiid: "GE_1_NE_4",
          src: NEW_NE
          },
          {
          name: "ASAP",
          artist: "NewJeans",
          album: "Get Up (1)",
          uiid: "GE_1_NE_5",
          src: ASA_NE
          },
          {
          name: "ETA",
          artist: "NewJeans",
          album: "Get Up (1)",
          uiid: "GE_1_NE_6",
          src: ETA_NE
          },
          {
            name: "I’ll See You There Tomorrow",
            artist: "TXT",
            album: "minisode 3: TOMORROW (1)",
            uiid: "MI_1_TX_1",
            src: ILL_TX
            },
            {
              name: "- --- -- --- .-. .-. --- .--",
              artist: "TXT",
              album: "minisode 3: TOMORROW (1)",
              uiid: "MI_1_TX_2",
              src: DASH_TX
              },
              {
                name: "Deja Vu",
                artist: "TXT",
                album: "minisode 3: TOMORROW (1)",
                uiid: "MI_1_TX_3",
                src: DEJ_TX
                },
            {
            name: "Miracle",
            artist: "TXT",
            album: "minisode 3: TOMORROW (1)",
            uiid: "MI_1_TX_4",
            src: MIR_TX
            },
            {
            name: "The Killa (I Belong to You)",
            artist: "TXT",
            album: "minisode 3: TOMORROW (1)",
            uiid: "MI_1_TX_5",
            src: THE_TX
            },
            {
              name: "Quarter Life",
              artist: "TXT",
              album: "minisode 3: TOMORROW (1)",
              uiid: "MI_1_TX_6",
              src: QUA_TX
              },
            {
              name: "Deja Vu (Anemoia Remix)",
              artist: "TXT",
              album: "minisode 3: TOMORROW (1)",
              uiid: "MI_1_TX_7",
              src: DEJR_TX
              },
            
  
  
  ];

  const [trackIndex, setTrackIndex] = useState(0);
  const [albumRN, setalbumRN] = useState(null);
  
  useEffect(() => {
    document.title = 'BCMA | ' + musicTracks[trackIndex].name;
    
  }, [trackIndex]);

  const handleClickPrevious = () => {
    if (albumRN == null) {
      setTrackIndex((currentTrack) =>
      currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
    );
    } else {
      var arrayedList = musicTracks.filter((el) => el.album.toLowerCase() == albumRN.toLowerCase());
        
        setTrackIndex((currentTrack) =>
        arrayedList.indexOf(musicTracks[currentTrack]) === 0 ? musicTracks.indexOf(arrayedList[arrayedList.length - 1]) : musicTracks.indexOf(arrayedList[arrayedList.indexOf(musicTracks[currentTrack]) - 1])
      );
    }
  };

  const handleClickNext = (indexHere) => {
    if (Number.isInteger(indexHere)) {
      setTrackIndex(indexHere);
    }
    else {
      if (albumRN == null) {
        setTrackIndex((currentTrack) =>
        currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
      );
      } else {
        var arrayedList = musicTracks.filter((el) => el.album.toLowerCase() == albumRN.toLowerCase());
        
        setTrackIndex((currentTrack) =>
        arrayedList.indexOf(musicTracks[currentTrack]) < arrayedList.length - 1 ? musicTracks.indexOf(arrayedList[arrayedList.indexOf(musicTracks[currentTrack]) + 1]) : musicTracks.indexOf(arrayedList[0])
      );
      }
    }
  };

  const handleClickEnd = (indexHere) => {
    
    
    

    if (Number.isInteger(indexHere)) {
      setTrackIndex(indexHere);
    }
    else {
      if (albumRN == null) {
        setTrackIndex((currentTrack) =>
        currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
      );
      } else {
        var arrayedList = musicTracks.filter((el) => el.album.toLowerCase() == albumRN.toLowerCase());
        
        setTrackIndex((currentTrack) =>
        arrayedList.indexOf(musicTracks[currentTrack]) < arrayedList.length - 1 ? musicTracks.indexOf(arrayedList[arrayedList.indexOf(musicTracks[currentTrack]) + 1]) : musicTracks.indexOf(arrayedList[0])
      );
      }
    }
  };

  return (
    <div className="App">
      <h1>BCMA</h1>
      <p>album = {albumsStylized[albumRN]}</p>
      <div style={{position:"sticky", top:"10px"}}>
      <AudioPlayer
        // style={{ width: "300px" }}
        style={{ borderRadius: "1rem", color:"#ff5d27"}}
        autoPlay
        // layout="horizontal"
        src={musicTracks[trackIndex].src}
        onPlay={(e) => console.log("onPlay")}
        showSkipControls={true}
        showJumpControls={true}
        header={`Now playing: ${musicTracks[trackIndex].name} by ${musicTracks[trackIndex].artist}\n`}
        footer={`🍉 - latest release: txt's minisode 3: tomorrow`}
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        onEnded={handleClickEnd}
        onListen={(d)=>{if (d.target.duration-1.06 <= d.target.currentTime &&  d.target.currentTime <= ((d.target.duration))) {
            console.log("e")
          if (JSON.parse(localStorage.getItem("streams")) == null) {
            localStorage.setItem("streams", JSON.stringify({}))
            setStreams({})
          }
          var streamscopy = {...streams};
          if (streamscopy[musicTracks[trackIndex]['uiid']]) {
            
            streamscopy[musicTracks[trackIndex]['uiid']] = streamscopy[musicTracks[trackIndex]['uiid']]+1;
            setStreams(streamscopy)
            localStorage.setItem("streams", JSON.stringify(streamscopy))
          } else {
            streamscopy[musicTracks[trackIndex]['uiid']] = 1;
            setStreams(streamscopy)
            localStorage.setItem("streams", JSON.stringify(streamscopy))
          }
        }}}
        // other props here
      />
      {(lyricsData[musicTracks[trackIndex]['uiid']] ) && <button className="lyricsButton" onClick={()=>{setLyricOpen(!lyricsOpen)}}>Lyrics</button>}
      </div>
      
      {(lyricsData[musicTracks[trackIndex]['uiid']] && lyricsOpen == true ) && <div style={{whiteSpace: "pre-line"}}>{lyricsData[musicTracks[trackIndex]['uiid']]}</div>}
      <div>
        <h2>Albums</h2>
        <h3>ILLIT</h3>        
        <div className="albums">
          <div className="album" style={{'backgroundColor':"#fadeff"}}>
            <img className="albumcover" src="https://i.imgur.com/wPjw8Pt.jpeg"></img>
            <p>Super Real Me
              <br></br>
            <strong>ILLIT</strong></p>
            
            <div className="songlist">
            {musicTracks.filter((el) => el.album.toLowerCase() == 'super real me (1)').map((item,index)=>{return <div key={index}> <button className="songOnList" onClick={()=> {handleClickNext(musicTracks.indexOf(item)); setalbumRN("super real me (1)");}}><span className="number">{index+1}</span>{item.name}</button></div>})}
             
            </div>
          </div>
        </div>
        <h3>FIFTY FIFTY</h3>        
        <div className="albums">
          <div className="album" style={{'backgroundColor':"#ff57d5"}}>
            <img className="albumcover" src="https://i.imgur.com/pfN6KI7.jpeg"></img>
            <p>THE FIFTY
              <br></br>
            <strong>FIFTY FIFTY</strong></p>
            
            <div className="songlist">
            {musicTracks.filter((el) => el.album.toLowerCase() == 'the fifty (1)').map((item,index)=>{return <div key={index}> <button className="songOnList" onClick={()=> {handleClickNext(musicTracks.indexOf(item)); setalbumRN("the fifty (1)");}}><span className="number">{index+1}</span>{item.name}</button></div>})}
             
            </div>
          </div>
          <div className="album" style={{'backgroundColor':"#ffcec4"}}>
            <img className="albumcover" src="https://i.imgur.com/kPzJfQi.jpeg"></img>
            <p>The Beginning: Cupid
              <br></br>
            <strong>FIFTY FIFTY</strong></p>
            
            <div className="songlist">
            {musicTracks.filter((el) => el.album.toLowerCase() == 'the beginning: cupid (1)').map((item,index)=>{return <div key={index}> <button className="songOnList" onClick={()=> {handleClickNext(musicTracks.indexOf(item)); setalbumRN("the beginning: cupid (1)");}}><span className="number">{index+1}</span>{item.name}</button></div>})}
             
            </div>
          </div>
        </div>
        <h3>NewJeans</h3> 
        <div className="albums">
          <div className="album" style={{'backgroundColor':"#8eaaf7"}}>
            <img className="albumcover" src="https://i.imgur.com/S7BZDxC.jpeg"></img>
            <p>NEWJEANS
              <br></br>
            <strong>NewJeans</strong></p>
            
            <div className="songlist">
            {musicTracks.filter((el) => el.album.toLowerCase() == 'newjeans (1)').map((item,index)=>{return <div key={index}> <button className="songOnList" onClick={()=> {handleClickNext(musicTracks.indexOf(item)); setalbumRN("newjeans (1)");}}><span className="number">{index+1}</span>{item.name}</button></div>})}
             
            </div>
          </div>
          <div className="album" style={{'backgroundColor':"#949494"}}>
            <img className="albumcover" src="https://i.imgur.com/id4N5sB.jpeg"></img>
            <p>OMG
              <br></br>
            <strong>NewJeans</strong></p>
            
            <div className="songlist">
            {musicTracks.filter((el) => el.album.toLowerCase() == 'omg (1)').map((item,index)=>{return <div key={index}> <button className="songOnList" onClick={()=> {handleClickNext(musicTracks.indexOf(item)); setalbumRN("omg (1)");}}><span className="number">{index+1}</span>{item.name}</button></div>})}
             
            </div>
          </div>
          <div className="album" style={{'backgroundColor':"#52d966"}}>
            <img className="albumcover" src="https://i.imgur.com/wfF83rQ.jpeg"></img>
            <p>Get Up
              <br></br>
            <strong>NewJeans</strong></p>
            
            <div className="songlist">
            {musicTracks.filter((el) => el.album.toLowerCase() == 'get up (1)').map((item,index)=>{return <div key={index}> <button className="songOnList" onClick={()=> {handleClickNext(musicTracks.indexOf(item)); setalbumRN("get up (1)");}}><span className="number">{index+1}</span>{item.name}</button></div>})}
             
            </div>
          </div>
        </div>      
        <h3>TXT</h3>
        <div className="albums">
          <div className="album" style={{'backgroundColor':"#ff7e1c"}}>
            <img className="albumcover" src="https://i.imgur.com/LMopWGw.jpeg"></img>
            <p>minisode 3: TOMORROW
              <br></br>
            <strong>TXT</strong></p>
            
            <div className="songlist">
            {musicTracks.filter((el) => el.album.toLowerCase() == 'minisode 3: tomorrow (1)').map((item,index)=>{return <div key={index}> <button className="songOnList" onClick={()=> {handleClickNext(musicTracks.indexOf(item)); setalbumRN("minisode 3: tomorrow (1)");}}><span className="number">{index+1}</span>{item.name}</button></div>})}
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
