import React from "react";
// import fetch from "node-fetch";

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
    loaded: boolean;
    data?: string;
}
export class Activity extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            languages: [],
            activities: [],
            loaded: false
        }
    }

    async getWakaStats(): Promise<void> {
        // const { body: languages } = await (await fetch("https://cors-anywhere.herokuapp.com/https://wakatime.com/share/@e54486eb-d788-4fc7-8b4f-29d15f1db897/1ea06163-3638-42b4-9259-84e2cd39ee00.json", {
        //     headers: {
        //         "X-Requested-With": "Fetch"
        //     }
        // })).json();
        // const { body: activity } = await (await fetch("https://cors-anywhere.herokuapp.com/https://wakatime.com/share/@e54486eb-d788-4fc7-8b4f-29d15f1db897/cc2257d8-5cc1-46be-b5c1-7e98d6405e4f.json", {
        //     headers: {
        //         "X-Requested-With": "Fetch"
        //     }
        // })).json();
        this.setState({
            languages: [
                {
                    "color": "#563d7c",
                    "name": "CSS",
                    "percent": 93.76
                },
                {
                    "color": "#e44b23",
                    "name": "HTML",
                    "percent": 6.24
                }
            ],
            activities:  [
                {
                    "grand_total": {
                        "digital": "0:00",
                        "hours": 0,
                        "minutes": 0,
                        "text": "0 secs",
                        "total_seconds": 0
                    },
                    "range": {
                        "date": "2020-09-08",
                        "end": "2020-09-08T16:59:59Z",
                        "start": "2020-09-07T17:00:00Z",
                        "text": "Tue Sep 8th 2020",
                        "timezone": "Asia/Jakarta"
                    }
                },
                {
                    "grand_total": {
                        "digital": "0:00",
                        "hours": 0,
                        "minutes": 0,
                        "text": "0 secs",
                        "total_seconds": 0
                    },
                    "range": {
                        "date": "2020-09-09",
                        "end": "2020-09-09T16:59:59Z",
                        "start": "2020-09-08T17:00:00Z",
                        "text": "Wed Sep 9th 2020",
                        "timezone": "Asia/Jakarta"
                    }
                },
                {
                    "grand_total": {
                        "digital": "0:00",
                        "hours": 0,
                        "minutes": 0,
                        "text": "0 secs",
                        "total_seconds": 0
                    },
                    "range": {
                        "date": "2020-09-10",
                        "end": "2020-09-10T16:59:59Z",
                        "start": "2020-09-09T17:00:00Z",
                        "text": "Thu Sep 10th 2020",
                        "timezone": "Asia/Jakarta"
                    }
                },
                {
                    "grand_total": {
                        "digital": "0:00",
                        "hours": 0,
                        "minutes": 0,
                        "text": "0 secs",
                        "total_seconds": 0
                    },
                    "range": {
                        "date": "2020-09-11",
                        "end": "2020-09-11T16:59:59Z",
                        "start": "2020-09-10T17:00:00Z",
                        "text": "Fri Sep 11th 2020",
                        "timezone": "Asia/Jakarta"
                    }
                },
                {
                    "grand_total": {
                        "digital": "0:00",
                        "hours": 0,
                        "minutes": 0,
                        "text": "0 secs",
                        "total_seconds": 0
                    },
                    "range": {
                        "date": "2020-09-12",
                        "end": "2020-09-12T16:59:59Z",
                        "start": "2020-09-11T17:00:00Z",
                        "text": "Sat Sep 12th 2020",
                        "timezone": "Asia/Jakarta"
                    }
                },
                {
                    "grand_total": {
                        "digital": "0:00",
                        "hours": 0,
                        "minutes": 0,
                        "text": "0 secs",
                        "total_seconds": 0
                    },
                    "range": {
                        "date": "2020-09-13",
                        "end": "2020-09-13T16:59:59Z",
                        "start": "2020-09-12T17:00:00Z",
                        "text": "Yesterday",
                        "timezone": "Asia/Jakarta"
                    }
                },
                {
                    "grand_total": {
                        "digital": "0:00",
                        "hours": 0,
                        "minutes": 0,
                        "text": "0 secs",
                        "total_seconds": 0
                    },
                    "range": {
                        "date": "2020-09-14",
                        "end": "2020-09-14T16:59:59Z",
                        "start": "2020-09-13T17:00:00Z",
                        "text": "Today",
                        "timezone": "Asia/Jakarta"
                    }
                }
            ],
            loaded: true
        });
    }

    async componentDidMount() {
        await this.getWakaStats();
    }

    render() {
        const state = this.state as State;
        return (
            <div className="container justify-content-center fixed-top">
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