import React, { useState } from 'react';
import { editJournal } from '../actions';
import { connect } from 'react-redux';

// const initialFormValues = {
//     name: '',
//     date: ''
// }

const EditJournal = (props) => {
    const [input, setInput] = useState(props.journals);
    // console.log(input);

    const handleInputChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.editJournal(input);
        setInput(props.journals);
    }

    return (
        <div>
            {props.isEditing ? (
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
                    <button type='submit'>Edit</button>
                </form>
            ) : (
                    <>
                        <h3>{input.name}</h3>
                        <p>{input.date}</p>
                    </>
                )}
            {props.isEditing && (
                <button onClick={() => props.putSmurfs(input)}>Submit</button>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        journals: state.journals,
        isEditing: state.isEditing
    }
}

export default connect(mapStateToProps, { editJournal })(EditJournal);