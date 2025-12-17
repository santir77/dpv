  function render(props) {
  let viewer;
  let coverViewer;
  function dispose() {
    if (viewer) {
      viewer.remove();
    }
  }
  function disposeCover() {
    if (coverViewer) {
      coverViewer.remove();
    }
  }



  function init(opts) {
    const {accessToken, container} = opts;
    const options = {accessToken, container};
    viewer = new Viewer(options);
    viewer.moveTo(imageId).catch(mapillaryErrorHandler);
  }

  function initCover(opts) {
    const {accessToken, container} = opts;
    const options = {
      accessToken,
      component: {cover: true},
      container,
      imageId,
    };
    coverViewer = new Viewer(options);
  }

  return (
    <div>
      <ViewerComponent init={init} dispose={dispose} style={style} />
      <ViewerComponent init={initCover} dispose={disposeCover} style={style} />
    </div>
  );
}   
