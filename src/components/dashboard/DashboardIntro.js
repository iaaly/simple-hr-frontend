import Card from "../ui/Card";

function DashboardIntro() {
  return (
    <div>
      <Card>
        <div>
          <p>
            The Simple HR app is a sample demo app built using React JS as
            front-end framework and Lumen PHP as back-end.
          </p>
          <p>The complete source code can be found on GitHub:</p>
          <ul>
            <li>
              <a
                href="https://github.com/iaaly/simple-hr-backend"
                target="_blank"
              >
                Backend source code
              </a>
            </li>
            <li>
              <a
                href="https://github.com/iaaly/simple-hr-frontend"
                target="_blank"
              >
                Frontend source code
              </a>
            </li>
          </ul>
        </div>
      </Card>
    </div>
  );
}

export default DashboardIntro;
