import React from 'react';
import ReactDOM from 'react-dom';

var HelloWorld = React.createClass({
render: function(){
	return (
		<div>
			Hello World!
		</div>
	)
}
});

render(<HelloWorld />, document.getElementById('root'));