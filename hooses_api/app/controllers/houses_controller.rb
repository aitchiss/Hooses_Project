class HousesController < ApplicationController

  def index
    houses = House.all
    render json: houses
  end

  def show
    house = House.find(params[:id])
    render json: house
  end

  def create
    house = House.create(house_params)
    render json: house
  end

  def house_params
    params.require(:house).permit([:address, :post_code])
  end


end
