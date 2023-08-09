import { createSlice } from "@reduxjs/toolkit";


const initialState={
    allboyan: [],
    allanswer: [],
    filter:"",
    subject:"",
    answer_category:"",
    month:"",
    islive:false,
    prayerTimes:[]
}

const boyanSlice= createSlice({
    name: 'boyan',
    initialState,
    reducers:{
        getAllBoyans:(state,action)=>{

            if(action.payload){
                const boyans = action.payload.sort(function (a, b) {
                    return (a?.date > b?.date) ? -1 : ((a?.date < b?.date) ? 1 : -1);
                });
                state.allboyan.push(boyans);
            }
        },
        getAllAnswer:(state,action)=>{
            if(action.payload){
                const answers = action.payload.sort(function (a, b) {
                    return (a?.answer_no > b?.answer_no) ? -1 : ((a?.answer_no < b?.answer_no) ? 1 : -1);
                });
                state.allanswer.push(answers);
            }
        },
        getBoyanCategory: (state, action)=>{
            state.filter= action.payload
        },
        getAnswerCategory: (state, action)=>{
            state.answer_category= action.payload
        },
        getIslive:(state, action)=>{
            state.islive= !state.islive
        },
        getBoyanSubject:(state, action)=>{
            state.filter= "subject";
            state.subject= action.payload;
        },
        getBoyanMonth:(state, action)=>{
            state.filter= "month";
            state.month= action.payload;
            // state.allboyan=[...state.allboyan, action.payload]
        },
        getPrayerTimes:(state, action)=>{
            state.prayerTimes.push(action.payload)
        },
        
    }
})

export const {getAllBoyans,getAllAnswer, getBoyanCategory,getAnswerCategory, getIslive, getBoyanSubject,getBoyanMonth, getPrayerTimes}= boyanSlice.actions;
export default boyanSlice.reducer;