'use strict'

const User = use('App/Models/User');
const Database = use('Database')

class AuthController {
  async register({ request, response }){
    const data = request.only(['username','email', 'password', 'saldo']);

    const user = await User.create(data);

    return user;
  }
  async authenticate({ request, auth}){
    const {email, password } = request.all();

    const token = await auth.attempt(email, password);

    return token;
  }

  async usuarios(){
    const user = await User.all();
    return user;
  }

  async atualizaSaldo({ params, request }){
    const user = await User.findByOrFail('email', params.id);

    const data = request.only([
      'saldo',
    ]); 

    user.merge(data);

    await user.save();

    return user;
  }
}

module.exports = AuthController
