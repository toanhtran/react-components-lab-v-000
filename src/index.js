Skip to content

Search or jump to…

Pull requests
Issues
Marketplace
Explore
 @toanhtran Sign out
20
0 424 learn-co-students/react-components-lab-v-000
 Code  Issues 2  Pull requests 423  Projects 0  Insights
react-components-lab-v-000/src/index.js
0118780  on Mar 12, 2018
@DanielSeehausen DanielSeehausen updated solution and fixed warnings
@Lukeghenco @DanielSeehausen

65 lines (58 sloc)  1.27 KB
import React from 'react'
import ReactDOM from 'react-dom'

const BUTCHER_PRODUCTS = [
  'Tenderloin',
  'Short ribs',
  'Beef shin',
  'Ribeye'
]

// Define these exported classes
export class OlderCoaster extends React.Component {
  render() {
    return (
      <div className="oldercoaster">
        <p>Two grannies having the time of their life!</p>
        <p>Passengers:</p>
        <ul>
          <li>Agnes</li>
          <li>Muriel</li>
        </ul>
      </div>
    )
  }
}

export class InFrontOfYou extends React.Component {
  render() {
    return (
      <div>
        <p>You shouldn't look too far.</p>
        <p>Sometimes, the solution is right in front of you.</p>
      </div>
    )
  }
}
export class ButcherShop extends React.Component {
  render() {
    const products = BUTCHER_PRODUCTS.map((p, idx) => (<li key={idx}>{p}</li>))
    return (
      <div className="butcher-shop">
        <p>Hello! We have the following products for sale today:</p>
        <ul>
          { products }
        </ul>
      </div>
    )
  }
}
export class App extends React.Component {
  render() {
    return (
      <div id="app">
        <OlderCoaster />
        <InFrontOfYou />
        <ButcherShop />
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
© 2019 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
Press h to open a hovercard with more details.
