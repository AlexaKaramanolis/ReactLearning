import ReactDOM from "react-dom/client";
import "./CSS/style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

function MainHeader() {
  return <h1 className="heading1">REACT COURSE</h1>;
}

const SubHeaderStyle = {
  color: "blueviolet",
  backgroundColor: "Lightgray",
};

function SubHeader() {
  return <p style={SubHeaderStyle}>This will be an exciting course.</p>;
}

function Header() {
  return (
    <div>
      <MainHeader></MainHeader>
      <SubHeader></SubHeader>
    </div>
  );
}

function MainBody() {
  const whatWeWillLearn = "React JS";
  const lectureCount = 3;

  return (
    <div>
      <p>
        In this course, we will learn {whatWeWillLearn} by building TaskOPedia!{" "}
        <br />
        Total Lecture - {lectureCount}
      </p>
      <ul>
        <li>Basic Foundation</li>
        <li>Functinal and Class Components</li>
      </ul>
      {/*  <div>
        Enter Task :{""}
        <input maxLength={10} readOnly='' placeholder="Alex"></input>
      </div> */}
    </div>
  );
}

function Students() {
  const fullName = "Alex Karamanolis";
  const programmingExp = 5;
  return (
    <div className="container p-4">
      <div className="row">Studens Enrolled</div>
      <div className="row border">
        <div className="col-2">
          <img
            src="https://ui-avatars.com/api/?name=John+Doe"
            className="w-200"
          ></img>
        </div>
        <div className="col-10">
          {fullName}
          <br />
          Programing Expirience {programmingExp} years
        </div>
      </div>
    </div>
  );
}
function Footer() {
  return (
    <p style={{ color: "gray", backgroundColor: "black" }}>Happy coding</p>
  );
}

root.render(
  <div>
    <Header />
    <MainBody />
    <Students />
    <Footer />
  </div>
);
