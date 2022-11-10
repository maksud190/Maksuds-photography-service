import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='bg-gray-600 my-5 p-10'>
                <h1 className='text-3xl text-white'>What is the difference between SQL and NoSQL?</h1>
                <p className='text-lg text-white'><span className='text-green-500'>Answer: </span>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
            </div>
            <div className='bg-gray-600 my-5 p-10'>
                <h1 className='text-3xl text-white'>What is JWT and how does it work?</h1>
                <p className='text-lg text-white'><span className='text-green-500'>Answer: </span>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                <br />
                JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                </p>
            </div>
            <div className='bg-gray-600 my-5 p-10'>
                <h1 className='text-3xl text-white'>What is the difference between JavaScript and Node.js?</h1>
                <p className='text-lg text-white'><span className='text-green-500'>Answer: </span>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
            </div>
            <div className='bg-gray-600 my-5 p-10'>
                <h1 className='text-3xl text-white'>How does Node.js handle multiple requests at the same time?</h1>
                <p className='text-lg text-white'><span className='text-green-500'>Answer: </span>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>
        </div>
    );
};

export default Blogs;