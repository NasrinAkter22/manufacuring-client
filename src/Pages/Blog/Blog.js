import React from 'react';

const Blog = () => {
    return (
        <div>
           <h1>  Difference between javascript and nodejs?</h1>
           <p> 
           JavaScript is a simple programming language that runs in any browser JavaScript Engine. Whereas Node JS is an interpreter or running environment for a JavaScript programming language that holds many excesses, it requires libraries that can easily be accessed from JavaScript programming for better use.
           JavaScript is normally following Java Programming language standard. There may have some different way of writing code, but at the same time, we can say it following the Java Programming language standard. Whereas node JS is written in C++ and provides a V8 engine base browser javascript running engine, it helps us run a written javascript program in any browser environment.
           </p>
           <h1> When should you use nodejs and when should you use mongodb?</h1>
           <p>Node. js is primarily used for non-blocking, event-driven servers, due to its single-threaded nature. It's used for traditional web sites and back-end API services, but was designed with real-time, push-based architectures in mind.

           SQL. NoSQL databases like MongoDB are a good choice when your data is document-centric and doesn't fit well into the schema of a relational database, when you need to accommodate massive scale, when you are rapidly prototyping, and a few other use cases.
           </p>
           <h1>  Differences between sql and nosql databases?</h1>
           <p>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.
           SQL is the programming language used to interface with relational databases. NoSQL is a class of DBMs that are non-relational and generally do not use SQL. </p>

 
        </div>
    );
};

export default Blog;