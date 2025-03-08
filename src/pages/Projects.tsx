import Main from "../components/Main";
import Calculator from "../components/Calculator";

function Projects() {
    return (
        <Main title="Projects">
            <div className="content-wrapper">
                <div className="text-content">
                    <h4>Strategic Card Game with Automated Scoring - Unity, Lua</h4>
                    <ul>
                        <li>Developed a digital card-based strategy game in Unity with Lua scripting, implementing complex game mechanics.</li>
                        <li>Designed an automated scoring system that dynamically deals resources and calculates points based on real-time player moves.</li>
                        <li>Implemented a multiplayer mode using Photon Networking, enabling real-time competition.</li>
                        <li>Designed UI/UX elements to create an intuitive and visually appealing gaming experience.</li>
                    </ul>

                    <h4>Golden Calculator</h4>
                    <Calculator />
                </div>
            </div>
        </Main>
    );
}

export default Projects;
