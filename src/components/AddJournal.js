import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class AddJournal extends React.Component{
    state = {
        newJournal: {
            id: Date.now(),
            date: '',
            name: ''
         },
        isFetching: false
    }

    handleChange = e => {
        this.setState({
            newJournal: {
                ...this.state.newJournal,
                [e.target.name]: e.target.value
            }
        });
    };

    addJournal = e => {
        e.preventDefault();
        this.setState({
            isFetching: true
        });

        axiosWithAuth()
        .post('/journals', this.state.newJournal)
        .then(res => {
            console.log(res.data);
            this.setState({journal:[...res.data, res.data.payload]});
            this.props.history.push('/journal');
        })
        .catch(err => console.log(err));
    };


    render(){
        return(
            <div>
                <form onSubmit={this.addJournal}>
                    <input type="text" name="name" placeholder="Journal Name" value={this.state.newJournal.name} onChange={this.handleChange}/>

                    <input type="text" name="date" placeholder="Date" value={this.state.newJournal.date} onChange={this.handleChange}/>

                    <button type='submit'>Add Journal</button>
                </form>
            </div>
        )
    }
}
export default AddJournal;