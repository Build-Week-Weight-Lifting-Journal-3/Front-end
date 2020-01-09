import React, { useState } from 'react';
import { addJournal } from '../actions';
import { connect } from 'react-redux';

const initialFormValues = {
    name: '',
    date: ''
}

const AddJournal = (props) => {
    const [id] = useState(+localStorage.getItem('id'));
    const [input, setInput] = useState({
        name: '',
        date: '',
        userId: id
    });
    console.log('LOOK HERE', props.id);

    const handleInputChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addJournal(input);
        setInput({
            name: '',
            date: '',
            userId: id
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name='name'
                    type='text'
                    placeholder='Name'
                    value={input.name}
                    onChange={handleInputChange}
                    // required
                />
                <input
                    name='date'
                    type='text'
                    placeholder='Date'
                    value={input.date}
                    onChange={handleInputChange}
                    // required
                />
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        id: state.id
    }
}

export default connect(mapStateToProps, {addJournal})(AddJournal);