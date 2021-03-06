import styled from'styled-components';
import style from '../../assets/global-style';

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px;
  /* "$+{xx}"是用占位符的方式来拼接字符串 */
  background: ${style["theme-color"]};
  /* '>'代表后代第一层选择器 */
  &>span {
    line-height: 40px;
    color: #f1f1f1;
    font-size: 20px;
    &.iconfont {
      font-size: 25px;
    }
  }
`
export const Tab = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: ${style["theme-color"]};
  a {
      /* 这里flex放大的目的在于分配三个格子之间的间隙，使得整行都填充满了 */
    flex: 1;
    padding: 2px 0;
    font-size: 14px;
    color: #e4e4e4;
    &.selected {
      span {
        padding: 3px 0;
        font-weight: 700;
        color: #f1f1f1;
        border-bottom: 2px solid #f1f1f1;
      }
    }
  }
`
export const TabItem = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`