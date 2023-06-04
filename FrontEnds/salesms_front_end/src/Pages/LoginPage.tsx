import logo from "../Images/logo.jpg";
import React, { useState } from "react";
import { Box, Container, Grid, IconButton, Paper, TextField, } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { LoadingButton } from "@mui/lab";
import { Brightness4 } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { temaDegis } from "../Slices/TemaSlice";
import { useTranslation } from "react-i18next";
import LanguageSelecterUI from "../Components/UiComponents/LanguageSelecterUI";
import { AppDispatch } from "../app/store";
import { useSignIn } from "react-auth-kit";
import UserLoginManager from "../Authorization/UserLoginManager";

const LoginContainer = styled(Container)({
    background: "primary",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    width: "100vh",
});

const LoginBox = styled(Box)({
    backgroundColor: "primary",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "400px",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease",
    "&:hover": {
        transform: "scale(1.05)",
    },
});

const LogoImage = styled("img")({
    width: "100%",
    marginBottom: "1rem",
});

const LoginButton = styled(LoadingButton)({
    marginTop: "1rem",
    padding: "0.7rem",
});

const TextInput = styled(TextField)({
    marginTop: "0.9rem",
    padding: "0rem",
});

const LoginPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [isLoading, setIsLoading] = useState(false);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const signIn = useSignIn();

    async function loginHandler(e: any) {

        e.preventDefault();
        setIsLoading(true);
        const result = await UserLoginManager(username, password);
        if (result?.access_token?.length > 0) {
            signIn({
                token: result.access_token,
                expiresIn: 1,
                tokenType: 'Bearer',
                refreshToken: result.refresh_token,
                refreshTokenExpireIn: 1,
                authState: [result.scope]
            });

            toast.success("Logged in. You are redirecting...");
            await navigate("/DashboardPage");
        } else {
            toast.error("Username or Password incorrect!");
        }
        setIsLoading(false);
    }


    const { t } = useTranslation();

    return (
        <Paper sx={{ color: "secondary" }}>
            <form onSubmit={loginHandler}>
                <LoginContainer>
                    <LoginBox>
                        <LogoImage src={logo} alt="Logo" />

                        <TextInput
                            color="primary"
                            label={t("UserName")}
                            placeholder={t("UserName").toString()}
                            variant="outlined"
                            fullWidth
                            onChange={(e) => setUsername(e.target.value)}
                            autoComplete="username"
                        />
                        <TextInput
                            color="primary"
                            label={t("Password")}
                            placeholder={t("Password").toString()}
                            variant="outlined"
                            type="password"
                            fullWidth
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="password"
                        />

                        <LoginButton
                            variant="contained"
                            type="submit"
                            loading={isLoading}
                            color="primary"
                            fullWidth
                        >
                            {t("Login")}
                        </LoginButton>

                        <Grid container justifyContent="center">
                            <IconButton
                                sx={{ ml: 1 }}
                                onClick={() => {
                                    dispatch(temaDegis());
                                }}
                                color="inherit"
                            >
                                <Brightness4 />
                            </IconButton>
                            <LanguageSelecterUI />
                        </Grid>
                    </LoginBox>
                </LoginContainer>
            </form>
        </Paper>
    );
};

export default LoginPage;
