import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
// import axiosInstance from "../../../../conf/api.users";
import axios from 'axios'

class GoolgeSocialAuth extends Component {
    render() {
        const ggLogin = async (accessToken) => {
            let res = await axios.post('http://localhost:8888/auth/social/google/',
                {
                    access_token : accessToken
                }
            );
            console.log(res)
            return res.status;
        }

        const responseGoogle = async (response) =>{
            let ggResponse = await ggLogin(response.access_token)
            console.log(ggResponse)
            console.log(response)
        };

        return (
            <div className="fb-btn">
                <GoogleLogin
                    clientId="132784214551-u9n96s8rtmih4jaslfqjaqf5ndoocs40.apps.googleusercontent.com"
                    buttonText="LOGIN WITH GOOGLE"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                />
            </div>
        );
    }

}

export default GoolgeSocialAuth;