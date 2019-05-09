Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'keyboard_demos#demo1'

  get 'demo2', to: 'keyboard_demos#demo2'
end
