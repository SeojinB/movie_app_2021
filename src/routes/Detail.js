import React from "react";
import "./Detail.css";

class Detail extends React.Component {

    // 2: props location속성값 undefined일 시, /(Home)으로 이동
    componentDidMount() {
        const { location, history } = this.props;
        if(location.state === undefined) {
            history.push("/");
        }
    }

    // 1: props location 속성값 받고 title 표시
    render() {
        const { location } = this.props;
        console.log(location);
        if (location.state) {
            return (
                <div className="detail__box">
                    <img src={ location.state.poster } alt={ location.state.title } title={ location.state.title } className="detail__bg" />
                    <div className="detail">
                        <img src={ location.state.poster } alt={ location.state.title } title={ location.state.title } />
                        <p className="detail__title">{ location.state.title }</p>
                        <p className="detail__year">{ location.state.year }</p>
                        <p className="detail__genres">{ location.state.genres }</p>
                        <p className="detail__summary">{ location.state.summary }</p>
                        {/* 주석 쓰는 방식 */}
                    </div>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Detail;