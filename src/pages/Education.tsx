import Main from "../components/Main";

function Education() {
    return (
        <Main title="Education">
            <div className="content-wrapper">
                <div className="text-content">
                    <h3>Education Background</h3>

                    <h4>Bachelor of Science in Computer Science – Boston University</h4>
                    <ul>
                        <li>Expected Graduation: May 2025</li>
                        <li>GPA: 3.50 / 4.00</li>
                        <li>
                            Notable Coursework:
                            <a href="https://www.bu.edu/academics/cas/courses/cas-cs-454/"> Embedded Systems Development</a>,
                            <a href="https://www.bu.edu/academics/cas/courses/cas-cs-455/"> Computer Networks</a>,
                            <a href="https://www.bu.edu/academics/cas/courses/cas-cs-365/"> Foundations of Data Science</a>,
                            <a href="https://www.bu.edu/academics/com/courses/com-ft-310/"> Film & Television</a>
                        </li>
                        <li>Member of the BU E-gaming Club</li>
                        <li>Participated in the BU England London Internship (2023)</li>
                    </ul>

                    <h4>High School Diploma – Wuhan Britain-China School</h4>
                    <ul>
                        <li>Graduated: June 2020</li>
                        <li>
                            Honor: Valedictorian
                            <a href="http://www.whbc2000.com/loadschoolnews.aspx?fid=3886" target="_blank"> Link</a>
                        </li>
                        <li>Extracurriculars: Ultimate Frisbee Club President, Robotics Club Member</li>
                        <li>Awards: Best STEM Project Award</li>
                        <li>
                            Visit my high school’s website:
                            <a href="http://www.whbc2000.com/en/index.aspx" target="_blank"> here</a>
                        </li>
                    </ul>
                </div>
            </div>
        </Main>
    );
}

export default Education;
