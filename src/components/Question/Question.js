import React from 'react';
import './Question.css';

const Question1 = () => {
    return (
        <div className='question'>
            <div>
            <h2>Q. What is the difference between Props and useStates?</h2>
            <p>Ans: Props passes data from one component to another component
                <ul>
                    <li>Props are read only.It means they are immutable.</li>
                    <li>With the help of props we can reuse components</li>
                    <li>We can pass Array, Object, Function via props.</li>
                </ul>
                <p>States is used to contain data that can be changed with user interaction</p>
                <ul>
                    <li>State changes asynchronusly.</li>
                    <li>State isn't read only.They are mutable.</li>
                    <li>State can't help components to be reuseable.</li>
                </ul>
            </p>
            </div>
            <div>
            <h2>Q. How useState work?</h2>
            <p>Ans: useState is a react hook that allow us to  allows us to declare  allows us declare one or more state variables in a component
                <ul>
                    <li>useState works asynchronusly</li>
                    <li>useState should always be use inside a funcitonal component</li>
                    <li>it returns a default value along with a setValue function </li>
                    <li>The setValue function update the state value
                    </li>
                    <li>We can use out state in our component</li>
                </ul>
            </p>
            </div>

        </div>
    );
};

export default Question1;