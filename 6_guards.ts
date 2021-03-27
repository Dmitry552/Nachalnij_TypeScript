function strip(x: string | number) {
  if(typeof x === 'number') {
    return x.toFixed(2);
  }
  return x.trim()
}

class MyResponse {
  header = "response header"
  rezult = 'response rezult'
}
class MyError {
  header = "error header"
  message = 'error message'
}
function handle(res: MyResponse | MyError): Object {
  if(res instanceof MyResponse) {
    return {
      info: res.header + res.rezult
    }
  } else {
    return {info: res.header + res.message}
  }
}

//==========
type AlertType = 'success' | 'danger' | 'warning'
function setAlertType(type: AlertType) {
  //...
}
setAlertType('success')
setAlertType('warning')

//=========