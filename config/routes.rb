Rails.application.routes.draw do
  post '/auth/login', to: 'authentications#login'
  get '/auth/verify', to: 'authentications#verify'
  resources :users, only: :create
  resources :posts
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
end