import React, {useRef} from 'react';
import { getName } from '../../../api/utils';
import { MiniPlayerContainer } from './style';
import { CSSTransition } from 'react-transition-group';
import ProgressCircle from '../../../baseUI/progress-circle';

function MiniPlayer(props) {
  const { song, fullScreen, playing, percent } = props;

  const { toggleFullScreen, clickPlaying,togglePlayList } =  props;

  const miniPlayerRef = useRef();

  const handleTogglePlayList = (e) => {
    togglePlayList (true);
    /*冒泡阻止事件：让事件只在当前元素中生效而不向上传递到父祖元素上生效
     这里的目的在于只发生歌单的弹出，如果不阻止冒泡会触发父元素的onclick事件，从而播放器页面也弹出了*/
    e.stopPropagation ();
  };

  return (
    <CSSTransition 
      in={!fullScreen} //如果全屏则展示退出动画
      timeout={400} 
      classNames="mini" 
      onEnter={() => {
        //载入的时候设置为flex布局
        miniPlayerRef.current.style.display = "flex";
      }}
      onExited={() => {
        //退出时设置为隐藏
        miniPlayerRef.current.style.display = "none";
      }}
    >
      <MiniPlayerContainer ref={miniPlayerRef} onClick={() => toggleFullScreen(true)}>
        <div className="icon">
          <div className="imgWrapper">
            {/*播放时图片就旋转  暂停时就停止旋转 */}
            <img className={`play ${playing ? "": "pause"}`} src={song.al.picUrl} width="40" height="40" alt="img"/>
          </div>
        </div>
        <div className="text">
          <h2 className="name">{song.name}</h2>
          <p className="desc">{getName(song.ar)}</p>
        </div>
        <div className="control">
        <ProgressCircle radius={32} percent={percent}>
          {/*播放和暂停时圆圈中间的团切换：三角/竖线 */}
          { playing ? 
            <i className="icon-mini iconfont icon-pause" onClick={e => clickPlaying(e, false)}>&#xe650;</i>
            :
            <i className="icon-mini iconfont icon-play" onClick={e => clickPlaying(e, true)}>&#xe61e;</i> 
          }
        </ProgressCircle>
        </div>
        <div className="control" onClick={handleTogglePlayList}>
          <i className="iconfont">&#xe640;</i>
        </div>
      </MiniPlayerContainer>
    </CSSTransition>
  )
}

export default React.memo(MiniPlayer);