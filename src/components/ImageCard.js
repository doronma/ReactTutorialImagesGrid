import React, { Component } from 'react'

export default class ImageCard extends Component {

    constructor(props) {
        super(props);
        this.state = { span: 0 }

        // Create a dom element reference
        this.imageRef = React.createRef();
    }

    componentDidMount() {

        // After render, wait for image to load
        this.imageRef.current.addEventListener('load', this.setSpans)
    }

    setSpans = () => {

        // After image load, calculate row span
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);

        // If key and value are the same, can use only key
        this.setState({ spans });

    }


    render() {
        const { description, urls } = this.props.image;

        // connect the img item to dom reference
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }} >
                <img
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        );
    }
}
