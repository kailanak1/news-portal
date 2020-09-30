import React, {Component} from 'react';
import NewSingle from './NewSingle';

class News extends Component {
    constructor(props){
        super();
            this.state = {
                news: [],
            }
    }

    componentDidMount(){
        const url = `http://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=4bc8217303dd46068f2435adf813445b`

        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                this.setState({
                    news: data.articles
                })
            })
            .catch((error) => console.log(error))
    }

    renderItems(){
        return this.state.news.map((item)=> 
        <NewSingle key={item.url} item={item} />
        );
    }

    render(){
        return(
            <div className="row">
                {this.renderItems()}
            </div>
        );
    }
}

export default News
