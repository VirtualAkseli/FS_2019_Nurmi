import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    console.log(props)
    return (
        <>
        <p>Kurssin nimi: {props.course}</p>
        </>
    )
}

const Part = (props) => {
    console.log(props)
    return (
        <div>
        <p>Osan nimi: {props.parts}, tehtäviä: {props.exercises} </p>
        </div>
    )
}

const Content = (props) => {
    
    return (
        <>
        <Part parts={props.parts[0].name} exercises={props.parts[0].exercises}/>
        <Part parts={props.parts[1].name} exercises={props.parts[1].exercises}/>
        <Part parts={props.parts[2].name} exercises={props.parts[2].exercises}/>
        </>
    )

    
}

const Total = (props) => {
    console.log(props)
    return (
        <>
        <p>Tehtäviä yhteensä: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
        </>
    )
}

const App = () => {
    
  const course = { 
        name: 'Half Stack -sovelluskehitys',
        parts: [
            {
                name: 'Reactin perusteet',
                exercises: 10
            },
  
            {
                name: 'Tiedonvälitys propseilla',
                exercises: 7
            },
  
            {
                name: 'Komponenttien tila',
                exercises: 14
            }
    ]
    
  }
  return (
    <>
     <Header course={course.name}/>
     <Content parts={course.parts} />
     <Total parts={course.parts}/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
