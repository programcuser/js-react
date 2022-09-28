import React from 'react';
// import * as markdown from 'bootstrap-markdown.js';
// import $ from 'bootstrap-markdown.js';
// const $ = require('bootstrap-markdown.js');
new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
});

export default class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.markdownRef = React.createRef();
  }

  componentDidMount() {
    $(this.markdownRef.current).markdown({
      iconlibrary: 'fa', // правильная библиотека иконок
      onChange: (e) => {
        const content = e.getContent();
        // код который вызовется при изменении содержимого редактора
        this.props.onContentChange(content);
      },
    });
  }

  render () {
    return (
      <form>
        <input name="title" type="text" placeholder="Title?" />
        <textarea name="content" data-provide="markdown" rows="10" ref={this.markdownRef}></textarea>
        <label className="checkbox">
          <input name="publish" type="checkbox" /> Publish
        </label>
        <hr/>
        <button type="submit" className="btn">Submit</button>
      </form> 
    );
  }
}