import React from "react";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

// const DialogsContainer = props => {
//   let dialogs = props.store.getState().dialogsPage.dialogsData;
//   return <Dialogs store={props.store} dialogs={dialogs} />;
// };

let mapState = state => {
  return {
    dialogs: state.dialogsPage.dialogsData,
    store: state
  };
};

const DialogsContainer = connect(mapState)(Dialogs);
export default DialogsContainer;
