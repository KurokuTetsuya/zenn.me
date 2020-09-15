import React from "react";
import { get } from "superagent";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import  * as legoData from "../../animations/lego-loader.json";
import  * as doneData from "../../animations/done-animation.json";
import "./style.css";

interface State {
    languages: {
        color: string;
        name: string;
        percent: number;
    }[];
    activities: {
        grand_total: {
            digital: number;
            hours: number;
            minutes: number;
            text: string;
            total_seconds: number;
        };
        range: {
            date: string;
            end: string;
            start: string;
            text: string;
            timezone: string;
        }
    }[];
    instagram: string;
    loaded: boolean;
    wakatimeDone: boolean;
    instagramDone: boolean;
    done: boolean;
    data?: string;
}

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: legoData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
}

const defaultOptions2 = {
    loop: false,
    autoplay: true,
    animationData: doneData,
    rendererSettings: {
       preserveAspectRatio: "xMidYMid slice"
    }
 };

export class Activity extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            languages: [],
            activities: [],
            instagram: "",
            instagramDone: false,
            wakatimeDone: false,
            loaded: false,
            done: undefined
        }
    }

    async getActivities(): Promise<void> {
        const { body: languages } = await get("http://localhost:8585/api/wakatime/lang");
        this.setState({ wakatimeDone: true })
        const { body } = await get("http://localhost:8585/api/instagram");
        this.setState({
            instagram: `${body.data[0].permalink}embed`,
            instagramDone: true,
            languages,
            loaded: true
        });
        setTimeout(() => this.setState({ done: true }), 1000);
    }

    async componentDidMount() {
        await this.getActivities();
    }

    render() {
        const state = this.state as State;
        if (!state.done) return (
            <FadeIn>
                <div className="container justify-content-center">
                    <div className="row justify-content-center align-items-center">
                        <div className="load-flex d-flex p-2 col-6">
                        <h1>Fetching wakatime activity report...</h1>
                        {!state.wakatimeDone ? (
                            <Lottie options={defaultOptions} height={120} width={120} />
                        ) : (
                            <Lottie options={defaultOptions2} height={120} width={120} />
                        )}
                        </div>
                        <div className="load-flex d-flex p-2 col-6">
                        <h1>Fetching latest social media post...</h1>
                        {!state.instagramDone ? (
                            <Lottie options={defaultOptions} height={120} width={120} />
                        ) : (
                            <Lottie options={defaultOptions2} height={120} width={120} />
                        )}
                        </div>
                    </div>
                </div>
            </FadeIn>
        );
        else return (
            <div className="container justify-content-center">
                <br/>
                <h2 className="text-center">Latest Instagram Post</h2>
                <br/>
                <div className="text-center">
                    <iframe title="Instagram Latest Post" src={state.instagram} width="320" height="425" frameBorder={0} scrolling="no" allowTransparency={true}></iframe> 
                </div>
                <br></br>
                <h1 id="code-activity" className="text-center">Coding Activity</h1>
                <div className="row d-flex-inline align-items-center">
                    <div className="col-6">
                        <iframe width="500px" height="1000px" src="https://github-readme-stats.vercel.app/api?username=kurokutetsuya&show_icons=true&count_private=true&include_all_commits=true&hide_title=true&theme=cobalt" title="Zen Github Stats" allowTransparency={true} frameBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
                    </div>
                    <div className="col-6">
                        <h2 className="text-center">Programming Language Activity</h2>
                        <br/>
                        { state.languages.length ? state.languages.map(d => (
                            <div>
                                <h2 style={{color: d.color}}><b>{d.name}</b></h2>
                                <div className="progress">
                                    <div style={{ width: `${d.percent}%` }} className="progress-bar" role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>{d.percent}%</div>
                                </div>
                            </div>
                        )) : <p className="text-center"><b>No Activity tracked this Week</b></p>}
                    </div>
                </div>
            </div>
        );
    }
}