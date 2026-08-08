function About() {
  return (
    <div className="page">
      <h1>About Weather App</h1>

      <p>
        This application is a responsive client-side weather application
        developed using React.
      </p>

      <h2>Technology Stack</h2>

      <ul>
        <li>React</li>
        <li>React Router</li>
        <li>Axios</li>
        <li>OpenWeatherMap API</li>
        <li>JavaScript</li>
        <li>CSS</li>
        <li>Local Storage</li>
      </ul>

      <p>
        The application uses React Router for navigation and Axios for
        asynchronous weather data requests.
      </p>
    </div>
  );
}

export default About;