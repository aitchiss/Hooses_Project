class UsersController < ApplicationController
  before_action :authenticate_user!
  
  def index
    render json: current_user
  end

  # def index

  #   users = User.all
  #   render json: users.as_json({
  #     except: [:created_at, :updated_at],
  #     include: {
  #       profiles: {
  #         only:[:first_name, :last_name, :address, :image]
  #       }
  #     }
  #   })
  # end

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

  
  def create_profile
    user = User.find(params[:id])
    user_profiles = user.profiles

    ## ENSURES A PROFILE IS ONLY CREATE IF THEY DON'T HAVE ONE ALREADY
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
    user = User.find(params[:id])
    user_profile = user.profiles.first

    user_profile.update_attribute(:first_name, params[:first_name])
    user_profile.update_attribute(:last_name, params[:last_name])
    user_profile.update_attribute(:address, params[:address])
    user_profile.update_attribute(:image, params[:image])


    render json: user.as_json({
      except: [:created_at, :updated_at],
      include: {
        profiles: {
          only:[:first_name, :last_name, :address, :image]
        }
      }
    })

  end


end