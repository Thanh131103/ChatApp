import React, { useEffect } from "react";

// scss
import "./assets/scss/theme.scss";

// actions
import { useSelector, useDispatch } from "react-redux";
import { changelayoutMode } from "./redux/actions";

//Route
import Routes from "./routes";

import fakeBackend from "./helpers/fakeBackend";

fakeBackend();

const App = () => {
  const dispatch = useDispatch();

  const { layoutMode } = useSelector((state: any) => ({
    layoutMode: state.Layout.layoutMode,
  }));

  // Dark/Light Mode 
  useEffect(() => {
    var getLayoutMode = localStorage.getItem("layoutMode");
    if (getLayoutMode) {
      dispatch(changelayoutMode(getLayoutMode));
    } else {
      dispatch(changelayoutMode(layoutMode));
    }
  }, [layoutMode, dispatch]);

  return <Routes />;
};

export default App;
