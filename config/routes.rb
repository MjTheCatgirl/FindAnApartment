Rails.application.routes.draw do
  resources :apartments, defaults: {format: :json}
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # Map requests to root of application to apartments_controller's index action
  root 'application#index'
end
