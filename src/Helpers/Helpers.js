import 'whatwg-fetch'
// Helper function for fetch


 const checkStatus = (response) =>{
  if (response.status >= 200 && response.status < 300) {
    return response
  } else {
    var error = new Error(response.statusText)
    error.response = response
    throw error
  }
}


export const post = (path, props, callback) => {

console.log(props);
console.log(JSON.stringify(props));
  fetch('http://localhost:8000/'+ path , {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(props)
})
.then(checkStatus)
.then(resp =>{
return resp.json();
})
.then(respObj =>{
if(respObj.error){
 console.log(respObj.error);
} else{
callback(respObj);
}
}).catch(function(error) {
 console.log('request failed', error)
})

}



export const get = (path, callback) => {

fetch('http://localhost:8000/' + path, {
  method: 'GET'
}).then(checkStatus)
.then(resp =>{
  return resp.json();
})
.then(respData =>{
  callback(respData);
})
.catch(function(error) {
    console.log('request failed', error)
    return
  })
}


export const checkLogin = (nextStage, replace, callback) => {
fetch('http://localhost:8000/validateToken', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({
token: sessionStorage.getItem('token')
})
}).then(checkStatus)
.then(resp => {
  return resp.json();
}).then(respObj =>{
  console.log(respObj);
  if(respObj.data == null){
    replace('/')
  }
  callback();
}).catch(function(error) {
    console.log('request failed', error)
    callback();

  })

}



  export const mapStateToProps = (data) => {
    return  data;

  }
