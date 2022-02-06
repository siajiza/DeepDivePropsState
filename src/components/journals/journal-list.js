import React, { Component } from "react";
import { JournalEntry } from "./journal-entry";

const rawJournalData = [
    //Each one of this date items are a "journal entry".
    { title: "Post one", content: "Post content", status: "draft" },
    { title: "Post two", content: "Post content", status: "published" },
    { title: "Post three", content: "Post content", status: "published" },
    { title: "Post four", content: "Post content", status: "published" }
];

const rawJournalLastNews = [
    //Each one of this date items are a "journal entry last news".
    { title: "Post special news one", content: "Post special news content", status: "draft" },
    { title: "Post special news two", content: "Post special news content", status: "published" },
    { title: "Post special news three", content: "Post special news content", status: "published" },
    { title: "Post special news four", content: "Post special news content", status: "published" }
];

//this is a class component
export default class JournalList extends Component {
    constructor(props) {
        super();

        this.state = {
            journaldata: rawJournalData,
            journalLastNews: rawJournalLastNews,
            greeting: "TAKE A LOOK!",
            specialInfo: "LAST NEWS",
            isOpen: true
        };
    }

            

    render() {
        //*const* - this a variable to store the data of
        //the entries data and then is gonna render the content on the screen browser.
        
        // *variable name* iqual(=) What i gonna do?
        //map over the "constructor", load the content of the item "journaldata" 
        //and show on the screen the value content named "rawJournalData". 

        const journalEntries = this.state.journalLastNews.map(JournalEntry => {
            return (
                <div key={JournalEntry}>
                    <JournalEntry 
                    title={JournalEntry.title}
                    //"Especial Journal Entry" 
                    content={JournalEntry.content}
                    //"Espacial information for you here" 
                    /> 

                </div>
            );
        });

                //return <h2>esto me encantaaaaaaa!!!!</h2>
        return (
            <div>
                <h1>{this.state.greeting}</h1>
                <JournalEntry 
                    title="First Journal Entry" 
                    content="Every day some information for you here" 
                />

                <JournalEntry 
                    title="Second Journal Entry" 
                    content="Every day some information for you here"
                />

               <JournalEntry 
                  title="Best Journal Entry" 
                  content="Every day some information for you here"
                />
                <h1>{this.state.specialInfo}</h1>
                
                
            </div>

            
            


            
        );
    }
}
             