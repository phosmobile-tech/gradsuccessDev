import { React, Component } from "react"
import { Query } from "react-apollo";
import loader from "../../../images/loader.gif"
import {GET_EXPERT_CLIENTS_GRADUATE_SCHOOL_STATEMENT_REVIEW_FORM} from "../../graphql/queries"
import {GET_EXPERT_CLIENTS_COVER_LETTER_REDRAFT} from "../../graphql/queries"
import {GET_EXPERT_CLIENTS_COVER_LETTER_REVIEW} from "../../graphql/queries"
import { GET_EXPERT_CLIENTS_GRADUATE_SCHOOL_ESSAY_REDRAFT_FORM } from "../../graphql/queries"
import {GET_EXPERT_CLIENTS_RESUME_REVIEW_FORM} from "../../graphql/queries"
import Modal from "react-modal"


import CoverLetterRedraft from "../../FormDetailsPreview/coverLetterRedraft"
import CoverLetterReviewForm from "../../FormDetailsPreview/coverLetterReviewForm"
import GraduateSchoolEssayRedraftForm from "../../FormDetailsPreview/graduateSchoolEssayRedraftForm"
import GraduateSchoolStatementReviewForm from "../../FormDetailsPreview/graduateSchoolStatementReviewForm"
import ResumeReviewForm from "../../FormDetailsPreview/resumeReviewForm"




const customStyles = {
  content : {
    top                   : '0%',
    left                  : '0%',
    width                 : '100%',
    height                : '100%',
    backgroundColor       : 'rgba(17, 153, 146, 0.3)'
  }
};

class AllApplications extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            coverLetterRedraftForm:false,
            coverLetterReviewForm:false,
            graduateSchoolEssayRedraftForm:false,
            resumeReviewForm:false,
            graduateSchoolStatementReviewForm:false,
            formID:"",
            id:"",
            itemCount:0

        }
        this.OpenApplicationDetails = this.OpenApplicationDetails.bind(this)
        this.handleCloseModal = this.handleCloseModal.bind(this)
        this.upadateItemCount = this.upadateItemCount.bind(this)
}

OpenApplicationDetails(formType,formID){

    this.setState({
        formID:formID,
        [formType]:true

    })
}

handleCloseModal(){
    this.setState({
        coverLetterRedraftForm:false,
        coverLetterReviewForm:false,
        graduateSchoolEssayRedraftForm:false,
        resumeReviewForm:false,
        graduateSchoolStatementReviewForm:false,

    })   
}
upadateItemCount(plus){
    this.setState({
        itemCount:this.state.itemCount+plus
    })
}




