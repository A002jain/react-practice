

export const appEnv = () => {
    if(process.env.REACT_APP_ENV === "dev"){
        return { baseUrl: process.env.REACT_APP_DEV_BASE_URL}
    }
}