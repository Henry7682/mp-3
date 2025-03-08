import Main from "../components/Main";

function Skills() {
    return (
        <Main title="Skills">
            <div className="content-wrapper">
                <div className="text-content">
                    <h3>Programming Languages</h3>
                    <table className="skills-table">
                        <tbody>
                        <tr>
                            <td>Python</td>
                            <td>Java</td>
                            <td>C++</td>
                        </tr>
                        <tr>
                            <td>JavaScript</td>
                            <td>TypeScript</td>
                            <td>SQL</td>
                        </tr>
                        <tr>
                            <td>Rust</td>
                            <td>Latex</td>
                            <td>Shell Scripting</td>
                        </tr>
                        </tbody>
                    </table>

                    <h3>Professional & Soft Skills</h3>
                    <table className="skills-table">
                        <tbody>
                        <tr>
                            <td>Adaptability</td>
                            <td>Public Speaking</td>
                            <td>English Fluent</td>
                        </tr>
                        <tr>
                            <td>Communicative</td>
                            <td>Motivated</td>
                            <td>Mandarin Fluent</td>
                        </tr>
                        <tr>
                            <td>Problem Solving</td>
                            <td>Team Collaboration</td>
                            <td>Japanese Beginner</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </Main>
    );
}

export default Skills;
