import logo from './logo.svg';
import './App.css';
import './card.css'
import showdown from 'showdown';
import MarkdownView from 'react-showdown';

const converter = new showdown.Converter();

function App() {

  const markdown = `
    # Welcome to React Showdown :+1:

    ## This is a sub-heading...
  `

  return (
    <div className="App">
      <div>
        <h1>Markdown Previewer</h1>
        <MarkdownView
          markdown={markdown}
          options={{tables: true, emoji: true}}
        />
      </div>
    </div>
  );
}

export default App;
