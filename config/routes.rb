Fantasyinsiders::Application.routes.draw do
  devise_for :users

  root :to => 'home#index'

  namespace :api do
  end

  get '*a', to: 'home#index' 

end
