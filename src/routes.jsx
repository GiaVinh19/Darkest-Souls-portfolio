import Menu from "./pages/Menu";
import AboutMe from "./pages/AboutMe";
import ErrorPage from "./pages/ErrorPage";
import Options from "./pages/Options";
import Vindicator from "./pages/Vindicator";
import Venomancer from "./pages/Venomancer";
import Venator from "./pages/Venator";
import Profiles from "./pages/Profiles";
import Credit from "./pages/Credit";

const routes = [
    {
        path: `${import.meta.env.BASE_URL}`,
        element: <Menu></Menu>
    },
    {
        path: `${import.meta.env.BASE_URL}about-me`,
        element: <AboutMe></AboutMe>
    },
    {
        path: `${import.meta.env.BASE_URL}about-me/Vindicator`,
        element: <Vindicator></Vindicator>
    },
    {
        path: `${import.meta.env.BASE_URL}about-me/Venomancer`,
        element: <Venomancer></Venomancer>
    },
    {
        path: `${import.meta.env.BASE_URL}about-me/Venator`,
        element: <Venator></Venator>
    },
    {
        path: `${import.meta.env.BASE_URL}profiles`,
        element: <Profiles></Profiles>
    },
    {
        path: `${import.meta.env.BASE_URL}options`,
        element: <Options></Options>
    },
    {
        path: `${import.meta.env.BASE_URL}credit`,
        element: <Credit></Credit>
    },
    {
        path: `${import.meta.env.BASE_URL}*`,
        element: <ErrorPage></ErrorPage>
    }
];

export default routes;