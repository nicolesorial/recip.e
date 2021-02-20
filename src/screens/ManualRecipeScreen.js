import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class RecipeTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {submitted: false, title: ''}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            title: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            submitted: !this.state.submitted
        });
        alert('Title successfully submitted')
    }

    render() {
        let input;
        if (this.state.submitted) {
            input = this.state.title
        } else {
            input = <input type="text" value={this.state.title} onChange={this.handleChange} />
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Recipe Title:
                </label>
                {input}
                {this.state.submitted ? <input type="submit" value="Edit" /> : <input type="submit" value="Submit" />}
            </form>
        );
    }
}

function Ingredients(props) {
  let ingredients = props.ingredients
  
  return (
    <div className='ingredients'>


      <form>
        <label>
          Ingredients:
          <table>

          </table>
        </label>
      </form>
    </div>
  )
}

function Steps(props) {
    return null
}

class ManualRecipeScreen extends React.Component {
    constructor(props) {
        super(props);
        this.ingredients = {};
        this.steps = {};
    }

    render() {
        return (
            <div>
                <div className='recipe'>
                    <RecipeTitle />
                    <Ingredients ingredients={this.ingredients} />
                    <Steps steps={this.steps} />
                </div>
            </div>
        );
    }
}

export default ManualRecipeScreen;
