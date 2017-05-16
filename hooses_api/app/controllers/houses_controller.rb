class HousesController < ApplicationController

  def index
    houses = House.all
    render json: houses
  end

  def show
    house = House.find(params[:id])
    render json: house.as_json({
      except: [:created_at, :updated_at],
      include: {
        topics: {
          only: [:id, :title, :status]
        }
      }
    })
  end

  def create
    house = House.create(house_params)
    render json: house
  end

  def update
    house = House.find(params[:id])
    house.update_attributes(house_params)
    render json: house.as_json({
      except: [:created_at, :updated_at],
      include: {
        topics: {
          only: [:title, :status]
        }
      }
    })
  end

  def house_params
    params.require(:house).permit([:address, :post_code])
  end


end
