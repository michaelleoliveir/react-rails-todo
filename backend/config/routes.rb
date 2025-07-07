# configurando a url da api
Rails.application.routes.draw do
  
  # todas as rotas dentro deles terão o prefixo /api
  namespace :api do

    # gera rotas automáticas para todos os recursos do to do (get, post, patch, delete)
    resources :todos do

      # gerando uma rota personalizada para o patch
      member do
        patch 'update_completed'
      end
    end
  end

end
