class RegistrationStore{
  constructor(){
    this.fields= {
      firstName:'',
      lastName:'',
      email:'',
      password:''
    }
    this.errors = {}
  }

  getFields(){
    return this.fields
  }
  getErrors(){
    return this.errors;
  }
  validate(){
    this.errors = {}
    this.validatePresence('firstName')
    this.validatePresence('lastName')
    this.validatePassword('password')
    this.validateEmail('email')
  }
  validatePresence(fieldName) {
    if (this.fields[fieldName] === '' ){
      this.addError(fieldName, 'is required')
    }
  }
    validateEmail(fieldName){
      const filter = /^\w+([\.-]?\ w+)*@\w+([\.-]?\ w+)*(\.\w{2,3})+$/
      if(!filter.test(this.fields[fieldName])){
        this.addError(fieldName, 'is not an email')
      }
    }

    validatePassword(fieldName){
      if(!this.fields[fieldName].match(/[0-9]/||/[a-z]/||/[A-Z]/)){
        this.addError(fieldName, 'Password must contain a combination of letters and numbers')
      }
      if(this.fields[fieldName].length <= 8 ){
        this.addError(fieldName, 'Password must contain 8 or more Characters')
      }
    }

  addError(fieldName, message){
    this.errors[fieldName] = message
  }

}
const store = new RegistrationStore()
export default store
