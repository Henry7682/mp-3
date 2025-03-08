import Main from "../components/Main";

function Experience() {
    return (
        <Main title="Work Experience">
            <div className="content-wrapper">
                <div className="text-content">
                    <h4>
                        Software Engineering Intern -{" "}
                        <a href="https://www.oracle.com/">Oracle Corporation</a>
                    </h4>
                    <ul>
                        <li>
                            Developed and optimized backend APIs using Java and Spring Boot,
                            reducing response time by 20%.
                        </li>
                        <li>
                            Implemented automated testing with JUnit, increasing test coverage
                            by 35%.
                        </li>
                        <li>
                            Collaborated with a cross-functional team to enhance the{" "}
                            <strong>database schema</strong> for a cloud-based application.
                        </li>
                    </ul>

                    <h4>
                        IT Support Specialist -{" "}
                        <a href="https://www.bu.edu/">Boston University IT Help Center</a>
                    </h4>
                    <ul>
                        <li>
                            Provided technical assistance to over 500 students and faculty
                            members regarding network and software issues.
                        </li>
                        <li>
                            Diagnosed and resolved <strong>hardware malfunctions</strong> for
                            university-issued laptops and workstations.
                        </li>
                        <li>
                            Created user documentation and conducted training sessions on
                            cybersecurity best practices.
                        </li>
                    </ul>

                    <h4>
                        Data Analyst Intern -{" "}
                        <a href="https://www.deloitte.com/">Deloitte</a>
                    </h4>
                    <ul>
                        <li>
                            Analyzed large datasets using Python and SQL, identifying trends
                            that improved client decision-making.
                        </li>
                        <li>
                            Automated data visualization dashboards using Tableau, reducing
                            manual reporting time by 40%.
                        </li>
                        <li>
                            Conducted market research and built predictive models to assess
                            financial risks for business clients.
                        </li>
                    </ul>
                </div>
            </div>
        </Main>
    );
}

export default Experience;
