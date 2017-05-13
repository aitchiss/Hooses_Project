Rails.application.routes.draw do
devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  scope path: "api" do
    resources :users, defaults: {format: :json}

    ##PROFILE ROUTES - ATTACHED TO INDIVIDUAL USER
    # create a profile
    post '/users/:id/profile' => 'users#create_profile'
   



    get '/owner_groups/user/:id' => 'owner_groups#show_houses'

    get '/owner_groups/house/:id' => 'owner_groups#show_users'
  end


end
