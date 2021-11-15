import { FC, StrictMode } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const App: FC = () => {
	return <div>hello</div>
}

ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById('root')
)
