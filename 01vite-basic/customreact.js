var mainContainer = document.querySelector('#root')

function customeRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)
}

var reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '__blank',
    },
    children: 'click to visit Google'
}

customeRender(reactElement, mainContainer)