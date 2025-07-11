class Api::TodosController < ApplicationController
  # o set_todo é executado sempre dentro do SHOW, UPDATE e DESTROY
  before_action :set_todo, only: %i[ show update_completed destroy ]

  # GET /todos
  # retorna todos os dados em formato de json
  def index
    @todos = Todo.all

    render json: @todos
  end

  # GET /todos/1
  # retorna todos os dados de um to do específico
  def show
    render json: @todo
  end

  # POST /todos
  # cria um novo todo 
  def create
    @todo = Todo.new(todo_params)

    if @todo.save
      render json: @todo, status: :created
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /todos/1
  # atualiza informações do todo
  def update_completed
    if @todo.update(completed: params[:completed])
      render json: @todo
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  # DELETE /todos/1
  # deleta um to do
  def destroy
    @todo.destroy!
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_todo
      @todo = Todo.find(params.expect(:id))
    end

    # Only allow a list of trusted parameters through.
    def todo_params
      params.require(:todo).permit(:todo_name, :completed, :description)
    end

end
