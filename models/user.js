var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

// User 모델의 스키마 정의
var userSchema = mongoose.Schema({
    // local strategy 패스포트용 로컬키
   
    name: String,
    email: {type:String, unique:true},
    password: String,
    phone: String,
    // name: {type:String, required:[true,"Name is required!"]},
    // email : {type:String},
    // password : {type:String, required:[true,"Password is required!"]},
    
});

//password를 암호화
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
//password의 유효성 검증
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};
module.exports = mongoose.model('User', userSchema);