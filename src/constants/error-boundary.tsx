import React, { ErrorInfo } from "react";


class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; easterEggTriggered: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, easterEggTriggered: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("MapChart error:", error, errorInfo);
  }

  triggerEasterEgg = () => {
    this.setState({ easterEggTriggered: true });
    const audio = new Audio('https://weichiachang.github.io/Easter-egg/images/music/elevator.mp3');
    audio.play();
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className='text-red'>
          <h1>You scrolled too far and broke the map :)<br />We don't have any clients outside of the continental US.</h1>
          <br /><br/>
          <h1>You'll have to refresh the page to see the map again.</h1>
          <br /><br/>
          {this.state.easterEggTriggered ? (
            <h1 className="animate-bounce text-6xl pt-[8rem]">🐣🐣🐣</h1>
          ) : (
            <h1 onClick={this.triggerEasterEgg} style={{ cursor: 'pointer', fontSize: '3.75rem', paddingTop: '8rem' }}>🐣</h1>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;