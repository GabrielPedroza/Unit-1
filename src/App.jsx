import Card from './components/Card'
import api from './api.json'
import './App.css'

function App() {

  return (
		<div className="App">
			<h1>Intro to Web Development</h1>
			<div className="card">
				<main>
					{api.map((data, i) => (
							<Card key={i} {...data} />
						))}
				</main>
			</div>
		</div>
  )
}

export default App
