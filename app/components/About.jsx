var React = require('react');

var About = (props) => {
    return (
      <div>
        <h1 className="text-center page-title ">about</h1>
        <p>
          this application was built with <a href="https://facebook.github.io/react">react</a> & <a href="http://openweathermap.org">open weather map</a> s API's services.
        </p>
      </div>
    )
};

module.exports = About;
