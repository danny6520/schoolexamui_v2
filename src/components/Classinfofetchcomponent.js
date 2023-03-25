import React from 'react';
import ClassinfofetchService from '../Services/ClassinfofetchService';




class Classinfofetchcomponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            classinfo:[]
        }
    }

    componentDidMount() {
        ClassinfofetchService.getClassinfo().then((res) => {
            this.setState({classinfo: res})
        });
    }

    render () {

        return (
            <div>
                <h1><center>Class Info</center></h1>
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <td>Class ID</td>
                            <td>Class Name</td>
                            <td>FK School ID</td>
                            <td>FK Section ID</td>
                            <td>Class Description</td>
                            <td>Created by</td>
                            <td>Last Update by</td>
                            <td>Updated date time</td>
                            <td>Class Status</td>
                            <td>Class Notes</td>
                            <td>Class Active</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.classinfo.map(
                                classinfoobj =>
                                <tr key = {classinfoobj.pk_class_id}>
                                    <td> {classinfoobj.fk_school_id} </td>
                                    <td>{classinfoobj.class_name}</td>
                                    <td> {classinfoobj.fk_school_id} </td>
                                    <td> {classinfoobj.fk_section_id} </td>
                                    <td> {classinfoobj.class_description} </td>
                                    <td> {classinfoobj.created_by} </td>
                                    <td> {classinfoobj.last_updated_by} </td>
                                    <td> {classinfoobj.last_updated_date_time} </td>
                                    <td> {classinfoobj.class_status} </td>
                                    <td> {classinfoobj.class_notes} </td>
                                    <td> {classinfoobj.class_active} </td>                                    
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }


}

export default Classinfofetchcomponent