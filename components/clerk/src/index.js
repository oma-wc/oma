import { component, html, useState } from 'haunted'

import ClientLibrary from './client-library.js'

/**
 * NOTE: A lot of this code also exists in @formclerk/react
 */
const Clerk = ({ clerkId }) => {
  const INITIALIZED = 'initialized'
  const PROCESSING = 'processing'
  const SUCCESS = 'success'
  const FAILURE = 'failure'

  const url = `https://europe-west1-accodeing-saas.cloudfunctions.net/clerk_enqueue/${clerkId}`
  const form = document.querySelector('[slot="form"]')
  const clientLibraryOnSubmit = new ClientLibrary(form, { autobind: false })
  const [status, setStatus] = useState(INITIALIZED)

  const dataFromFormElements = (elements) => {
    let data = {}

    Array.from(elements)
      .filter((element) => {
        if (element.nodeName === 'INPUT') {
          if (element.type === 'radio' || element.type === 'checkbox') {
            return element.checked // Only add checked ones
          } else if (element.type === 'hidden') {
            return true
          } else if (element.type === 'submit') {
            return false
          } else {
            // All other input types, like text and number
            return element.value !== '' // Only add if field has value
          }
        } else if (element.nodeName === 'TEXTAREA') {
          if (element.id === 'comment') {
            return true
          } else {
            return element.value !== '' // Only add if field has value
          }
        } else if (element.nodeName === 'SELECT') {
          return element.value !== '' // Only add if a value is selected
        }
      })
      .map((element) => {
        if (element.type === 'checkbox') {
          if (data[element.name] === undefined) {
            data[element.name] = []
          }
          data[element.name].push(element.value)
        } else {
          data[element.name] = element.value
        }
      })

    return data
  }

  const postData = (url, data) =>
    fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

  const submitForm = (event) => {
    event.preventDefault()

    setStatus(PROCESSING)

    clientLibraryOnSubmit()

    console.log('Clerk: Posting data...')

    const data = dataFromFormElements(event.target.elements)

    postData(url, data)
      .then((response) => response.json())
      .then((data) => {
        console.log('Clerk success:', data)
        setStatus(SUCCESS)
      })
      .catch((error) => {
        console.error('Clerk error:', error)
        setStatus(FAILURE)
      })
  }
  form.onsubmit = submitForm

  return html`
    <slot name="form"></slot>
    <slot name="${status}"></slot>
  `
}

Clerk.observedAttributes = ['clerk-id']

customElements.define('oma-clerk', component(Clerk))
