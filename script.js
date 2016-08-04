/**
 * Created by Travis on 8/4/2016.
 */
$(document).ready(function(){
    (function(){

        require(['marked'], function(marked){
            marked.setOptions({
                renderer: new marked.Renderer(),
                gfm: true,
                tables: true,
                breaks: false,
                pedantic: false,
                sanitize: true,
                smartLists: true,
                smartypants: false
            });
        });

            var MarkdownPreviewer = React.createClass({

                getInitialState : function(){
                    return{
                        text : "<p> </p>"
                    }
                },

                updateText : function(){
                        var newText = (this.refs.markdownBox.value);
                        var marked = require('marked');
                        this.setState({text : marked(newText)});
                    console.log(this.refs.markdownBox.value, this.state.text);
                },

                render : function(){
                    return(
                        <div className = "application row">
                            <textarea ref = "markdownBox" className = "markdownBox well col-md-6" defaultValue = "Type text here!" onChange = {this.updateText}/>
                            <div className = "well previewBox col-md-6" dangerouslySetInnerHTML = {{__html: this.state.text}}></div>
                        </div>
                    )
                }
            });

        ReactDOM.render(<div>
            <MarkdownPreviewer/>
        </div>, document.getElementById("content"));

    })();
});