import React from "react";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAuthUserData } from "./../../../helpers/auth";

const AuthRouteContainer = ({ children}) => {
  const userAuth = getAuthUserData();
  if(userAuth){
    return children 
  }
  else{
    return <Navigate to={'/'}  />;
  }
};

AuthRouteContainer.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuth: state.auth.signin.isAuth
});

export const AuthRoute = connect(mapStateToProps)(AuthRouteContainer);
