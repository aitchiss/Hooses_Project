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

  def create_profile
    user = User.find(params[:id])

    profile = Profile.create({
      user: user,
      first_name: params[:first_name]
      })
  end


end