
const showBookmark = (() => {

  let _useHash;
  let _scrollX;
  let _scrollY;
  let _nodeX;
  let _nodeY;
  let _itFrame;
  let _scrollId = -1;
  let _bookMark;
  let _isBot;

  // duration: the duration in milliseconds of each frame
  // frames: number of frames for each scroll
  let duration = 200;
  let frames = 10;

  function _next() {
    if (_itFrame > frames) {
      clearInterval(_scrollId);
      _scrollId = -1;
      return;
    }

    _isBot = true;

    document.documentElement.scrollTop = Math.round(_scrollY + (_nodeY - _scrollY) * _itFrame / frames);
    document.documentElement.scrollLeft = Math.round(_scrollX + (_nodeX - _scrollX) * _itFrame / frames);
    if (_useHash && _itFrame === frames) {
      console.log(location.hash);
      location.hash = _bookMark;
    }
    _itFrame++;
  }

  function _chkOwner() {
    if (_isBot) {
      _isBot = false;
      return;
    }
    if (_scrollId > -1) {
      clearInterval(_scrollId);
      _scrollId = -1;
    }
  }

  window.addEventListener("scroll", _chkOwner, false);

  return (bookmark, useHash) => {
    const node = document.querySelector(bookmark);
    _scrollY = document.documentElement.scrollTop;
    _scrollX = document.documentElement.scrollLeft;
    _bookMark = bookmark;
    _useHash = useHash === true;
    _nodeX = node.offsetLeft;
    _nodeY = node.offsetTop;
    _itFrame = 1;
    if (_scrollId === -1) {
      _scrollId = setInterval(_next, Math.round(duration / frames));
    }
  };
})();
