class UsersController < ApplicationController

  def index

    users = User.all
    render json: users.as_json({
      except: [:created_at, :updated_at],
      include: {
        profiles: {
          only:[:first_name, :last_name, :address, :image]
        }
      }
    })
  end

  def show
    user = User.find(params[:id])
    render json: user.as_json({
      except: [:created_at, :updated_at],
      include: {
        profiles: {
          only:[:first_name, :last_name, :address, :image]
        }
      }
    })
  end

  ## NEED TO MAKE SURE ONLY EVER HAS ONE PROFILE
  def create_profile
    user = User.find(params[:id])
    user_profiles = user.profiles


    if user_profiles.length == 0

      profile = Profile.create({
        user: user,
        first_name: params[:first_name],
        last_name: params[:last_name],
        address: params[:address],
        image: params[:image]
        })

    end
  end

  def edit_profile


  end


end