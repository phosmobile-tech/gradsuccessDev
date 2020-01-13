import React from "react"
import { jsx, css } from "@emotion/core"
import Layout from "../components/layout"
import HomeHero from "../components/homeHero"
import EssayReview from "../components/Careers/essayReview"
import EssayRedraft from "../components/Careers/essayRedraft"
import ResumeReview from "../components/Careers/resumeReview"
import ResumeRedraft from "../components/Careers/resumeRedraft"
import careersbg from "../../images/careersbg.jpg"

const careersBgURL = `url(${careersbg})`

const breakpoints = [375, 576, 768]

const mq = breakpoints.map(bp => `@media (max-width: ${bp}px)`)

class CVresume extends React.Component {
  constructor(props) {
    super(props)
    this.state = { reviewTab: true, redraftTab: false }
    this.toggleTabs = this.toggleTabs.bind(this)
  }
  toggleTabs = arg => e => {
    if (arg === "review") {
      this.setState({ reviewTab: true, redraftTab: false })
    }
    if (arg === "redraft") {
      this.setState({ reviewTab: false, redraftTab: true })
    }
  }

  render() {
    return (
      <Layout>
        <HomeHero
          title="Careers Center - CV Resume"
          text="We help young graduates and career people achieve their long and short
        term academic and professional goals"
          imgUrl={careersBgURL}
        />
        <div
          css={{
            display: "flex",
            width: "30%",
            height: "70px",
            margin: "0px auto",
            verticalAlign: "middle",
            outline: "none",
            alignItems: "center",
            justifyContent: "center",
            [mq[2]]: {
              width: "70%",
            },
          }}
        >
          <div
            onClick={this.toggleTabs("review")}
            css={{
              height: "50px",
              width: "50%",
              border: "none",
              outline: "none",
              verticalAlign: "middle",
            }}
          >
            <button
              css={{
                border: "none",
                height: "50px",
                width: "100%",
                background: "black",
                opacity: "0.6",
                verticalAlign: "middle",
                textAlign: "center",
                outline: "none",
                cursor: this.state.reviewTab ? "default" : "pointer",
              }}
            >
              {" "}
              <h4
                css={{
                  marginBottom: "0px",
                  color: this.state.reviewTab ? "white" : "#19a99d",
                }}
              >
                {" "}
                Resume Review
              </h4>{" "}
            </button>
          </div>
          <div
            onClick={this.toggleTabs("redraft")}
            css={{
              height: "50px",
              width: "50%",
              border: "none",
              outline: "none",
              position: "relative",
            }}
          >
            <button
              css={{
                height: "50px",
                width: "100%",
                background: "black",
                opacity: "0.6",
                border: "none",
                outline: "none",
                verticalAlign: "middle",
                cursor: this.state.redraftTab ? "default" : "pointer",
              }}
            >
              {" "}
              <h4
                css={{
                  marginBottom: "0px",
                  color: this.state.redraftTab ? "white" : "#19a99d",
                }}
              >
                {" "}
                Resume Redraft{" "}
              </h4>{" "}
            </button>
          </div>
        </div>
        {this.state.reviewTab && (
          <div>
            {" "}
            <ResumeReview />{" "}
          </div>
        )}
        {this.state.redraftTab && (
          <div>
            {" "}
            <ResumeRedraft />{" "}
          </div>
        )}
      </Layout>
    )
  }
}

export default CVresume
