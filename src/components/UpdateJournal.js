import React, { useState } from 'react';
import { updateJournal } from '../actions';
import { connect } from 'react-redux';

const initialFormValues = {
    name: '',
    date: ''
}

const UpdateJournal = (props) => {
    const [input, setInput] = useState(initialFormValues);
    // console.log(input);

    const handleInputChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // props.updateJournal(props.id, input)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleInputChange}
                    placeholder='Name'
                    name='name'
                    // value={input.name}
                    // required
                />
                <input
                    onChange={handleInputChange}
                    placeholder='Date'
                    name='date'
                    // value={input.date}
                    // required
                />
                <button >Edit</button>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        // posts: state.plans.posts
    }
}

export default connect(mapStateToProps, {updateJournal})(UpdateJournal);