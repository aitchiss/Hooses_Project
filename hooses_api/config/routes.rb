Rails.application.routes.draw do
devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  scope path: "api" do
    resources :users, defaults: {format: :json}

    ##PROFILE ROUTES - ATTACHED TO INDIVIDUAL USER
    # create a profile
    post '/users/:id/profile' => 'users#create_profile'
    # edit a profile
    put 'users/:id/profile' => 'users#edit_profile'


    ##OWNER GROUP ROUTES

    #default rails routes gives us create
    resources :owner_groups, defaults: {format: :json}
    #custom route to show all houses belonging to a user via owner group
    get '/owner_groups/user/:id' => 'owner_groups#show_houses'
    #custom route to show all users associated with a house via owner group
    get '/owner_groups/house/:id' => 'owner_groups#show_users'

    ## HOUSES
    resources :houses, defaults: {format: :json}

    ## TOPICS
    resources :topics, defaults: {format: :json}

    ##MESSAGES
    resources :messages, defaults: {format: :json}

  end


end
