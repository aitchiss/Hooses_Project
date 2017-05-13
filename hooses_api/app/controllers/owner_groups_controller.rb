class OwnerGroupsController < ApplicationController

  def show_houses
    houses = OwnerGroup.where({:user_id => params[:id]})

    render json: houses.as_json({
      include: {
        house:{
          only: [:address, :post_code]
        }
      }
    })
  end

  def show_users
    users = OwnerGroup.where({:house_id => params[:id]})

    render json: users.as_json({
      except: [:created_at, :updated_at],
      include: {
        profiles: {
          only:[:first_name, :last_name, :address, :image]
        }
      }
    })
  end

  def create
    user = User.find(params[:user_id])
    house = House.find(params[:house_id])

    OwnerGroup.create({user: user, house: house})

    user_houses = OwnerGroup.where({:user_id => params[:user_id]})

    render json: user_houses.as_json({
      include: {
        house:{
          only: [:address, :post_code]
        }
      }
    })

  end



end
