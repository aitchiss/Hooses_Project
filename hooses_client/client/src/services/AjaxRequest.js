
class AjaxRequest {

  get(url, done){
    const xhr = new XMLHttpRequest()
    xhr.withCredentials = true
    xhr.open("GET", url)

    xhr.onload = () => {
      done(null, JSON.parse(xhr.response), xhr.status)
    }

    xhr.onerror = () => {
      done(xhr.response)
    }

    xhr.send()

  }


  post(url, payload, done){
    const xhr = new XMLHttpRequest()
    xhr.open("POST", url)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.withCredentials = true

    xhr.onload = () => {
      done(null, JSON.parse(xhr.response))
    }

    xhr.onerror = () => {
      console.log('error')
      done(xhr.response)
    }

    xhr.send(payload)


  }

  put(url, payload, done){
    const xhr = new XMLHttpRequest()
    xhr.open("PUT", url)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.withCredentials = true

    xhr.onload = () => {
      done(null, JSON.parse(xhr.response))
    }

    xhr.onerror = () => {
      console.log('error')
      done(xhr.response)
    }

    xhr.send(payload)
  }


  delete(url, done){
    const xhr = new XMLHttpRequest()
    xhr.open("DELETE", url)
    xhr.setRequestHeader("Content-Type", "application/json")
    xhr.withCredentials = true

    xhr.onload = () => {
      done(null, JSON.parse(xhr.response))
    } 

    xhr.onerror = () => {
      done(xhr.response)
    }

    xhr.send()


  }



}


export default AjaxRequest

