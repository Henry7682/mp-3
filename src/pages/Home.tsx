import Main from "../components/Main";
import myPic from "../assets/my_pic.jpg";

function Home() {
    return (
        <Main title="Home">
            <div className="content-wrapper">
                <img src={myPic} alt="Ziheng Zeng" className="Homepage-image" />
                <div className="text-content">
                    <p>
                        I am a dedicated and enthusiastic senior at Boston University, majoring in Computer Science, set to graduate in 2025.
                        Passionate about software development and problem-solving, I have built a strong foundation in algorithms, data structures,
                        and full-stack web development.
                    </p>
                    <p>
                        Throughout my studies, I have worked on various projects, including developing web applications, creating automation scripts,
                        and experimenting with artificial intelligence models. My coursework in embedded systems, computer networks, and software engineering
                        has further expanded my technical expertise.
                    </p>
                </div>
            </div>

            <div className="description-content">
                <p>
                    Welcome to my online resume! Here you will find details about my
                    <strong><a href="/education">Educational</a></strong> and
                    <strong><a href="/experience">Employment</a></strong> history, as well as my projects and skills.
                </p>
            </div>

            <table>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Contact</th>
                </tr>
                <tr>
                    <td>Ziheng Zeng</td>
                    <td>81 Bay State Road</td>
                    <td>857-265-8108</td>
                </tr>
            </table>
        </Main>
    );
}

export default Home;
