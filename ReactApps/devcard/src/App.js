import './App.css';

const ButtonsList = [
  {
    label: "HTML+CSS",
    style: "red"
  },
  {
    label: "JavaScript",
    style: "yellow-green"
  },
  {
    label: "React",
    style: "light-yellow"
  },
  {
    label: "Python",
    style: "blue"
  },
  {
    label: "Git & GitHub",
    style: "light-sea-green"
  },
  {
    label: "Docker",
    style: "dark-orange"
  }
]

function App() {
  return (
    <>
      <div className='container'>
        <Avatar />
        <Introduction />
        <Buttons />
      </div>
    </>
  );
}
function Avatar(){
  return (
        <img src="img.jpg" alt="Santosh Bhandari" />
  )
}
const Introduction = () => {
  return (
    <>
      <div className='intro'>
        <h1>Santosh Bhandari</h1>
        <p>Full Stack Developer from Nepal. I have good knowledge in Python and Javascript. Currently I am exploring the ReactJS</p>
      </div>
    </>
  )
}
const Buttons = () => {
  return (
    <>
      <div className='btn-wrapper'>
        {
          ButtonsList.map((buttonObj) => (
            <Button label={buttonObj.label} style={buttonObj.style} />
          ))
        }
      </div>
    </>
  )
}
const Button = (props) => {
  return (
    <>
      <button className={props.style}>{props.label}</button>
    </>
  );
}

export default App;
