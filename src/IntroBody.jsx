import "./IntroBody.css";

function IntroBody() {

    return (
      <div className="introbody">
        <div className="introductiontext">
          <h5 className="iam">- I Am</h5>
          <h1>Steven Weng</h1>
          <h5 className="jobTitle">Software Developer</h5>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae dolores asperiores aperiam omnis numquam? Voluptas ratione ipsam inventore commodi! Ex, quam consectetur tempora soluta temporibus quo distinctio dolores totam animi.</p>
        </div>
        <div className="introductionpicture">
          <img src="src/static/StevenTransparentBKG.png" alt="Couldn't find image" className="stevensImage"></img>
        </div>
      </div>
    )
}

export default IntroBody;