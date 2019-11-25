"use strict";

const Conta = use("App/Models/Conta");

/**
 * Resourceful controller for interacting with Contas
 */
class ContaController {
  /**
   * Show a list of all Contas.
   * GET Contas
   */
  async index() {
    const contas = await Conta.query()
    .with('user')
    .fetch();

    return contas;
  }

  /**
   * Create/save a new Conta.
   * POST Contas
   */
  async store({ request, auth }) {
    const data = request.only(["nome", "validade", "codBarras", "valor"]);
    const conta = await Conta.create({ user_id: auth.user.id, ...data });

    return conta;
  }

  /**
   * Display a single Conta.
   * GET Contas/:id
   */
  async show({ params }) {
    const conta = await Conta.findOrFail(params.id);

    return conta;
  }

  /**
   * Delete a Conta with id.
   * DELETE Contas/:id
   */
  async destroy({ params, auth }) {
    const conta = await Conta.findOrFail(params.id);

    if (conta.user_id !== auth.user.id) {
      return response.status(401);
    }

    await conta.delete();
  }
}

module.exports = ContaController;