import React, { Component } from 'react';
import './Mygame.css';
class Mygame extends Component {
    render() {
        return (
            <div className='myInfo' >
                <img className='pic'src='/sam.webp' alt='photo'/>
                <br/><br/><br/><br/>
                <table className='tab'>
                    <tr>
                        <td> <label>Name</label></td>
                        <td> <label>Charanya Reddy</label></td>
                    </tr>
                    <tr>
                        <td> <label> Programm</label></td>
                        <td> <label> B-tech cse</label></td>
                    </tr>
                    <tr>
                        <td><label> Id no</label></td>
                        <td><label> 2400032523</label></td>

                    </tr>
                    <tr>
                        <td><label>Email</label></td>
                        <td><label>2400032523@kluniversity.in</label></td>
                    </tr>
                    <tr>
                        <td><lable>Course</lable></td>
                        <td><lable>FEDF</lable></td>
                    </tr>
                </table>
                
                
            </div>
        );
    }
}

export default Mygame;