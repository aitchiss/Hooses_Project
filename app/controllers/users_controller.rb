class UsersController < ApplicationController

  def index

    users = User.all

    render json: users.as_json({
      include: {

        profiles: {
          only:[:first_name, :last_name, :address, :image]
        


        },
        owner_groups: {
          include: {
            house: {
              only: [:address, :post_code]
            }
          }
        }
      }
      })

  end
end