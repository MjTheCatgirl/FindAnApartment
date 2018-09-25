Rails.application.routes.draw do
  resources :apartments
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Map requests to local host/apartments/index to apartments_controller's index action
  get 'apartments/index'

  # Map requests to root of application to apartments_controller's index action
  root 'apartments#index'
end
