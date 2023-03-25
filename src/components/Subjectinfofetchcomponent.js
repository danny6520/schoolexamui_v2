import React from 'react';
import SubjectinfofetchService from '../Services/SubjectinfofetchService';




class Subjectinfofetchcomponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            subjectinfo:[]
        }
    }

    componentDidMount() {
        SubjectinfofetchService.getSubjectinfo().then((res) => {
            this.setState({subjectinfo: res})
        });
    }

    render () {

        return (
            <div>
                <h1><center>Subject Info</center></h1>
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <td>Subject ID</td>
                            <td>FK Class ID</td>
                            <td>FK School ID</td>
                            <td>Subject Name</td>
                            <td>Subject Detail</td>
                            <td>Updated By</td>
                            <td>Updated date time</td>
                            <td>Subject Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.subjectinfo.map(
                                subjectinfoobj =>
                                <tr key = {subjectinfoobj.pk_subject_id}>
                                    <td> {subjectinfoobj.pk_subject_id} </td>
                                    <td>{subjectinfoobj.fk_class_id}</td>
                                    <td> {subjectinfoobj.fk_school_id} </td>
                                    <td> {subjectinfoobj.subject_name} </td>
                                    <td> {subjectinfoobj.subject_detail} </td>
                                    <td> {subjectinfoobj.subject_updated_by} </td>
                                    <td> {subjectinfoobj.subject_updated_date_time} </td>   
                                    <td> {subjectinfoobj.subject_status} </td>                                
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }


}

export default Subjectinfofetchcomponent