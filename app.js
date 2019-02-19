const rootElement = document.getElementById('root');

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			shoppingList: ['Shoes', 'Shirts', 'Bags']
		}
	}

	render() { 
	    return (
			<div className="shopping-list">
	        	<h1>Shopping List for {this.props.name}</h1>
	      		<ul>
	            	{
	            		this.state.shoppingList.map((val, i) => {
	            			return <li key={i}>{val}</li>
	            		})
	            	}
	            </ul>
	        </div>
        )
    }

}


ReactDOM.render(
    <App />,
    rootElement
);