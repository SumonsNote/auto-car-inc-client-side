import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 class="text-4xl font-bold text-center my-10 text-secondary uppercase">Questions Answers</h1>
            <div className='px-12'>
                <h2 className='text-2xl font-bold'>How will you improve the performance of a React Application?</h2>
                <p className='my-5'>Before understanding the question, we have to understand how react works and how react updates it's UI. We can remove our react warning we are facing. it does slow our application when rendering. For production we can easily handle and remove by using React Developer Tools for Chrome and other brothers. we can use Single-File Builds it's recommended by React Official. At the time of creating react app we use npx create react app but react suggests that we install terser-brunch to create a production. Browserify for efficient production build we can install and use few plugins. wepack minifies our code and reduce file size for production build. Profiling Components with the DevTools Profiler. Virtualize Long Lists if our react application renders more and more lines of code windowing helps us reducing and makes a subset of small code of lines. </p>
            </div>
            <div className='px-12'>
                <h2 className='text-2xl font-bold'>What are the different ways to manage a state in a React application?</h2>
                <p className='my-5'>Local State is data we manage in one and another components which is useState we usually use. Global State is the another option to manage state. it is used from everywhere in react application. A global state is the authenticated user state. Server state which comes from an external server which is must be integrated to UI state. URL state which exists on our URL, such as pathname and query.</p>
            </div>
            <div className='px-12'>
                <h2 className='text-2xl font-bold'>How does prototypical inheritance work?</h2>
                <p className='my-5'>Prototypical inheritance refers to access to object from another object properties. we use JavaScript prototype to add new properties and methods to an existing objects. All JavaScript objects inherit properties and methods from a prototype such as
                    <li>Data object inherit from data.prototype</li>
                    <li>Array object from inherit array.prototype</li>
                    <li>Command object from inherit command.prototype</li>
                </p>
            </div>
            <div className='px-12'>
                <h2 className='text-2xl font-bold'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                <p className='my-5'></p>
            </div>
            <div className='px-12'>
                <h2 className='text-2xl font-bold'>What is a unit test? Why should write unit tests?</h2>
                <p className='my-5'>Unit test is a typical of software testing when it goes to production. This is purpose of testing a software application before using for users. A unit may be an individual function, method, procedure, module, or object. Software testing is important because developers developes software and do wrong their it's usually common mistakes actually not mistakes it's a part of developing softwares. There are some unit system cycle:
                <li>Acceptance Testing</li>
                <li>System Testing</li>
                <li>Integration Testing</li>
                <li>Unit Testing</li>
                </p>
            </div>
        </div>
    );
};

export default Blog;