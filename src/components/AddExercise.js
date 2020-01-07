import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class AddExercise extends React.Component{
    state = {
        newExercise: {
            id: Date.now(),
            name: '',
            region: ''
         },
        isFetching: false
    }

    handleChange = e => {
        this.setState({
            newExercise: {
                ...this.state.newExercise,
                [e.target.name]: e.target.value
            }
        });
    };

    addExercise = e => {
        e.preventDefault();
        this.setState({
            isFetching: true
        });

        axiosWithAuth()
        .post('/exercises/:id', this.state.newExercise)
        .then(res => {
            console.log(res.data);
            this.setState({exercise:[...res.data, res.data.payload]});
            this.props.history.push('/exercise');
        })
        .catch(err => console.log(err));
    };


    render(){
        return(
            <div>
                <form onSubmit={this.addExercise}>
                    <input type="text" name="name" placeholder="Exercise Name" value={this.state.newExercise.name} onChange={this.handleChange}/>

                    <input type="text" name="region" placeholder="Muscle Region" value={this.state.newExercise.region} onChange={this.handleChange}/>

                    <button>Add Exercise</button>
                </form>
            </div>
        )
    }
}
export default AddExercise;