render() {
    return(  
        <div>
            <Query 
        query={GET_EXPERT_CLIENTS_COVER_LETTER_REDRAFT}
        variables={{ has_expert:this.props.expert_id }}
        onCompleted={data => this.upadateItemCount(data.getExpertClientsCoverLetterRedraft.length)}
        fetchPolicy = "no-cache"

        >
            {({ loading, error, data }) => {
             if (loading) return (
                <div className = "loader">
                    <div className="loader_main_content">
                        <img  src={loader} alt="gradsuccess" />
                        <h1>Loading...</h1>
                    </div>
                </div>
                )
              if (error) return <div>failed to load data</div>
              return (
                <div className="form_preview">
                    <div className="form_preview_inner">
                        <div className="form_preview_col_1">

                            {data.getExpertClientsCoverLetterRedraft.map((Item,index) =>
                                        <div key = {index} className = {!Item.completed && Item.status ==="Assigned"?" ":"hide_application"}>
                                            <div className = "client_expert_listing_main" >
                                                <div>
                                                    <h4>{Item.name}</h4>
                                                    <p>{Item.summary_of_interest}</p>
                                                    <span>{Item.created_at.split(" ")[0]}</span>
                                                    <span className = "statusCard">{Item.status}</span>
                                                </div>
                                                <div className = "client_expert_listing_btn_wrapper">
                                                    <button onClick={() => this.OpenApplicationDetails(Item.package, Item.form_id)}>view</button>
                                                    <button onClick={() => this.props.handleDisplayMessagingComponent(Item.form_id, Item.name)}>message</button>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    )}
                        </div>
                        
                    </div>
                </div>
              );
            }}
        </Query>
        <Query 
        query={GET_EXPERT_CLIENTS_COVER_LETTER_REVIEW}
        variables={{ has_expert:this.props.expert_id }}
        onCompleted={data => this.upadateItemCount(data.getExpertClientsCoverLetterReview.length)}
        fetchPolicy = "no-cache"

        >
            {({ loading, error, data }) => {
             if (loading) return (
                <div className = "loader">
                    <div className="loader_main_content">
                        <img  src={loader} alt="gradsuccess" />
                        <h1>Loading...</h1>
                    </div>
                </div>
                )
              if (error) return <div>failed to load data</div>
              return (
                <div className="form_preview">
                    <div className="form_preview_inner">
                        <div className="form_preview_col_1">

                            {data.getExpertClientsCoverLetterReview.map((Item,index) =>
                                        <div key = {index} className = {!Item.completed && Item.status ==="Assigned"?"":"hide_application"}>
                                            <div className = "client_expert_listing_main" >
                                                <div>
                                                    <h4>{Item.name}</h4>
                                                    <p>{Item.summary_of_interest}</p>
                                                    <span>{Item.created_at.split(" ")[0]}</span>
                                                    <span className = "statusCard">{Item.status}</span>
                                                </div>
                                                <div className = "client_expert_listing_btn_wrapper">
                                                    <button onClick={() => this.OpenApplicationDetails(Item.package, Item.form_id)}>view</button>
                                                    <button onClick={() => this.props.handleDisplayMessagingComponent(Item.form_id, Item.name)}>message</button>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    )}
                        </div>
                        
                    </div>
                </div>
              );
            }}
        </Query>
        <Query 
        query={GET_EXPERT_CLIENTS_GRADUATE_SCHOOL_ESSAY_REDRAFT_FORM}
        variables={{ has_expert:this.props.expert_id }}
        onCompleted={data => this.upadateItemCount(data.getExpertClientsGraduateSchoolEssayRedraftForm.length)}
        fetchPolicy = "no-cache"

        >
            {({ loading, error, data }) => {
             if (loading) return (
                <div className = "loader">
                    <div className="loader_main_content">
                        <img  src={loader} alt="gradsuccess" />
                        <h1>Loading...</h1>
                    </div>
                </div>
                )
              if (error) return <div>failed to load data</div>
              return (
                <div className="form_preview">
                    <div className="form_preview_inner">
                        <div className="form_preview_col_1">

                            {data.getExpertClientsGraduateSchoolEssayRedraftForm.map((Item,index) =>
                                        <div key = {index} className = {!Item.completed && Item.status ==="Assigned"?"":"hide_application"}>
                                            <div className = "client_expert_listing_main" >
                                                <div>
                                                    <h4>{Item.name}</h4>
                                                    <p>{Item.summary_of_interest}</p>
                                                    <span>{Item.created_at.split(" ")[0]}</span>
                                                    <span className = "statusCard">{Item.status}</span>
                                                </div>
                                                <div className = "client_expert_listing_btn_wrapper">
                                                    <button onClick={() => this.OpenApplicationDetails(Item.package, Item.form_id)}>view</button>
                                                    <button onClick={() => this.props.handleDisplayMessagingComponent(Item.form_id, Item.name)}>message</button>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    )}
                        </div>
                        
                    </div>
                </div>
              );
            }}
        </Query>
        <Query 
        query={GET_EXPERT_CLIENTS_RESUME_REVIEW_FORM}
        variables={{ has_expert:this.props.expert_id }}
        onCompleted={data => this.upadateItemCount(data.getExpertClientsResumeReviewForm.length)}
        fetchPolicy = "no-cache"

        >
            {({ loading, error, data }) => {
             if (loading) return (
                <div className = "loader">
                    <div className="loader_main_content">
                        <img  src={loader} alt="gradsuccess" />
                        <h1>Loading...</h1>
                    </div>
                </div>
                )
              if (error) return <div>failed to load data</div>
              return (
                <div className="form_preview">
                    <div className="form_preview_inner">
                        <div className="form_preview_col_1">

                            {data.getExpertClientsResumeReviewForm.map((Item,index) =>
                                        <div key = {index} className = {!Item.completed && Item.status ==="Assigned"?"":"hide_application"}>
                                            <div className = "client_expert_listing_main" >
                                                <div>
                                                    <h4>{Item.name}</h4>
                                                    <p>{Item.summary_of_interest}</p>
                                                    <span>{Item.created_at.split(" ")[0]}</span>
                                                    <span className = "statusCard">{Item.status}</span>
                                                </div>
                                                <div className = "client_expert_listing_btn_wrapper">
                                                    <button onClick={() => this.OpenApplicationDetails(Item.package, Item.form_id)}>view</button>
                                                    <button onClick={() => this.props.handleDisplayMessagingComponent(Item.form_id, Item.name)}>message</button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                        </div>
                        
                    </div>
                </div>
              );
            }}
        </Query>
        <Query 
        query={GET_EXPERT_CLIENTS_GRADUATE_SCHOOL_STATEMENT_REVIEW_FORM}
        variables={{ has_expert:this.props.expert_id }}
        onCompleted={data => this.upadateItemCount(data.getExpertClientsGraduateSchoolStatementReviewForm.length)}
        fetchPolicy = "no-cache"

        >
            {({ loading, error, data }) => {
             if (loading) return (
                <div className = "loader">
                    <div className="loader_main_content">
                        <img  src={loader} alt="gradsuccess" />
                        <h1>Loading...</h1>
                    </div>
                </div>
                )
              if (error) return <div>failed to load data</div>
              return (
                <div className="form_preview">
                    <div className="form_preview_inner">
                        <div className="form_preview_col_1">

                            {data.getExpertClientsGraduateSchoolStatementReviewForm.map((Item,index) =>
                                        <div key = {index} className = {!Item.completed && Item.status ==="Assigned"?"":"hide_application"}>
                                            <div className = "client_expert_listing_main" >
                                                <div>
                                                    <h4>{Item.name}</h4>
                                                    <p>{Item.summary_of_interest}</p>
                                                    <span>{Item.created_at.split(" ")[0]}</span>
                                                    <span className = "statusCard">{Item.status}</span>
                                                </div>
                                                <div className = "client_expert_listing_btn_wrapper">
                                                    <button onClick={() => this.OpenApplicationDetails(Item.package,Item.form_id)}>view</button>
                                                    <button onClick={() => this.props.handleDisplayMessagingComponent(Item.form_id, Item.name)}>message</button>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    )}
                        </div>
                        
                    </div>
                </div>
              );
            }}
        </Query>

        {this.state.itemCount ===0? <div className = "no_item">No in-progress application</div>:""}

        <Modal 
           isOpen={this.state.graduateSchoolStatementReviewForm}
           contentLabel="Minimal Modal Example"
           style={customStyles}
           ariaHideApp={false}
        >
            <div className = "detail_preview_modal_container">
                <div className = "detail_preview_modal_container_inner">
                      <GraduateSchoolStatementReviewForm userID = {this.state.formID} account_type = {this.props.account_type}/>
                </div>
            </div>
            <a className = "ModalCloseBut" onClick={this.handleCloseModal}>x</a>
        </Modal>

        <Modal 
           isOpen={this.state.coverLetterRedraftForm}
           contentLabel="Minimal Modal Example"
           style={customStyles}
           ariaHideApp={false}
        >
            <div className = "detail_preview_modal_container">
                <div className = "detail_preview_modal_container_inner">
                      <CoverLetterRedraft userID = {this.state.formID} account_type = {this.props.account_type}/>
                </div>
            </div>
            <a className = "ModalCloseBut" onClick={this.handleCloseModal}>x</a>
        </Modal>

        <Modal 
           isOpen={this.state.coverLetterReviewForm}
           contentLabel="Minimal Modal Example"
           style={customStyles}
           ariaHideApp={false}
        >
            <div className = "detail_preview_modal_container">
                <div className = "detail_preview_modal_container_inner">
                      <CoverLetterReviewForm userID = {this.state.formID} account_type = {this.props.account_type}/>
                </div>
            </div>
            <a className = "ModalCloseBut" onClick={this.handleCloseModal}>x</a>
        </Modal>

        <Modal 
           isOpen={this.state.graduateSchoolEssayRedraftForm}
           contentLabel="Minimal Modal Example"
           style={customStyles}
           ariaHideApp={false}
        >
            <div className = "detail_preview_modal_container">
                <div className = "detail_preview_modal_container_inner">
                      <GraduateSchoolEssayRedraftForm userID = {this.state.formID} account_type = {this.props.account_type}/>
                </div>
            </div>
            <a className = "ModalCloseBut" onClick={this.handleCloseModal}>x</a>
        </Modal>

        <Modal 
           isOpen={this.state.resumeReviewForm}
           contentLabel="Minimal Modal Example"
           style={customStyles}
           ariaHideApp={false}
        >
            <div className = "detail_preview_modal_container">
                <div className = "detail_preview_modal_container_inner">
                      <ResumeReviewForm userID = {this.state.formID} account_type = {this.props.account_type}/>
                </div>
            </div>
            <a className = "ModalCloseBut" onClick={this.handleCloseModal}>x</a>
        </Modal>
        </div>
    )
}
}
export default AllApplications