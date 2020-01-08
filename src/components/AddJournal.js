import React, { useState } from 'react';
import { addJournal } from '../actions';
import { connect } from 'react-redux';

const initialFormValues = {
    name: '',
    date: ''
}

const AddJournal = (props) => {
    const [input, setInput] = useState(initialFormValues);
    // console.log(input);

    const handleInputChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addJournal(input);
        setInput(initialFormValues);
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
    return {
        ...state
    }
}

export default connect(mapStateToProps, {addJournal})(AddJournal);