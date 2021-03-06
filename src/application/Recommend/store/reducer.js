/* reducer负责实施对状态的更改 */
import * as actionTypes from './constants';
import { fromJS } from 'immutable';// 这里用到 fromJS 把 JS 数据结构转化成 immutable 数据结构
//在immutable.js中，object经过fromjs函数以后默认转成map，array经过fromjs以后默认转成list
/*
set方法在list和map中的使用：
  list：list.set(index, xx);
  map：map.set('key',xx)
*/
const defaultState = fromJS ({
  bannerList: [],
  recommendList: [],
  enterLoading: true
});

export default (state = defaultState, action) => {
    switch (action.type) {
      case actionTypes.CHANGE_BANNER:
        return state.set ('bannerList', action.data);
      case actionTypes.CHANGE_RECOMMEND_LIST:
        return state.set ('recommendList', action.data);
      case actionTypes.CHANGE_ENTER_LOADING:
        return state.set ('enterLoading', action.data);
      default:
        return state;
    }
  }