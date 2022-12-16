import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseTitle, chooseAuthor, chooseISBN, chooseGenre } from '../../Redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input';
import { Button } from '@material-ui/core';

import { server_calls } from '../../api';

interface BookFormProps {
    id?:string;
    data?:{}
}

interface BookState {
    title: string;
    author: string;
    genre: string;
    isbn: string;
}

export const BookForm = (props:BookFormProps) => {

    const dispatch = useDispatch(); // This is a Redux-specific hook that updates the store
    const store = useStore();
    const title = useSelector<BookState>(state => state.title);
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)
        // The ! is for strictly typed Typescript stuff
        if(props.id!){
            server_calls.update(props.id!, data);
            console.log(`Updated:${data} ${props.id}`);
            console.log(data);
            setTimeout( () => {window.location.reload()}, 1000);
            event.target.reset();
        } else {
            // Dispatch basically updates our state / Redux store
            dispatch(chooseTitle(data.title));
            dispatch(chooseAuthor(data.author));
            dispatch(chooseISBN(data.isbn));
            dispatch(chooseGenre(data.genre));
            server_calls.create(store.getState());
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="title">Book Title</label>
                    <Input {...register('title')} name="title" placeholder='Title'/>
                </div>
                <div>
                    <label htmlFor="author">Author</label>
                    <Input {...register('author')} name="author" placeholder='Author'/>
                </div>
                <div>
                    <label htmlFor="isbn">ISBN</label>
                    <Input {...register('isbn')} name="isbn" placeholder='ISBN'/>
                </div>
                <div>
                    <label htmlFor="genre">Genre</label>
                    <Input {...register('genre')} name="genre" placeholder='Genre`'/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}