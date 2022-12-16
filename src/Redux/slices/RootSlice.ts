import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        title: 'Title',
        author: 'Author',
        isbn: 'ISBN',
        genre: 'Genre',
    },
    reducers: {
        chooseTitle: (state, action) => { state.title = action.payload},
        chooseAuthor: (state, action) => { state.author = action.payload},
        chooseISBN: (state, action) => { state.isbn = action.payload},
        chooseGenre: (state, action) => { state.genre = action.payload},
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseTitle, chooseAuthor, chooseISBN, chooseGenre } = rootSlice.actions;