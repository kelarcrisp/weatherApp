import React from 'react';


class Form extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.getWeather}>
                <input type='text' name='city' placeholder='city..' />
                <input type='text' name='city' placeholder='country...' />
                <button>get weather!</button>
            </form>
        );
    }
}
export default Form;