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
        path: "/",
        element: <Menu></Menu>
    },
    {
        path: "/about-me",
        element: <AboutMe></AboutMe>
    },
    {
        path: "/about-me/Vindicator",
        element: <Vindicator></Vindicator>
    },
    {
        path: "/about-me/Venomancer",
        element: <Venomancer></Venomancer>
    },
    {
        path: "/about-me/Venator",
        element: <Venator></Venator>
    },
    {
        path: "/profiles",
        element: <Profiles></Profiles>
    },
    {
        path: "/options",
        element: <Options></Options>
    },
    {
        path: "/credit",
        element: <Credit></Credit>
    },
    {
        path: "*",
        element: <ErrorPage></ErrorPage>
    }
];

export default routes;