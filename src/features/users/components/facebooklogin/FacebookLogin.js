import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import axiosInstance from "../../../../conf/api.users";

class FacebookSocialAuth extends Component {
    render() {
        const fbLogin = async (accessToken) => {
            let res = await axiosInstance.post('facebook/',
                {
                    access_token : accessToken
                }
            );
            console.log(res)
            return res.status;
        }

        const responseFacebook = async (response) =>{
            let fbResponse = await fbLogin(response.access_token)
            console.log(fbResponse)
            console.log(response)
        };

        return (
            <div className="fb-btn">
                <FacebookLogin
                    textButton="Login with Facebook"
                    appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                    fields="name, email, picture"
                    callback={responseFacebook}
                />
            </div>
        );
    }

}

export default FacebookSocialAuth;